import { Dispatch, SetStateAction } from "react"
import { useDispatch, useSelector } from "react-redux"
import CustomDropdown from "./CustomDropdown"
import spacingOptions from '../data/spacingOptions'
import CustomSelectMenu from "./CustomSelectMenu"

interface IProps {
    showEditTextModal: boolean
    setShowEditTextModal: Dispatch<SetStateAction<boolean>>
}

export default function EditWebsiteSidebarStyles({ showEditTextModal, setShowEditTextModal}: IProps) {
    
    const dispatch = useDispatch()
    const elementToEdit = useSelector((state: IReduxStore) => state.website.elementToEdit)

    const handleSpacingChange = (value: string) => {
        // TODO: NEED TO DO THIS, MAY ADD MORE PARAMS SO CAN BE ONE FUNCTION FOR ALL
    }

    return (
        <div className="select-none">
            { elementToEdit ? (
                <>
                <div className="flex justify-center my-2">
                    <button onClick={() => setShowEditTextModal(true)} className="py-1 px-5 mr-3 rounded-md text-blue-500 hover:bg-blue-200">Edit Text</button>
                </div>
                <CustomDropdown name="positioning">
                    <>
                    <h5 className=" ml-2 py-1 font-semibold">Margin</h5>
                    <div className="flex flex-col items-center">
                    <CustomSelectMenu 
                        type="spacingY"
                        containerClass="w-[175px] relative mr-2"
                        initialValue="Top"
                        listOfValues={spacingOptions}
                        onClick={handleSpacingChange}
                    />
                    <div className="flex">
                    <CustomSelectMenu 
                        type="spacingY"
                        containerClass="w-[85px] relative mr-2"
                        initialValue="Left"
                        listOfValues={spacingOptions}
                        onClick={handleSpacingChange}
                    />
                    <CustomSelectMenu 
                        type="spacingY"
                        containerClass="w-[85px] relative mr-2"
                        initialValue="Right"
                        listOfValues={spacingOptions}
                        onClick={handleSpacingChange}
                    />
                    </div>
                    <CustomSelectMenu 
                        type="spacingY"
                        containerClass="w-[175px] relative mr-2"
                        initialValue="Bottom"
                        listOfValues={spacingOptions}
                        onClick={handleSpacingChange}
                    />
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