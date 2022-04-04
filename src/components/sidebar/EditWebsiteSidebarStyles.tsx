import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { borderRadii, borderStyles, borderWidths } from "../../data/tailwind-options/borders"
import colors from "../../data/tailwind-options/colors"
import spacingOptions from '../../data/tailwind-options/spacingOptions'
import { changeElementClassNameAction } from "../../redux/actions/actionCreators"
import CustomSidebarDropdown from "../reusable/CustomSidebarDropdown"
import CustomStylesSelectMenu from "../reusable/CustomStylesSelectMenu"

interface IProps {
    showEditTextModal: boolean
    setShowEditTextModal: Dispatch<SetStateAction<boolean>>
}

export default function EditWebsiteSidebarStyles({ showEditTextModal, setShowEditTextModal}: IProps) {
    
    const dispatch = useDispatch()
    const elementToEdit = useSelector((state: IReduxStore) => state.misc.elementToEdit)

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

    useEffect(() => {
        if (elementToEdit) {
            if (elementToEdit.type === 'element') {
                setMarginT(elementToEdit.code[0]?.marginT!.split('-')[1] || '0')
                setMarginR(elementToEdit.code[0]?.marginR!.split('-')[1] || '0')
                setMarginB(elementToEdit.code[0]?.marginB!.split('-')[1] || '0')
                setMarginL(elementToEdit.code[0]?.marginL!.split('-')[1] || '0')
                setPaddingT(elementToEdit.code[0]?.paddingT!.split('-')[1] || '0')
                setPaddingR(elementToEdit.code[0]?.paddingR!.split('-')[1] || '0')
                setPaddingB(elementToEdit.code[0]?.paddingB!.split('-')[1] || '0')
                setPaddingL(elementToEdit.code[0]?.paddingL!.split('-')[1] || '0')
                setBorderStyle(elementToEdit.code[0]?.borderStyle! || 'Style')
                setBorderColor(elementToEdit.code[0]?.borderColor!.split('border-')[1] || 'Color')
                setBorderWidth(elementToEdit.code[0]?.borderWidth! || 'Width')
                setBorderRadius(elementToEdit.code[0]?.borderRadius! || 'Radius')
            }
        }
    }, [elementToEdit])

    return (
        <div className="select-none">
            { elementToEdit ? (
                <>
                <CustomSidebarDropdown name="margin">
                    <div className="flex flex-col items-center mt-2">
                    <div className="flex">
                    <CustomStylesSelectMenu 
                        type="marginL"
                        containerClass="w-[60px] relative mr-2 translate-y-5 z-50"
                        initialValue={marginL}
                        listOfValues={spacingOptions}
                        onClick={handleStyleChange}
                    />
                    <CustomStylesSelectMenu 
                        type="marginT"
                        containerClass="w-[75px] relative mr-2"
                        initialValue={marginT}
                        listOfValues={spacingOptions}
                        onClick={handleStyleChange}
                    />
                    <CustomStylesSelectMenu 
                        type="marginR"
                        containerClass="w-[60px] relative mr-2 translate-y-5 z-50"
                        initialValue={marginR}
                        listOfValues={spacingOptions}
                        onClick={handleStyleChange}
                    />
                    </div>
                    <CustomStylesSelectMenu 
                        type="marginB"
                        containerClass="w-[75px] relative mr-2"
                        initialValue={marginB}
                        listOfValues={spacingOptions}
                        onClick={handleStyleChange}
                    />
                    </div>
                </CustomSidebarDropdown>
                <CustomSidebarDropdown name="padding">
                    <div className="flex flex-col items-center mt-2">
                    <div className="flex">
                    <CustomStylesSelectMenu 
                        type="paddingL"
                        containerClass="w-[60px] relative mr-2 translate-y-5 z-40"
                        initialValue={paddingL}
                        listOfValues={spacingOptions}
                        onClick={handleStyleChange}
                    />
                    <CustomStylesSelectMenu 
                        type="paddingT"
                        containerClass="w-[75px] relative mr-2"
                        initialValue={paddingT}
                        listOfValues={spacingOptions}
                        onClick={handleStyleChange}
                    />
                    <CustomStylesSelectMenu 
                        type="paddingR"
                        containerClass="w-[60px] relative mr-2 translate-y-5 z-40"
                        initialValue={paddingR}
                        listOfValues={spacingOptions}
                        onClick={handleStyleChange}
                    />
                    </div>
                    <CustomStylesSelectMenu 
                        type="paddingB"
                        containerClass="w-[75px] relative mr-2"
                        initialValue={paddingB}
                        listOfValues={spacingOptions}
                        onClick={handleStyleChange}
                    />
                    </div>
                </CustomSidebarDropdown>
                <CustomSidebarDropdown name="borders">
                    <div className="flex flex-col items-center mt-2">
                        <CustomStylesSelectMenu 
                            type="borderStyle"
                            containerClass="w-[160px] relative mr-2"
                            initialValue={borderStyle}
                            listOfValues={borderStyles}
                            onClick={handleStyleChange}
                        />
                        <CustomStylesSelectMenu 
                            type="borderWidth"
                            containerClass="w-[160px] relative mr-2"
                            initialValue={borderWidth}
                            listOfValues={borderWidths}
                            onClick={handleStyleChange}
                        />
                        <CustomStylesSelectMenu 
                            type="borderColor"
                            containerClass="w-[160px] relative mr-2"
                            initialValue={borderColor}
                            listOfValues={colors}
                            onClick={handleStyleChange}
                        />
                        <CustomStylesSelectMenu 
                            type="borderRadius"
                            containerClass="w-[160px] relative mr-2"
                            initialValue={borderRadius}
                            listOfValues={borderRadii}
                            onClick={handleStyleChange}
                        />
                    </div>
                </CustomSidebarDropdown>
                </>
            ) : (
                <p className="text-center mt-12">Please add/select an element to edit</p>
            ) }
        </div>
    )
}