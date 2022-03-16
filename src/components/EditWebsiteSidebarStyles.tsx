import { Dispatch, SetStateAction } from "react"
import { useDispatch, useSelector } from "react-redux"
import CustomDropdown from "./CustomDropdown"

interface IProps {
    showEditTextModal: boolean
    setShowEditTextModal: Dispatch<SetStateAction<boolean>>
}

export default function EditWebsiteSidebarStyles({ showEditTextModal, setShowEditTextModal}: IProps) {
    
    const dispatch = useDispatch()
    const elementToEdit = useSelector((state: IReduxStore) => state.website.elementToEdit)

    return (
        <div className="select-none">
            { elementToEdit ? (
                <>
                <div className="flex justify-center my-2">
                    <button onClick={() => setShowEditTextModal(true)} className="py-1 px-5 mr-3 rounded-md text-blue-500 hover:bg-blue-200">Edit Text</button>
                </div>
                <CustomDropdown name="positioning">
                    <>
                    <div className="flex justify-between">
                        <p className="px-2 py-1">Margin Top, Bottom, Left, Right Options With Slider?</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="px-2 py-1">Padding</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="px-2 py-1">Border</p>
                    </div>
                    </>
                </CustomDropdown>
                <CustomDropdown name="hover state">
                    <div className="flex justify-between">
                        <p className="px-2 py-1">All Options</p>
                    </div>
                </CustomDropdown>
                </>
            ) : (
                <p className="text-center mt-12">Please add/select an element to edit</p>
            ) }
        </div>
    )
}