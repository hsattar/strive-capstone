import { useSelector, useDispatch } from 'react-redux'
import { editWebsiteCodeAction, editWebsiteStructureAction, setElementToEditAction } from '../redux/actions/actionCreators'
import EditWebsiteSidebarDropdowns from "./EditWebsiteSidebarDropdowns"
import { v4 as uuid } from 'uuid'

export default function EditWebsiteSidebarElements() {

    const dispatch = useDispatch()
    const originalCode = useSelector((state: IReduxStore) => state.website.code)

    const handleAddCode = (codeToAdd: IElement) => {
        const { id, ...htmlProperties } = codeToAdd
        const htmlValues = Object.values(htmlProperties) 
        const codeAsString = htmlValues.join('')
        const splitCode = originalCode.split('</div>')
        splitCode.splice(1, 0, codeAsString)
        splitCode.push('</div>')
        const newCode = splitCode.join('')
        dispatch(editWebsiteCodeAction(newCode))
        dispatch(editWebsiteStructureAction(codeToAdd))
        dispatch(setElementToEditAction(codeToAdd))
    }

    return (
        <div className="select-none">
            <EditWebsiteSidebarDropdowns name="Text">
                <div>
                    <p onClick={() => handleAddCode({
                        id: uuid(),
                        openingTag: `<h1 class="`,
                        class: ``,
                        text: `">Hello World`,
                        closingTag: `</h1>`
                    })} className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Heading</p>
                    <p onClick={() => handleAddCode({
                        id: uuid(),
                        openingTag: `<p class="`,
                        class: ``,
                        text: `">Lorem Ipsum `,
                        closingTag: `</p>`
                    })} className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Paragraph</p>
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