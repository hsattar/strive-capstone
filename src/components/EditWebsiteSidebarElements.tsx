import { useSelector, useDispatch } from 'react-redux'
import { editWebsiteCodeAction } from '../redux/actions/actionCreators'
import EditWebsiteSidebarDropdowns from "./EditWebsiteSidebarDropdowns"

export default function EditWebsiteSidebarElements() {

    const dispatch = useDispatch()
    const originalCode = useSelector((state: IReduxStore) => state.website.code)

    const handleAddCode = (codeToAdd: string) => {
        console.log(codeToAdd)
        const splitCode = originalCode.split('</div>')
        console.log(splitCode)
        splitCode.splice(1, 0, codeToAdd)
        console.log(splitCode)
        splitCode.push('</div>')
        console.log(splitCode)
        const newCode = splitCode.join('')
        console.log(newCode)
        dispatch(editWebsiteCodeAction(newCode))
    }

    return (
        <div className="select-none">
            <EditWebsiteSidebarDropdowns name="Text">
                <div>
                    <p onClick={() => handleAddCode(`<h1>Hello World</h1>`)} className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Heading</p>
                    <p onClick={() => handleAddCode(`<p>Lorem Ipsum</p>`)} className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Paragraph</p>
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