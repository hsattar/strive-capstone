import { Dispatch, SetStateAction, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import CustomDropdown from "../reusable/CustomDropdown"
import spacingOptions from '../../data/tailwind-options/spacingOptions'
import CustomSelectMenu from "../reusable/CustomSelectMenu"
import { changeElementClassNameAction } from "../../redux/actions/actionCreators"
import { borderRadii, borderStyles, borderWidths } from "../../data/tailwind-options/borders"
import colors from "../../data/tailwind-options/colors"

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

    const [borderStyle, setBorderStyle] = useState('Style')
    const [borderColor, setBorderColor] = useState('Color')
    const [borderWidth, setBorderWidth] = useState('Width')
    const [borderRadius, setBorderRadius] = useState('Radius')

    const handleStyleChange = (value: string, type: elementToEditOptions) => {
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
            case 'borderStyle': 
                setBorderStyle(value)
                dispatch(changeElementClassNameAction(type, `border-${value}`))
                break
            case 'borderColor': 
                setBorderColor(value)
                dispatch(changeElementClassNameAction(type, `border-${value}`))
                break
            case 'borderWidth': 
                setBorderWidth(value)
                dispatch(changeElementClassNameAction(type, value))
                break
            case 'borderRadius': 
                setBorderRadius(value)
                dispatch(changeElementClassNameAction(type, value))
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
                        containerClass="w-[60px] relative mr-2 translate-y-5 z-50"
                        initialValue={marginL}
                        listOfValues={spacingOptions}
                        onClick={handleStyleChange}
                    />
                    <CustomSelectMenu 
                        type="marginT"
                        containerClass="w-[75px] relative mr-2"
                        initialValue={marginT}
                        listOfValues={spacingOptions}
                        onClick={handleStyleChange}
                    />
                    <CustomSelectMenu 
                        type="marginR"
                        containerClass="w-[60px] relative mr-2 translate-y-5 z-50"
                        initialValue={marginR}
                        listOfValues={spacingOptions}
                        onClick={handleStyleChange}
                    />
                    </div>
                    <CustomSelectMenu 
                        type="marginB"
                        containerClass="w-[75px] relative mr-2"
                        initialValue={marginB}
                        listOfValues={spacingOptions}
                        onClick={handleStyleChange}
                    />
                    </div>
                </CustomDropdown>
                <CustomDropdown name="padding">
                    <div className="flex flex-col items-center mt-2">
                    <div className="flex">
                    <CustomSelectMenu 
                        type="paddingL"
                        containerClass="w-[60px] relative mr-2 translate-y-5 z-40"
                        initialValue={paddingL}
                        listOfValues={spacingOptions}
                        onClick={handleStyleChange}
                    />
                    <CustomSelectMenu 
                        type="paddingT"
                        containerClass="w-[75px] relative mr-2"
                        initialValue={paddingT}
                        listOfValues={spacingOptions}
                        onClick={handleStyleChange}
                    />
                    <CustomSelectMenu 
                        type="paddingR"
                        containerClass="w-[60px] relative mr-2 translate-y-5 z-40"
                        initialValue={paddingR}
                        listOfValues={spacingOptions}
                        onClick={handleStyleChange}
                    />
                    </div>
                    <CustomSelectMenu 
                        type="paddingB"
                        containerClass="w-[75px] relative mr-2"
                        initialValue={paddingB}
                        listOfValues={spacingOptions}
                        onClick={handleStyleChange}
                    />
                    </div>
                </CustomDropdown>
                <CustomDropdown name="borders">
                    <div className="flex flex-col items-center mt-2">
                        <CustomSelectMenu 
                            type="borderStyle"
                            containerClass="w-[160px] relative mr-2"
                            initialValue={borderStyle}
                            listOfValues={borderStyles}
                            onClick={handleStyleChange}
                        />
                        <CustomSelectMenu 
                            type="borderWidth"
                            containerClass="w-[160px] relative mr-2"
                            initialValue={borderWidth}
                            listOfValues={borderWidths}
                            onClick={handleStyleChange}
                        />
                        <CustomSelectMenu 
                            type="borderColor"
                            containerClass="w-[160px] relative mr-2"
                            initialValue={borderColor}
                            listOfValues={colors}
                            onClick={handleStyleChange}
                        />
                        <CustomSelectMenu 
                            type="borderRadius"
                            containerClass="w-[160px] relative mr-2"
                            initialValue={borderRadius}
                            listOfValues={borderRadii}
                            onClick={handleStyleChange}
                        />
                    </div>
                </CustomDropdown>
                </>
            ) : (
                <p className="text-center mt-12">Please add/select an element to edit</p>
            ) }
        </div>
    )
}