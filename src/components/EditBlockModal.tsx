import parse from 'html-react-parser'
import { Dispatch, MouseEvent, SetStateAction, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import { addElementsToCodeAction, addOrRemoveElementLinkAction, createNewCode, createNewEditableCode, updateCodeAndCodeBlocksAction } from '../redux/actions/actionCreators'
import ContainerElement from './ContainerElement'
import CustomSelectDropdown from './reusable/CustomSelectDropdown'

interface IProps {
    pages: string[]
    setShowEditTextModal: Dispatch<SetStateAction<boolean>>
}

export default function EditBlockModal({ pages, setShowEditTextModal }: IProps) {

    const dispatch = useDispatch()
    const { pathname } = useLocation()
    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    const codeBlocks = useSelector((state: IReduxStore) => state.website.present.codeBlocks)
    const elementToEdit = useSelector((state: IReduxStore) => state.misc.elementToEdit)
    const code = createNewEditableCode(elementToEdit!.code)
    
    const [changesMade, setChangesMade] = useState(false)
    const [elementToEditText, setElementToEditText] = useState<string | undefined>('')

    const [linkTo, setLinkTo] = useState('')
    const [pageSelected, setPageSelected] = useState(pages[0])
    const [linkType, setLinkType] = useState('Link - Internal')
    const linkTypeOptions = ['Link - Internal', 'Link - External']
    const [elementLinked, setElementLinked] = useState(false)

    const handleDuplicateBlock = (e: MouseEvent) => {
        e.stopPropagation()
        const id = uuid()
        const newCodeArray = [...elementToEdit!.code]
        const updatedCodeArray = newCodeArray.map(block => ({ ...block }))
        const newElement = {
            ...elementToEdit,
            id,
            code: [...updatedCodeArray]
        } as ICodeBlock
        dispatch(addElementsToCodeAction(newElement))
        setShowEditTextModal(false)
    }

    const handleSave = () => {
        let newText = elementToEditText
        if (elementLinked) {
            if (linkType === 'Link - Internal') {
                console.log('internal')
                newText = `<a href="/ws/test/${pageSelected}">  ${elementToEditText}  </a>`
            } else {
                newText = `<a href="/ws/test/${linkTo}" target="_blank">  ${elementToEditText}  </a>`
            }
        } 
        switch (elementToEdit?.type) {
            case 'element': {
                elementToEdit.code[1].text = newText
                const updatedCodeBlocks = codeBlocks.map(block => block.id === elementToEdit.id ? elementToEdit : block)
                const flatBlocks = updatedCodeBlocks.map(block => block.code).flat()
                const updatedCode = createNewCode(flatBlocks)
                dispatch(updateCodeAndCodeBlocksAction(updatedCode, updatedCodeBlocks))
            }
            break
            case 'container': {
                const updatedCodeBlocks = codeBlocks.map(block => block.id === elementToEdit.id ? elementToEdit : block)
                const flatBlocks = updatedCodeBlocks.map(block => block.code).flat()
                const updatedCode = createNewCode(flatBlocks)
                dispatch(updateCodeAndCodeBlocksAction(updatedCode, updatedCodeBlocks))
            } 
            break
            default: return
        }
        setChangesMade(false)
        setShowEditTextModal(false)
    }

    const linkChange = (add: boolean) => {
        const highlighted = window.getSelection()?.toString()
        setElementLinked(prev => !prev)
        if (!add) return dispatch(addOrRemoveElementLinkAction('', '', ''))
        if (linkType === 'Link - Internal') {
            if (highlighted) {
                dispatch(addOrRemoveElementLinkAction(linkType, pageSelected, highlighted))
            } else {
                dispatch(addOrRemoveElementLinkAction(linkType, pageSelected, ''))
            }
        } else {
            if (highlighted) {
                dispatch(addOrRemoveElementLinkAction(linkType, linkTo, highlighted))
            } else {
                dispatch(addOrRemoveElementLinkAction(linkType, linkTo, ''))
            }

        }
        !changesMade && setChangesMade(true)
    }

    useEffect(() => {
        if (!elementToEdit) return
        if (elementToEdit.type === 'element') {
            if (elementToEdit.code[1].text?.startsWith('<a href')) {
                setElementLinked(true)
                const splitText = elementToEdit.code[1].text.split('  ')
                setElementToEditText(splitText[1])
            } else {
                setElementLinked(false)
                setElementToEditText(elementToEdit.code[1].text)
            }
        }
    }, [elementToEdit])

    return (
        <div onClick={() => setShowEditTextModal(false)} className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div onClick={e => e.stopPropagation()} className={`relative top-10 mx-auto p-5 border ${elementToEdit!.type === 'element' ? 'w-[50%]' : 'w-[85%]'} shadow-lg rounded-md max-h-[90vh] overflow-y-scroll bg-white`}>
                { elementToEdit!.type === 'element' && (
                    <>
                    <textarea
                        autoFocus
                        rows={6}
                        ref={textAreaRef}
                        onClick={e => e.stopPropagation()}
                        value={elementToEditText}
                        onChange={e => {
                            setElementToEditText(e.target.value)
                            !changesMade && setChangesMade(true)
                        }}
                        className="w-full p-2 mb-2 resize-none border-2 rounded outline-none"
                    /> 
                    <div className="flex items-center">
                    <CustomSelectDropdown 
                        containerClass="w-[150px] relative z-50"
                        initialValue={linkType}
                        listOfValues={linkTypeOptions}
                        onClick={value => setLinkType(value)}
                    />
                    { linkType === 'Link - Internal' ? (
                      <CustomSelectDropdown 
                            containerClass="w-[150px] relative z-50 ml-4"
                            initialValue={pageSelected}
                            listOfValues={pages}
                            onClick={value => setPageSelected(value)}
                        />  
                    ) : (
                        <input 
                            type="url" 
                            placeholder="URL" 
                            value={linkTo}
                            onChange={e => setLinkTo(e.target.value)}
                            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:border focus:outline-none ml-4 w-[50%] block py-1.5 px-2.5" 
                        />
                    ) }
                    <div className="ml-auto">
                        { !elementLinked ? (
                            <button onClick={() => linkChange(true)} className="border-green-500 border hover:bg-green-500 py-1 px-5 mr-3 rounded-md text-green-500 hover:text-white">Add</button>
                        ) : (   
                            <button onClick={() => linkChange(false)} className="border-red-500 border hover:bg-red-500 py-1 px-5 mr-3 rounded-md text-red-500 hover:text-white">Remove</button>
                        ) }
                    </div>
                    </div>
                    </>
                ) }
                    { elementToEdit!.type === 'container' && (
                    <div className="flex flex-col items-center select-none">
                    <div className="w-full mb-3">{ parse(code) }</div>
                        { elementToEdit?.code.map((block, index) => {
                            if (block.text || block.tag?.startsWith(`<img`)) {
                                console.log(block)
                                return <ContainerElement key={index} index={index} block={block} pages={pages} changesMade={changesMade} setChangesMade={setChangesMade} />
                            } else {
                                return
                            }
                        }) }
                    </div>
                ) }
                <div className="flex justify-end mt-4">
                    { changesMade ? (
                        <button onClick={e => {
                            e.stopPropagation()
                            handleSave()
                        }} className="bg-green-500 hover:bg-green-600 py-1 px-5 mr-3 rounded-md text-white">Save</button>
                    ) : (
                        <button onClick={handleDuplicateBlock} className="bg-blue-500 hover:bg-blue-600 py-1 px-5 mr-3 rounded-md text-white">Duplicate</button>
                    ) }
                </div>
            </div>
        </div>
    )
}