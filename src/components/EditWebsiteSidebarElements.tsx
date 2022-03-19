import { useSelector, useDispatch } from 'react-redux'
import { addElementsToCodeAction, setElementToEditAction } from '../redux/actions/actionCreators'
import CustomDropdown from "./CustomDropdown"
import { v4 as uuid } from 'uuid'
import elementTemplates from '../data/elementTemplates'
import useAxios from '../hooks/useAxios'

export default function EditWebsiteSidebarElements() {

    const dispatch = useDispatch()
    const originalCode = useSelector((state: IReduxStore) => state.website.code)
    const axiosRequest = useAxios()

    const createElementTemplate = (template: elementTemplateOptions) => {
        return elementTemplates[template].map(block => {
            const id = uuid()
            return { id, ...block }
        })
    }

    const handleAddCode = (elementsToAdd: any) => {
        const id = uuid()
        console.log('add code')
        const codeObject = { id, name: elementsToAdd[0].name, type: elementsToAdd[0].type, code: elementsToAdd} as ICodeBlock
        dispatch(setElementToEditAction(codeObject))
        dispatch(addElementsToCodeAction(codeObject))
    }

    return (
        <div className="select-none">
            <CustomDropdown name="Text">
                <div>
                    <p onClick={() => handleAddCode(createElementTemplate('heading'))} className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Heading</p>
                    <p onClick={() => handleAddCode(createElementTemplate('paragraph'))} className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Paragraph</p>
                    <p onClick={() => handleAddCode(createElementTemplate('list'))} className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100"> List</p>
                </div>
            </CustomDropdown>
            <CustomDropdown name="Media">
                <div>
                    <p className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">YouTube</p>
                </div>
            </CustomDropdown>
            <CustomDropdown name="Other">
                <div>
                    <p onClick={() => handleAddCode(createElementTemplate('button'))} className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Button</p>
                    <p onClick={() => handleAddCode(createElementTemplate('youTube'))} className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Dropdown</p>
                </div>
            </CustomDropdown>
        </div>
    )
}