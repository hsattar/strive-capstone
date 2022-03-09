import { Draggable } from 'react-beautiful-dnd'
import { useDispatch } from 'react-redux'
import { setElementToEditAction } from '../redux/actions/actionCreators'

interface IProps {
    element: IElement | undefined
    idx: number
}

export default function Element({ element, idx }: IProps) {

    const dispatch = useDispatch()

    const handleElementToEditChange = (element: IElement) => {
        dispatch(setElementToEditAction(element))
    }

    return (
        <Draggable draggableId={element?.id!} index={idx}>
            {provided => (
                <div
                    className="border-2 rounded-sm bg-white p-2 mb-2"
                    onDoubleClick={() => handleElementToEditChange(element!)}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    {element?.openingTag}
                </div>
            )}
        </Draggable>
    )
}
