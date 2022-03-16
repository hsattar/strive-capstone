import { Draggable } from "react-beautiful-dnd"
import parse from 'html-react-parser'
import { createNewCode } from "../redux/actions/actionCreators"

interface IProps {
    codeBlock: ICodeBlock
    index: number
}

export default function DraggableCodeBlock({ codeBlock, index}: IProps) {

    const code = createNewCode(codeBlock.code)

    return (
        <Draggable draggableId={codeBlock.id} index={index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                >
                <div {...provided.dragHandleProps}>{ parse(code) }</div>
                </div>
            )}
        </Draggable>
    )
}
