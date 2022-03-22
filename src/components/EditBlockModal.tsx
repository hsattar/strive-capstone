import { Dispatch, FormEvent, MouseEvent, SetStateAction, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addElementsToCodeAction, changeElementClassNameAction, createNewCode, createNewEditableCode, updateCodeAndCodeBlocksAction } from '../redux/actions/actionCreators'
import { v4 as uuid } from 'uuid'
import { displayOptions, flexDirections, flexItemss, flexJustifys } from '../data/tailwind-options/display'
import CustomStylesSelectMenu from './reusable/CustomEditSelectMenu'
import parse from 'html-react-parser'

interface IProps {
    setShowEditTextModal: Dispatch<SetStateAction<boolean>>

}

export default function EditBlockModal({ setShowEditTextModal }: IProps) {

    const dispatch = useDispatch()
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

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
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

    useEffect(() => {
        (elementToEdit && elementToEdit.type === 'element') && setelementToEditText(elementToEdit.code[1].text)
    }, [elementToEdit])

    return (
        <div onClick={() => setShowEditTextModal(false)} className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div onClick={e => e.stopPropagation()} className={`relative top-20 mx-auto p-5 border ${elementToEdit!.type === 'element' ? 'w-[50%]' : 'w-[85%]'} shadow-lg rounded-md bg-white`}>
                <form onSubmit={handleSubmit} className="mt-3 text-center">
                    { elementToEdit!.type === 'element' && 
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

                    /> }
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
                        <button>
                            Add Element
                        </button>
                        </div>
                    ) }
                    <div className="flex justify-end mt-2">
                        { changesMade ? (
                            <button type="submit" onClick={e => e.stopPropagation()} className="bg-green-500 hover:bg-green-600 py-1 px-5 mr-3 rounded-md text-white">Save</button>
                        ) : (
                            <button type="button" onClick={handleDuplicateBlock} className="bg-blue-500 hover:bg-blue-600 py-1 px-5 mr-3 rounded-md text-white">Duplicate</button>
                        ) }
                    </div>
                </form>
            </div>
        </div>
    )
}