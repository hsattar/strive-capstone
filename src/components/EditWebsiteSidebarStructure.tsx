import { Dispatch, SetStateAction } from "react"
import { useDispatch, useSelector } from "react-redux"
import { DragDropContext } from "react-beautiful-dnd"
import DNDContainer from "./DNDContainer"
import { structureDndChangeAction } from "../redux/actions/actionCreators"

interface IProps {
    setSidebarTab: Dispatch<SetStateAction<string>>
}

export default function EditWebsiteSidebarStructure({ setSidebarTab }: IProps) {

    const dispatch = useDispatch()
    const structure = useSelector((state: IReduxStore) => state.website.structure)
    const elementToEdit = useSelector((state: IReduxStore) => state.website.elementToEdit)

    const handleDragEnd = (result: any) => {
        const { source, destination, draggableId } = result

        if (!destination) return 
        if (destination.droppableId === source.droppableId && destination.index === source.index) return

        const start = structure.containers.find(contain => contain.id === source.droppableId)
        const finish = structure.containers.find(contain => contain.id === destination.droppableId)
        const startContainerIndex = structure.containers.findIndex(contain => contain.id === source.droppableId)

        if (!start || !finish) return

        if (start === finish) {
            const newChildren = [...start?.children!]
            newChildren.splice(source.index, 1)
            newChildren.splice(destination.index, 0, draggableId)
        
            const newContainer = {
                ...start,
                children: newChildren
            }
            
            structure.containers[startContainerIndex] = newContainer
            dispatch(structureDndChangeAction(structure.containers))
        }

    }

    return (
        <div className="select-none flex flex-col items-center">
        <DragDropContext onDragEnd={handleDragEnd}>
        { structure.containerOrder.map((containerId, idx) => {
            const container = structure.containers.find(contain => contain.id === containerId)
            const elements = container?.children.map(child => structure.elements.find(elem => elem.id === child))
            return <DNDContainer key={container?.id} container={container} elements={elements} idx={idx} />
        }) }
        </DragDropContext>
        </div>
    )
}