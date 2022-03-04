import { useSelector, useDispatch } from 'react-redux'
import { editWebsiteCodeAction, editWebsiteStructureAction, setElementToEditAction } from '../redux/actions/actionCreators'
import EditWebsiteSidebarDropdowns from "./EditWebsiteSidebarDropdowns"
import { v4 as uuid } from 'uuid'
import elementTemplates from '../data/elementTemplates'

export default function EditWebsiteSidebarElements() {

    const dispatch = useDispatch()
    const originalCode = useSelector((state: IReduxStore) => state.website.code)

    const createElementTemplate = (template: elementTemplateOptions) => {
        const id = uuid()
        return {
            id,
            ...elementTemplates[template],
            class: id
        }
    }

    const handleAddCode = (codeToAdd: IElement) => {
        // TODO: LOOK THROUGH THE VALUES OF THE CODE TO ADD AND ANY THAT ARE NOT EMPTY ADD TO THE CLASS NAME
        console.log(codeToAdd)
        const { id, ...htmlProperties } = codeToAdd
        const htmlValues = Object.values(htmlProperties) 
        const codeAsString = htmlValues.join(' ')
        const splitCode = originalCode.split('</div>')
        splitCode.splice(1, 0, codeAsString)
        splitCode.push('</div>')
        const newCode = splitCode.join('')
        console.log(newCode)
        dispatch(editWebsiteCodeAction(newCode))
        dispatch(editWebsiteStructureAction(codeToAdd))
        dispatch(setElementToEditAction(codeToAdd))
    }

    return (
        <div className="select-none">
            <EditWebsiteSidebarDropdowns name="Text">
                <div>
                    <p onClick={() => handleAddCode(createElementTemplate('heading'))} className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Heading</p>
                    <p onClick={() => handleAddCode(createElementTemplate('paragraph'))} className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Paragraph</p>
                    <p className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100"> Ordered List</p>
                    <p className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100"> Unordered List</p>
                </div>
            </EditWebsiteSidebarDropdowns>
            <EditWebsiteSidebarDropdowns name="Media">
                <div>
                    <p className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Image</p>
                    <p className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Video</p>
                    <p className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">YouTube</p>
                </div>
            </EditWebsiteSidebarDropdowns>
            <EditWebsiteSidebarDropdowns name="Other">
                <div>
                    <p className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Button</p>
                    <p className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Dropdown</p>
                </div>
            </EditWebsiteSidebarDropdowns>
        </div>
    )
}