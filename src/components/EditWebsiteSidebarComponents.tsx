import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid'
import componentTemplates from '../data/componentTemplates'
import EditWebsiteSidebarDropdowns from "./EditWebsiteSidebarDropdowns"

export default function EditWebsiteSidebarComponents() {

    const dispatch = useDispatch()

    const createComponentTemplate = (templateToAdd: componentTemplateOptions) => {
        const containerId = uuid()
        const template = componentTemplates[templateToAdd]
        console.log(template)
        console.log(template.container)
        const container = template.container = {
            ...template.container,
            id: containerId
        }
        const elements = template.elements.map(element => {
            const elementId = uuid()
            container.children.push(elementId)
            return {
                ...element,
                id: elementId,
                class: `${element.class} ${elementId}`
            }
        })

        return { container, elements }
    }
    
    const handleAddComponent = ({ container, elements }: IComponentSub) => {
        console.log(container)
        console.log(elements)
    }

    return (
        <div className="select-none">
            <EditWebsiteSidebarDropdowns name="Top">
                <div>
                    <p onClick={() => handleAddComponent(createComponentTemplate('navbar'))} className="pl-8 py-1 cursor-pointer hover:bg-gray-100">Navbar</p>
                    <p className="pl-8 py-1 cursor-pointer hover:bg-gray-100">Hero Section</p>
                </div>
            </EditWebsiteSidebarDropdowns>
            <EditWebsiteSidebarDropdowns name="Media">
                <div>
                    <p className="pl-8 py-1 cursor-pointer hover:bg-gray-100">Carousel</p>
                </div>
            </EditWebsiteSidebarDropdowns>
            <EditWebsiteSidebarDropdowns name="Specific">
                <div>
                    <p className="pl-8 py-1 cursor-pointer hover:bg-gray-100">Accordian</p>
                    <p className="pl-8 py-1 cursor-pointer hover:bg-gray-100">Form</p>
                    <p className="pl-8 py-1 cursor-pointer hover:bg-gray-100">Cards</p>
                    <p className="pl-8 py-1 cursor-pointer hover:bg-gray-100">Modal</p>
                </div>
            </EditWebsiteSidebarDropdowns>
        </div>
    )
}