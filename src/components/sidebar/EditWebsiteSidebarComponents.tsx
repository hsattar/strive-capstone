import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid'
import componentTemplates from '../../data/templates/componentTemplates'
import { addElementsToCodeAction } from '../../redux/actions/actionCreators'
import CustomSidebarDropdown from "../reusable/CustomSidebarDropdown"

export default function EditWebsiteSidebarComponents() {

    const dispatch = useDispatch()

    const createComponentTemplate = (template: componentTemplateOptions) => {
        const id = uuid()
        return componentTemplates[template].map(block => ({ id, ...block }))
    }
    
    const handleAddComponent = (elementsToAdd: any) => {
        const id = uuid()
        const codeObject = { id, name: elementsToAdd[0].name, type: elementsToAdd[0].type, code: elementsToAdd} as ICodeBlock
        dispatch(addElementsToCodeAction(codeObject))
    }

    return (
        <div className="select-none">
            <CustomSidebarDropdown name="Top">
                <div>
                    <p onClick={() => handleAddComponent(createComponentTemplate('navbar'))} className="pl-8 py-1 cursor-pointer hover:bg-gray-100">Navbar</p>
                    <p className="pl-8 py-1 cursor-pointer hover:bg-gray-100">Hero Section</p>
                </div>
            </CustomSidebarDropdown>
            <CustomSidebarDropdown name="Media">
                <div>
                    <p className="pl-8 py-1 cursor-pointer hover:bg-gray-100">Carousel</p>
                </div>
            </CustomSidebarDropdown>
            <CustomSidebarDropdown name="Specific">
                <div>
                    <p className="pl-8 py-1 cursor-pointer hover:bg-gray-100">Accordian</p>
                    <p className="pl-8 py-1 cursor-pointer hover:bg-gray-100">Form</p>
                    <p className="pl-8 py-1 cursor-pointer hover:bg-gray-100">Cards</p>
                    <p className="pl-8 py-1 cursor-pointer hover:bg-gray-100">Modal</p>
                </div>
            </CustomSidebarDropdown>
        </div>
    )
}