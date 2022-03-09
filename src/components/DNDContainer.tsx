import { Draggable, Droppable } from 'react-beautiful-dnd'
import Element from './Element'

interface IProps {
    container: IContainer | undefined
    elements: (IElement| undefined)[] | undefined
    idx: number
}

export default function DNDContainer({ container, elements, idx }: IProps) {
    return (
        <Draggable draggableId={container?.id!} index={idx}>
            {provided => (
            <div 
                className="m-2 border-2 rounded-sm bg-white w-5/6"
                {...provided.draggableProps}
                ref={provided.innerRef}
            >
                <h5 {...provided.dragHandleProps} className="p-2 font-semibold text-xl">{container?.openingTag}</h5>
                <Droppable droppableId={container?.id!} type="element">
                    {provided => (
                        <div
                            className="p-2 bg-white"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {elements?.map((elem, idx) => <Element key={elem?.id} element={elem} idx={idx} />)}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
            )}
        </Draggable>
    )
}
