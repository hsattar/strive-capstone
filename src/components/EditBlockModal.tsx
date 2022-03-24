import { Dispatch, FormEvent, MouseEvent, SetStateAction, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addElementsToCodeAction, addOrRemoveElementLinkAction, changeElementClassNameAction, createNewCode, createNewEditableCode, updateCodeAndCodeBlocksAction } from '../redux/actions/actionCreators'
import { v4 as uuid } from 'uuid'
import { displayOptions, flexDirections, flexItemss, flexJustifys } from '../data/tailwind-options/display'
import CustomStylesSelectMenu from './reusable/CustomEditSelectMenu'
import parse from 'html-react-parser'
import CustomSelectDropdown from './reusable/CustomSelectDropdown'
import { useLocation } from 'react-router-dom'

interface IProps {
    pages: string[]
    setShowEditTextModal: Dispatch<SetStateAction<boolean>>
}

export default function EditBlockModal({ pages, setShowEditTextModal }: IProps) {

    const dispatch = useDispatch()
    const { pathname } = useLocation()
    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    const codeBlocks = useSelector((state: IReduxStore) => state.website.codeBlocks)
    const elementToEdit = useSelector((state: IReduxStore) => state.website.elementToEdit)
    const code = createNewEditableCode(elementToEdit!.code)
    
    const [changesMade, setChangesMade] = useState(false)
    const [elementToEditText, setelementToEditText] = useState<string | undefined>('')
    const [display, setDisplay] = useState('Display')
    const [flexDirection, setFlexDirection] = useState('Flex Direction')
    const [flexItems, setFlexItems] = useState('Flex Items')
    const [flexJustify, setFlexJustify] = useState('Flex Justify')

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
        switch (elementToEdit?.type) {
            case 'element': {
                elementToEdit.code[1].text = elementToEditText
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

    const handleStyleChange = (value: string, type: elementToEditOptions) => {
        switch (type) {
            case 'display': 
                setDisplay(value)
                break
            case 'flexDirection': 
                setFlexDirection(value)
                break
            case 'flexJustify': 
                setFlexJustify(value)
                break
            case 'flexItems': 
                setFlexItems(value)
                break
            default: return
        }
        dispatch(changeElementClassNameAction(type, value))
        !changesMade && setChangesMade(true)
    }

    const linkChange = (add: boolean) => {
        setElementLinked(prev => !prev)
        if (add) {
            if (linkType === 'Link - Internal') {
                dispatch(addOrRemoveElementLinkAction(linkType, pageSelected))
            } else {
                dispatch(addOrRemoveElementLinkAction(linkType, linkTo))
            }
        } else {
            dispatch(addOrRemoveElementLinkAction('', ''))
        }
        !changesMade && setChangesMade(true)
    }

    useEffect(() => {
        (elementToEdit && elementToEdit.type === 'element') && setelementToEditText(elementToEdit.code[1].text)
    }, [elementToEdit])

    useEffect(() => {
        (elementToEdit && (elementToEdit.code[0].tag?.startsWith('<Link') || elementToEdit.code[0].tag?.startsWith('<a'))) ? setElementLinked(true) : setElementLinked(false)
    }, [elementToEdit])

    return (
        <div onClick={() => setShowEditTextModal(false)} className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div onClick={e => e.stopPropagation()} className={`relative top-20 mx-auto p-5 border ${elementToEdit!.type === 'element' ? 'w-[50%]' : 'w-[85%]'} shadow-lg rounded-md bg-white`}>
                { elementToEdit!.type === 'element' && (
                    <>
                    <textarea
                        autoFocus
                        rows={6}
                        ref={textAreaRef}
                        onClick={e => e.stopPropagation()}
                        value={elementToEditText}
                        onChange={e => {
                            setelementToEditText(e.target.value)
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
                        // <div className="relative z-0 mb-6 w-full group">
                        //     <input type="email" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        //     <label htmlFor="floating_email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        // </div>
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
                            <button onClick={() => linkChange(true)} className="bg-green-500 hover:bg-green-600 py-1 px-5 mr-3 rounded-md text-white">Add</button>
                        ) : (   
                            <button onClick={() => linkChange(false)} className="bg-red-500 hover:bg-red-600 py-1 px-5 mr-3 rounded-md text-white">Remove</button>
                        ) }
                    </div>
                    </div>
                    </>
                ) }
                    { elementToEdit!.type === 'container' && (
                    <div className="flex flex-col items-center">
                    <div className="w-full">{ parse(code) }</div>
                    <div className="flex my-3">
                    <CustomStylesSelectMenu 
                        type="display"
                        containerClass="w-[150px] relative mr-2"
                        initialValue={display}
                        listOfValues={displayOptions}
                        onClick={handleStyleChange}
                    />
                    <CustomStylesSelectMenu 
                        type="flexDirection"
                        containerClass="w-[150px] relative mr-2"
                        initialValue={flexDirection}
                        listOfValues={flexDirections}
                        onClick={handleStyleChange}
                    />
                    <CustomStylesSelectMenu 
                        type="flexJustify"
                        containerClass="w-[150px] relative mr-2"
                        initialValue={flexJustify}
                        listOfValues={flexJustifys}
                        onClick={handleStyleChange}
                    />
                    <CustomStylesSelectMenu 
                        type="flexItems"
                        containerClass="w-[150px] relative mr-2"
                        initialValue={flexItems}
                        listOfValues={flexItemss}
                        onClick={handleStyleChange}
                    />
                    </div>
                    <div className="flex">
                    <button type="button">
                        Add Element
                    </button>
                    <button type="button">
                        Add Flex Container
                    </button>
                    </div>
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