import { useDispatch, useSelector } from "react-redux"
import { changeElementClassAction } from "../redux/actions/actionCreators"
import EditWebsiteSidebarDropdowns from "./EditWebsiteSidebarDropdowns"

export default function EditWebsiteSidebarStyles() {
    
    const dispatch = useDispatch()
    const elementToEdit = useSelector((state: IReduxStore) => state.website.elementToEdit)

    const handleColorChange = () => {
        dispatch(changeElementClassAction(elementToEdit?.id!, 'text-blue-500'))
    }

    return (
        <div className="select-none">
            { elementToEdit ? (
                <EditWebsiteSidebarDropdowns name="Text">
                    <div>
                        <p className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Size</p>
                        <p onClick={handleColorChange} className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Color</p>
                        <p className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Styles</p>
                    </div>
                </EditWebsiteSidebarDropdowns>
            ) : (
                <p className="text-center mt-12">Please add/select an element to edit</p>
            ) }
        </div>
    )
}