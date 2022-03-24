import { Dispatch, SetStateAction, useRef, useEffect } from "react"
import { Draggable } from "react-beautiful-dnd"
import parse from 'html-react-parser'
import { createNewEditableCode, setElementToEditAction } from "../redux/actions/actionCreators"
import { useDispatch } from "react-redux"

interface IProps {
    codeBlock: ICodeBlock
    index: number
    setSidebarTab: Dispatch<SetStateAction<string>>
    setShowEditTextModal: Dispatch<SetStateAction<boolean>>
}

export default function DraggableCodeBlock({ codeBlock, index, setSidebarTab, setShowEditTextModal}: IProps) {

    const dispatch = useDispatch()
    const firstBlockRef = useRef<HTMLDivElement>(null)
    const code = createNewEditableCode(codeBlock.code)

    const handleClick = () => {
        dispatch(setElementToEditAction(codeBlock))
        setSidebarTab('styles')
    }

    // useEffect(() => {
    //     firstBlockRef.current && firstBlockRef.current.click()
    // }, [firstBlockRef])

    return (
        <>
        { index === 0 ? (
        <Draggable draggableId={codeBlock.id} index={index}>
            {(provided) => (
                <div
                {...provided.draggableProps}
                ref={provided.innerRef}
                >
                <div ref={firstBlockRef} onClick={handleClick} onDoubleClick={() => setShowEditTextModal(true)} {...provided.dragHandleProps}>{ parse(code) }</div>
                </div>
            )}
        </Draggable>
        ) : (
        <Draggable draggableId={codeBlock.id} index={index}>
            {(provided) => (
                <div
                {...provided.draggableProps}
                ref={provided.innerRef}
                >
                <div onClick={handleClick} onDoubleClick={() => setShowEditTextModal(true)} {...provided.dragHandleProps}>{ parse(code) }</div>
                </div>
            )}
        </Draggable>
        ) }
        </>
    )
}
