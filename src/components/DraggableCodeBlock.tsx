import { Dispatch, SetStateAction, useRef, useEffect, useState, MouseEvent } from "react"
import { Draggable } from "react-beautiful-dnd"
import parse from 'html-react-parser'
import { addElementsToCodeAction, createNewEditableCode, setElementToEditAction } from "../redux/actions/actionCreators"
import { useDispatch, useSelector } from "react-redux"
import { v4 as uuid } from 'uuid'

interface IProps {
    codeBlock: ICodeBlock
    index: number
    setSidebarTab: Dispatch<SetStateAction<string>>
    setShowEditTextModal: Dispatch<SetStateAction<boolean>>
}

export default function DraggableCodeBlock({ codeBlock, index, setSidebarTab, setShowEditTextModal}: IProps) {

    const dispatch = useDispatch()
    const code = createNewEditableCode(codeBlock.code)

    const handleClick = () => {
        dispatch(setElementToEditAction(codeBlock))
        setSidebarTab('styles')
    }

    const handleDuplicateBlock = (e: MouseEvent<HTMLSpanElement>) => {
        e.stopPropagation()
        const id = uuid()
        const newCodeArray = [...codeBlock.code]
        const updatedCodeArray = newCodeArray.map(block => ({ ...block }))
        const newElement = {
            ...codeBlock,
            id,
            code: [...updatedCodeArray]
        } as ICodeBlock
        dispatch(addElementsToCodeAction(newElement))
    }

    return (
        <Draggable draggableId={codeBlock.id} index={index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                >
                    <div 
                        onClick={handleClick} 
                        onDoubleClick={() => setShowEditTextModal(true)} 
                        {...provided.dragHandleProps}
                        className="relative transition-all duration-200 ease-linear group"
                    >
                        { parse(code) }
                        <span onClick={handleDuplicateBlock} className="code-block-tooltip group-hover:scale-100">Duplicate</span>
                    </div>
                </div>
            )}
        </Draggable>
    )
}