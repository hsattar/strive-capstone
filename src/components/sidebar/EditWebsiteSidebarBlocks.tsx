import { useSelector, useDispatch } from 'react-redux'
import { addElementsToCodeAction, setElementToEditAction } from '../../redux/actions/actionCreators'
import CustomSidebarDropdown from "../reusable/CustomSidebarDropdown"
import { v4 as uuid } from 'uuid'
import blockTemplates from '../../data/templates/blockTemplates'
import useAxios from '../../hooks/useAxios'

export default function EditWebsiteSidebarElements() {

    const dispatch = useDispatch()
    const originalCode = useSelector((state: IReduxStore) => state.website.present.code)
    const axiosRequest = useAxios()

    const createElementTemplate = (template: blockTemplateOptions) => {
        return blockTemplates[template].map(block => {
            const id = uuid()
            return { id, ...block }
        })
    }

    const handleAddCode = (elementsToAdd: any) => {
        const id = uuid()
        const codeObject = { id, name: elementsToAdd[0].name, type: elementsToAdd[0].type, code: elementsToAdd} as ICodeBlock
        dispatch(setElementToEditAction(codeObject))
        dispatch(addElementsToCodeAction(codeObject))
    }

    return (
        <div className="select-none">
            <CustomSidebarDropdown name="Text">
                <div>
                    <p onClick={() => handleAddCode(createElementTemplate('heading'))} className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Heading</p>
                    <p onClick={() => handleAddCode(createElementTemplate('paragraph'))} className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Paragraph</p>
                    <p onClick={() => handleAddCode(createElementTemplate('list'))} className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100"> List</p>
                </div>
            </CustomSidebarDropdown>
            <CustomSidebarDropdown name="Media">
                <div>
                    <p className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">YouTube</p>
                    <p className="pl-8 py-1 cursor-pointer hover:bg-gray-100">Carousel</p>
                </div>
            </CustomSidebarDropdown>
            <CustomSidebarDropdown name="Small Components">
                <div>
                    <p onClick={() => handleAddCode(createElementTemplate('button'))} className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Button</p>
                    <p className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Dropdown</p>
                </div>
            </CustomSidebarDropdown>
            <CustomSidebarDropdown name="Big Components">
                <div>
                    <p onClick={() => handleAddCode(createElementTemplate('navbar'))} className="pl-8 py-1 cursor-pointer hover:bg-gray-100">Navbar</p>
                    <p className="pl-8 py-1 cursor-pointer hover:bg-gray-100">Hero Section</p>
                    <p className="pl-8 py-1 cursor-pointer hover:bg-gray-100">Accordian</p>
                    <p className="pl-8 py-1 cursor-pointer hover:bg-gray-100">Form</p>
                    <p className="pl-8 py-1 cursor-pointer hover:bg-gray-100">Cards</p>
                    <p className="pl-8 py-1 cursor-pointer hover:bg-gray-100">Modal</p>
                </div>
            </CustomSidebarDropdown>
            <CustomSidebarDropdown 
                name="Custom Blocks" 
                iconClassName="h-5 w-5 text-green-500 mr-2" 
                iconPath="M12 4v16m8-8H4" 
                iconStrokeWidth={2}
                // onClick={handleSelectImage}
            >
                <>
                <p className="text-center text-gray-400 my-4">You Have No Custom Blocks</p>
                </>
            </CustomSidebarDropdown>
        </div>
    )
}