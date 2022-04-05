import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import colors from "../data/tailwind-options/colors"
import webSafeFonts from "../data/tailwind-options/fonts"
import textSizes from "../data/tailwind-options/textSizes"
import useAxios from '../hooks/useAxios'
import { changeElementClassNameAction } from "../redux/actions/actionCreators"
import CustomStylesSelectMenu from "./reusable/CustomStylesSelectMenu"
import CustomEditSelectMenu from './reusable/CustomEditSelectMenu'
import SVGIcon from "./reusable/CustomSVGIcon"
import { ActionCreators } from 'redux-undo'
import { flexDirections, flexItemss, flexJustifys, gridCols, gridGaps } from '../data/tailwind-options/display'

export default function EditWebsiteTopBar() {

    const dispatch = useDispatch()
    const axiosRequest = useAxios()
    const { undo, redo, clearHistory } = ActionCreators
    const { websiteName, pageSelected } = useParams()
    const code = useSelector((state: IReduxStore) => state.website.present.code)
    const codeBlocks = useSelector((state: IReduxStore) => state.website.present.codeBlocks)
    const elementToEdit = useSelector((state: IReduxStore) => state.misc.elementToEdit)
    const canUndo = useSelector((state: IReduxStore) => state.website.past.length)
    const canRedo = useSelector((state: IReduxStore) => state.website.future.length)
    
    const [changesMade, setChangesMade] = useState(false)

    const [fontSelected, setFontSelected] = useState('sans') 
    const [textSizeelected, setTextSizeelected] = useState('base') 

    const [isBold, setIsBold] = useState(false)
    const [isItalics, setIsItalics] = useState(false)
    const [isUnderline, setIsUnderline] = useState(false)
    const [textAlignment, setTextAlignment] = useState('left')

    const [flexDirection, setFlexDirection] = useState('Flex Direction')
    const [flexItems, setFlexItems] = useState('Flex Items')
    const [flexJustify, setFlexJustify] = useState('Flex Justify')

    const [gridCol, setGridCol] = useState('Columns')
    const [gridGap, setGridGap] = useState('Gap')

    const [textColor, setTextColor] = useState('Color')
    const [backgroundColor, setBackgroundColor] = useState('BG Color')

    const handleFontChange = (font: string) => {
        setFontSelected(font)
        dispatch(changeElementClassNameAction('font', `font-${font}`))
    }

    const handleTextSizeChange = (size: string) => {
        setTextSizeelected(size)
        dispatch(changeElementClassNameAction('textSize', `text-${size}`))
    }

    const handleFontBoldChange = () => {
        setIsBold(prev => !prev)
        isBold ? dispatch(changeElementClassNameAction('bold', ``)) : dispatch(changeElementClassNameAction('bold', `font-bold`))
    }

    const handleFontItalicsChange = () => {
        setIsItalics(prev => !prev)
        isItalics ? dispatch(changeElementClassNameAction('italics', ``)) : dispatch(changeElementClassNameAction('italics', `italic`))
    }

    const handleFontUnderlineChange = () => {
        setIsUnderline(prev => !prev)
        isUnderline ? dispatch(changeElementClassNameAction('underline', ``)) : dispatch(changeElementClassNameAction('underline', `underline underline-offset-1`))

    }

    const handleTextColorChange = (color: string) => {
        setTextColor(color)
        dispatch(changeElementClassNameAction('color', `text-${color}`))
    }

    const handleBackgroundColorChange = (color: string) => {
        setBackgroundColor(color)
        dispatch(changeElementClassNameAction('bgColor', `bg-${color}`))
    }

    const handletextAlignment = (position: string) => {
        setTextAlignment(position)
        switch(position) {
            case 'left': return dispatch(changeElementClassNameAction('alignment', 'text-left'))
            case 'center': return dispatch(changeElementClassNameAction('alignment', 'text-center'))
            case 'right': return dispatch(changeElementClassNameAction('alignment', 'text-right'))
            default: return dispatch(changeElementClassNameAction('alignment', 'text-left'))
        }
    }

    const handleSaveWebsite = async () => {
        try {
            const response = await axiosRequest(`/websites/${websiteName}/${pageSelected}/development`, 'PUT', { code, codeBlocks })
            if (response.status === 200) {
                toastNotification('Saved')
                dispatch(clearHistory())
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handlePublishWebsite = async () => {
        try {
            const response = await Promise.all([
                axiosRequest(`/websites/${websiteName}/${pageSelected}/development`, 'PUT', { code }),
                axiosRequest(`/websites/${websiteName}/${pageSelected}/production/publish`, 'PUT', { code })
            ])
            if ((response[0].status === 200) && (response[1].status === 200 || 201)) {
                toastNotification(`Published`)
                dispatch(clearHistory())
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleStyleChange = (value: string, type: elementToEditOptions) => {
        switch (type) {
            case 'flexDirection': 
                setFlexDirection(value)
                dispatch(changeElementClassNameAction(type, `flex-${value}`))
                break
            case 'flexJustify': 
                setFlexJustify(value)
                dispatch(changeElementClassNameAction(type, `justify-${value}`))
                break
            case 'flexItems': 
                setFlexItems(value)
                dispatch(changeElementClassNameAction(type, `items-${value}`))
                break
            case 'gridCols':
                setGridCol(value)
                dispatch(changeElementClassNameAction(type, `grid-cols-${value}`))
                break
            case 'gridGap':
                setGridGap(value)
                dispatch(changeElementClassNameAction(type, `gap-${value}`))
                break
            case 'bgColor': 
                setBackgroundColor(value)
                dispatch(changeElementClassNameAction(type, `bg-${value}`))
                break
            default: return
        }
        !changesMade && setChangesMade(true)
    }

    const toastNotification = (msg: string) => toast.success(msg, {
        position: "bottom-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
    })

    useEffect(() => {
        if (elementToEdit) {
            if (elementToEdit.type === 'element') {
                setFontSelected(elementToEdit.code[0].font!.split('-')[1] || 'Font')
                setTextSizeelected(elementToEdit.code[0].textSize!.split('-')[1] || 'Size')
                setTextColor(elementToEdit.code[0].color!.split('text-')[1] || 'Color')
                setIsBold(elementToEdit.code[0].bold ? true : false)
                setIsItalics(elementToEdit.code[0].italics ? true : false)
                setIsUnderline(elementToEdit.code[0].underline ? true : false)
                setBackgroundColor(elementToEdit.code[0].bgColor!.split('bg-')[1] || 'BG Color')
            }
            if (elementToEdit.type === 'flexContainer') {
                setFlexDirection(elementToEdit.code[0].flexDirection!.split('flex-')[1] || 'Direction')
                setFlexJustify(elementToEdit.code[0].flexJustify!.split('justify-')[1] || 'Justify')
                setFlexItems(elementToEdit.code[0].flexItems!.split('items-')[1] || 'Items')
                setBackgroundColor(elementToEdit.code[0].bgColor!.split('bg-')[1] || 'BG Color')
            }
            if (elementToEdit.type === 'gridContainer') {
                setGridCol(elementToEdit.code[0].gridCols!.split('grid-cols-')[1] || 'Columns')
                setGridGap(elementToEdit.code[0].gridGap!.split('gap-')[1] || 'Gap')
                setBackgroundColor(elementToEdit.code[0].bgColor!.split('bg-')[1] || 'BG Color')
            }
        }
    }, [elementToEdit])

    return (
        <>
        <ToastContainer
            position="bottom-left"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover
        />
        <nav className="bg-white px-2 sm:px-4 py-1 text-[14px] select-none">
            <div className="flex flex-wrap justify-between items-center mx-auto">

                <div>
                { elementToEdit && (
                    <p className="pr-2 mr-2">{elementToEdit.name}</p>
                ) }
                </div>
                
                <div className="flex">
                { (elementToEdit && elementToEdit.type === 'element') && (
                    <div className="flex items-center">
                    <CustomStylesSelectMenu 
                        type="font"
                        containerClass="w-[175px] relative mr-2 z-50"
                        initialValue={fontSelected}
                        listOfValues={webSafeFonts}
                        onClick={handleFontChange}
                    />
                    <CustomStylesSelectMenu 
                        type="textSize"
                        containerClass="w-[60px] relative mr-2 z-50"
                        initialValue={textSizeelected}
                        listOfValues={textSizes}
                        onClick={handleTextSizeChange}
                    />
                    <div className="flex justify-between my-1">
                        <div className="mx-2 py-1 border-2 rounded-md">
                            <span onClick={handleFontBoldChange} className="px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100 font-bold">B</span>
                            <span onClick={handleFontItalicsChange} className="px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100 italic">I</span>
                            <span onClick={handleFontUnderlineChange} className="px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100 underline">U</span>
                        </div>
                        <div className="mx-2 py-1 border-2 rounded-md">
                            <span onClick={() => handletextAlignment('left')} className="px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100">L</span>
                            <span onClick={() => handletextAlignment('center')} className="px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100">M</span>
                            <span onClick={() => handletextAlignment('right')} className="px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100">R</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                    <CustomStylesSelectMenu 
                        type="color"
                        containerClass="w-[150px] relative mr-2"
                        initialValue={textColor}
                        listOfValues={colors}
                        onClick={handleTextColorChange}
                    />
                    </div>
                    <div className="flex justify-between items-center">
                    <CustomStylesSelectMenu 
                        type="bgColor"
                        containerClass="w-[150px] relative mr-2"
                        initialValue={backgroundColor}
                        listOfValues={colors}
                        onClick={handleBackgroundColorChange}
                    />
                    </div>
                    </div>
                ) }
                { (elementToEdit && elementToEdit.type === 'flexContainer') && (
                    <div className="flex">
                        <CustomEditSelectMenu 
                            type="flexDirection"
                            containerClass="w-[150px] relative mr-2"
                            initialValue={flexDirection}
                            listOfValues={flexDirections}
                            onClick={handleStyleChange}
                        />
                        <CustomEditSelectMenu 
                            type="flexJustify"
                            containerClass="w-[150px] relative mr-2"
                            initialValue={flexJustify}
                            listOfValues={flexJustifys}
                            onClick={handleStyleChange}
                        />
                        <CustomEditSelectMenu 
                            type="flexItems"
                            containerClass="w-[150px] relative mr-2"
                            initialValue={flexItems}
                            listOfValues={flexItemss}
                            onClick={handleStyleChange}
                        />
                        <CustomEditSelectMenu 
                            type="bgColor"
                            containerClass="w-[150px] relative mr-2"
                            initialValue={backgroundColor}
                            listOfValues={colors}
                            onClick={handleStyleChange}
                        />
                    </div>
                ) }
                { (elementToEdit && elementToEdit.type === 'gridContainer') && (
                    <div className="flex">
                        <CustomEditSelectMenu 
                            type="gridCols"
                            containerClass="w-[150px] relative mr-2"
                            initialValue={gridCol}
                            listOfValues={gridCols}
                            onClick={handleStyleChange}
                        />
                        <CustomEditSelectMenu 
                            type="gridGap"
                            containerClass="w-[150px] relative mr-2"
                            initialValue={gridGap}
                            listOfValues={gridGaps}
                            onClick={handleStyleChange}
                        />
                        <CustomEditSelectMenu 
                            type="bgColor"
                            containerClass="w-[150px] relative mr-2"
                            initialValue={backgroundColor}
                            listOfValues={colors}
                            onClick={handleStyleChange}
                        />
                    </div>
                ) }
                </div>

                <div className="flex my-2">
                    <div onClick={() => dispatch(undo())} className="group relative">
                        <SVGIcon svgClassName={canUndo ? "h-6 w-6 mr-2 text-gray-900 cursor-pointer" : "h-6 w-6 mr-2 text-gray-400"} pathD="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        { canUndo ? <span className="topbar-tooltip group-hover:scale-100">Undo</span> : '' }
                    </div>

                    <div onClick={() => dispatch(redo())} className="group relative">
                        <SVGIcon svgClassName={canRedo ? "h-6 w-6 mr-2 text-gray-900 cursor-pointer" : "h-6 w-6 mr-2 text-gray-400"} pathD="M13 7l5 5m0 0l-5 5m5-5H6" />
                        { canRedo ? <span className="topbar-tooltip group-hover:scale-100">Redo</span> : '' }
                    </div>

                    <div onClick={handleSaveWebsite} className="group relative">
                        <SVGIcon svgClassName={canUndo > 0 ? "h-6 w-6 mr-2 text-gray-900 cursor-pointer" : "h-6 w-6 mr-2 text-gray-400"} pathD="M17 16v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2h2m3-4H9a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-1m-1 4l-3 3m0 0l-3-3m3 3V3" />
                        { canUndo > 0 ? <span className="topbar-tooltip group-hover:scale-100">Save</span> : '' }
                    </div>

                    <div className="group relative">
                        <Link to={`/ws-preview/${websiteName}/${pageSelected}`} rel="noopener">
                            <SVGIcon svgClassName="h-6 w-6 mr-4 text-gray-900 cursor-pointer" pathD="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </Link>
                        <span className="topbar-tooltip group-hover:scale-100">Preview</span>
                    </div>

                    <div onClick={handlePublishWebsite} className="group relative">
                        <SVGIcon svgClassName={canUndo > 0 ? "h-6 w-6 mr-2 text-gray-900 cursor-pointer" : "h-6 w-6 mr-2 text-gray-400"} pathD="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        { canUndo > 0 ? <span className="topbar-tooltip group-hover:scale-100">Publish</span> : '' }
                    </div>
                </div>

            </div>
        </nav>
        </>
    )
}