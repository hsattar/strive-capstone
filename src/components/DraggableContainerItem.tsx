import { Draggable } from "react-beautiful-dnd"
import { useDispatch } from "react-redux"

interface IProps {
    block: IElement
    index: number
}

export default function DraggableContainerItem({ block, index }: IProps) {

    const dispatch = useDispatch()

    const handleClick = () => {
        // dispatch(setElementToEditAction(codeBlock))
    }

    return (
        <Draggable draggableId={block.name} index={index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    className="my-2"    
                >
                <div onClick={handleClick} {...provided.dragHandleProps}>{block.name}</div>
                </div>
            )}
        </Draggable>
    )
}
