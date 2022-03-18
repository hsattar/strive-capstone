import { Draggable } from "react-beautiful-dnd"
import parse from 'html-react-parser'
import { createNewCode, setElementToEditAction } from "../redux/actions/actionCreators"
import { useDispatch } from "react-redux"
import { Dispatch, SetStateAction } from "react"

interface IProps {
    codeBlock: ICodeBlock
    index: number
    setSidebarTab: Dispatch<SetStateAction<string>>
}

export default function DraggableCodeBlock({ codeBlock, index, setSidebarTab}: IProps) {

    const dispatch = useDispatch()
    const code = createNewCode(codeBlock.code)

    const handleClick = () => {
        dispatch(setElementToEditAction(codeBlock.code[0]))
        setSidebarTab('styles')
    }

    return (
        <Draggable draggableId={codeBlock.id} index={index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                >
                <div onClick={handleClick} {...provided.dragHandleProps}>{ parse(code) }</div>
                </div>
            )}
        </Draggable>
    )
}
