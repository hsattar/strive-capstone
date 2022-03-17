import { Dispatch, SetStateAction, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import CustomDropdown from "./CustomDropdown"
import spacingOptions from '../data/spacingOptions'
import CustomSelectMenu from "./CustomSelectMenu"
import { changeElementClassNameAction } from "../redux/actions/actionCreators"

interface IProps {
    showEditTextModal: boolean
    setShowEditTextModal: Dispatch<SetStateAction<boolean>>
}

export default function EditWebsiteSidebarStyles({ showEditTextModal, setShowEditTextModal}: IProps) {
    
    const dispatch = useDispatch()
    const elementToEdit = useSelector((state: IReduxStore) => state.website.elementToEdit)

    const [marginT, setMarginT] = useState('Top')
    const [marginR, setMarginR] = useState('Right')
    const [marginB, setMarginB] = useState('Bottom')
    const [marginL, setMarginL] = useState('Left')
    const [paddingT, setPaddingT] = useState('Top')
    const [paddingR, setPaddingR] = useState('Right')
    const [paddingB, setPaddingB] = useState('Bottom')
    const [paddingL, setPaddingL] = useState('Left')

    const handleSpacingChange = (value: string, type: elementToEditOptions) => {
        dispatch(changeElementClassNameAction(type, value))
        switch(type) {
            case 'marginT': 
                setMarginT(value)
                dispatch(changeElementClassNameAction(type, `mt-${value}`))
                break
            case 'marginR': 
                setMarginR(value)
                dispatch(changeElementClassNameAction(type, `mr-${value}`))
                break
            case 'marginB': 
                setMarginB(value)
                dispatch(changeElementClassNameAction(type, `mb-${value}`))
                break
            case 'marginL': 
                setMarginL(value)
                dispatch(changeElementClassNameAction(type, `ml-${value}`))
                break
            case 'paddingT': 
                setPaddingT(value)
                dispatch(changeElementClassNameAction(type, `pt-${value}`))
                break
            case 'paddingR': 
                setPaddingR(value)
                dispatch(changeElementClassNameAction(type, `pr-${value}`))
                break
            case 'paddingB': 
                setPaddingB(value)
                dispatch(changeElementClassNameAction(type, `pb-${value}`))
                break
            case 'paddingL': 
                setPaddingL(value)
                dispatch(changeElementClassNameAction(type, `pl-${value}`))
                break
            default: return
        }
    }

    return (
        <div className="select-none">
            { elementToEdit ? (
                <>
                {/* <div className="flex justify-center my-2">
                    <button onClick={() => setShowEditTextModal(true)} className="py-1 px-5 mr-3 rounded-md text-blue-500 hover:bg-blue-200">Edit Text</button>
                </div> */}
                <CustomDropdown name="margin">
                    <div className="flex flex-col items-center mt-2">
                    <div className="flex">
                    <CustomSelectMenu 
                        type="marginL"
                        containerClass="w-[60px] relative mr-2 translate-y-5 z-40"
                        initialValue={marginL}
                        listOfValues={spacingOptions}
                        onClick={handleSpacingChange}
                    />
                    <CustomSelectMenu 
                        type="marginT"
                        containerClass="w-[75px] relative mr-2"
                        initialValue={marginT}
                        listOfValues={spacingOptions}
                        onClick={handleSpacingChange}
                    />
                    <CustomSelectMenu 
                        type="marginR"
                        containerClass="w-[60px] relative mr-2 translate-y-5 z-40"
                        initialValue={marginR}
                        listOfValues={spacingOptions}
                        onClick={handleSpacingChange}
                    />
                    </div>
                    <CustomSelectMenu 
                        type="marginB"
                        containerClass="w-[75px] relative mr-2"
                        initialValue={marginB}
                        listOfValues={spacingOptions}
                        onClick={handleSpacingChange}
                    />
                    </div>
                </CustomDropdown>
                <CustomDropdown name="padding">
                    <div className="flex flex-col items-center mt-2">
                    <div className="flex">
                    <CustomSelectMenu 
                        type="paddingL"
                        containerClass="w-[60px] relative mr-2 translate-y-5"
                        initialValue={paddingL}
                        listOfValues={spacingOptions}
                        onClick={handleSpacingChange}
                    />
                    <CustomSelectMenu 
                        type="paddingT"
                        containerClass="w-[75px] relative mr-2"
                        initialValue={paddingT}
                        listOfValues={spacingOptions}
                        onClick={handleSpacingChange}
                    />
                    <CustomSelectMenu 
                        type="paddingR"
                        containerClass="w-[60px] relative mr-2 translate-y-5"
                        initialValue={paddingR}
                        listOfValues={spacingOptions}
                        onClick={handleSpacingChange}
                    />
                    </div>
                    <CustomSelectMenu 
                        type="paddingB"
                        containerClass="w-[75px] relative mr-2"
                        initialValue={paddingB}
                        listOfValues={spacingOptions}
                        onClick={handleSpacingChange}
                    />
                    </div>
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