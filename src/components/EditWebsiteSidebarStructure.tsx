import { Dispatch, Fragment, SetStateAction } from "react"
import { useDispatch, useSelector } from "react-redux"
import { DragDropContext, Droppable } from "react-beautiful-dnd"

interface IProps {
    setSidebarTab: Dispatch<SetStateAction<string>>
}

export default function EditWebsiteSidebarStructure({ setSidebarTab }: IProps) {

    const dispatch = useDispatch()
    const elementToEdit = useSelector((state: IReduxStore) => state.website.elementToEdit)

    const handleDragEnd = (result: any) => {
        const { source, destination, draggableId, type } = result

        if (!destination) return 
        if (destination.droppableId === source.droppableId && destination.index === source.index) return

    }

    return (
        <div className="select-none flex flex-col items-center">
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="all-containers" type="container">
                {provided => (
                    <div
                        className="w-full items-center ml-6"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                    {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
        </div>
    )
}