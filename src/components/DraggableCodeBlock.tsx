import { Draggable } from "react-beautiful-dnd"
import parse from 'html-react-parser'
import { createNewCode, setElementToEditAction } from "../redux/actions/actionCreators"
import { useDispatch } from "react-redux"

interface IProps {
    codeBlock: ICodeBlock
    index: number
}

export default function DraggableCodeBlock({ codeBlock, index}: IProps) {

    const dispatch = useDispatch()
    const code = createNewCode(codeBlock.code)

    return (
        <Draggable draggableId={codeBlock.id} index={index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                >
                <div onClick={() => dispatch(setElementToEditAction(codeBlock.code[0]))} {...provided.dragHandleProps}>{ parse(code) }</div>
                </div>
            )}
        </Draggable>
    )
}
