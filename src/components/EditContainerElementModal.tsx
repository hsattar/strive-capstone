import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addOrRemoveElementLinkAction, createNewCode, updateCodeAndCodeBlocksAction } from '../redux/actions/actionCreators'
import CustomSelectDropdown from './reusable/CustomSelectDropdown'

interface IProps {
    pages: string[]
    setShowModal: Dispatch<SetStateAction<boolean>>
}

export default function EditContainerElementModal({ pages, setShowModal }: IProps) {

    const dispatch = useDispatch()
    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    const codeBlocks = useSelector((state: IReduxStore) => state.website.present.codeBlocks)
    const elementToEdit = useSelector((state: IReduxStore) => state.misc.elementToEdit)
    
    const [changesMade, setChangesMade] = useState(false)
    const [elementToEditText, setElementToEditText] = useState<string | undefined>('')

    const [linkTo, setLinkTo] = useState('')
    const [pageSelected, setPageSelected] = useState(pages[0])
    const [linkType, setLinkType] = useState('Link - Internal')
    const linkTypeOptions = ['Link - Internal', 'Link - External']
    const [elementLinked, setElementLinked] = useState(false)

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

        elementToEdit!.code[1].text = newText
        const updatedCodeBlocks = codeBlocks.map(block => block.id === elementToEdit!.id ? elementToEdit : block) as ICodeBlock[]
        const flatBlocks = updatedCodeBlocks.map(block => block!.code).flat()
        const updatedCode = createNewCode(flatBlocks)
        dispatch(updateCodeAndCodeBlocksAction(updatedCode, updatedCodeBlocks))

        setChangesMade(false)
        setShowModal(false)
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
        <div onClick={() => setShowModal(false)} className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div onClick={e => e.stopPropagation()} className={`relative top-20 mx-auto p-5 border w-[50%] shadow-lg rounded-md bg-white`}>
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
                <div className="flex justify-end mt-4">
                    <button onClick={e => {
                        e.stopPropagation()
                        handleSave()
                    }} className={`bg-green-500 hover:bg-green-600 py-1 px-5 mr-3 rounded-md text-white`}>Save</button>
                </div>
            </div>
        </div>
    )
}