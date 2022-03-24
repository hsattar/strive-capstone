import { Dispatch, FormEvent, MouseEvent, SetStateAction, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addElementsToCodeAction, addOrRemoveElementLinkAction, changeElementClassNameAction, createNewCode, createNewEditableCode, updateCodeAndCodeBlocksAction } from '../redux/actions/actionCreators'
import { v4 as uuid } from 'uuid'
import { displayOptions, flexDirections, flexItemss, flexJustifys } from '../data/tailwind-options/display'
import CustomStylesSelectMenu from './reusable/CustomEditSelectMenu'
import parse from 'html-react-parser'
import CustomSelectDropdown from './reusable/CustomSelectDropdown'
import { useLocation } from 'react-router-dom'
import SVGIcon from './reusable/CustomSVGIcon'
import colors from '../data/tailwind-options/colors'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import DraggableContainerItem from './DraggableContainerItem'

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
    const [backgroundColor, setBackgroundColor] = useState('BG Color')

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
            case 'bgColor': 
                setBackgroundColor(value)
                dispatch(changeElementClassNameAction(type, `bg-${value}`))
                break
            default: return
        }
        if (type !== 'bgColor') {
            dispatch(changeElementClassNameAction(type, value))
        }
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

    const handleDragEnd = (result: any) => {

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
                    <div className="w-full">{ parse(code) }</div>
                    <div className="flex justify-between items-center w-full my-3">
                        <p className="pr-2 mr-2">{elementToEdit!.name}</p>
                        <div className="flex">
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
                        <CustomStylesSelectMenu 
                            type="bgColor"
                            containerClass="w-[150px] relative mr-2"
                            initialValue={backgroundColor}
                            listOfValues={colors}
                            onClick={handleStyleChange}
                        />
                        </div>
                        <div className="flex my-2">
                            <SVGIcon svgClassName="h-6 w-6 mr-2 text-gray-400" pathD="M11 17l-5-5m0 0l5-5m-5 5h12" />
                            <SVGIcon svgClassName="h-6 w-6 mr-4 text-gray-400" pathD="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </div>
                    </div>
                    <DragDropContext onDragEnd={handleDragEnd}>
                        <Droppable droppableId="root-container">
                        {provided => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                            { elementToEdit?.code.filter((block, index) => {
                                if (index === 0 || index === elementToEdit.code.length - 1) return
                                if (block.tag?.startsWith('</')) return
                                if (block.text) return
                                return block
                            }).map((block, idx) => {
                                return <DraggableContainerItem key={idx} index={idx} block={block} />
                            }) }
                            {provided.placeholder}
                            </div>
                        ) }
                        </Droppable>
                    </DragDropContext>
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