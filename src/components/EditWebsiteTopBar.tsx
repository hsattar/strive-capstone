import { useState } from "react"
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
import SVGIcon from "./reusable/CustomSVGIcon"

export default function EditWebsiteTopBar() {

    const dispatch = useDispatch()
    const axiosRequest = useAxios()
    const { REACT_APP_FE_URL: FE_URL } = process.env
    const { websiteName, pageSelected } = useParams()
    const code = useSelector((state: IReduxStore) => state.website.code)
    const codeBlocks = useSelector((state: IReduxStore) => state.website.codeBlocks)
    const elementToEdit = useSelector((state: IReduxStore) => state.website.elementToEdit)

    const [fontSelected, setFontSelected] = useState('sans') 
    const [textSizeelected, setTextSizeelected] = useState('base') 

    const [isBold, setIsBold] = useState(false)
    const [isItalics, setIsItalics] = useState(false)
    const [isUnderline, setIsUnderline] = useState(false)
    const [textAlignment, setTextAlignment] = useState('left')

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
            // const publicCode = handleSave(codeBlocks)
            const response = await axiosRequest(`/websites/${websiteName}/${pageSelected}/development`, 'PUT', { code, codeBlocks })
            if (response.status === 200) {
                toastNotification('Saved')
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
                toastNotification('Published')
            }
        } catch (error) {
            console.log(error)
        }
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
                </div>

                <div className="flex my-2">
                    <div className="group relative">
                        <SVGIcon svgClassName="h-6 w-6 mr-2 text-gray-400" pathD="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        <span className="topbar-tooltip group-hover:scale-100">Undo</span>
                    </div>

                    <div className="group relative">
                        <SVGIcon svgClassName="h-6 w-6 mr-4 text-gray-400" pathD="M13 7l5 5m0 0l-5 5m5-5H6" />
                        <span className="topbar-tooltip group-hover:scale-100">Redo</span>
                    </div>

                    <div onClick={handleSaveWebsite} className="group relative">
                        <SVGIcon svgClassName="h-6 w-6 mr-4 text-gray-400" pathD="M17 16v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2h2m3-4H9a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-1m-1 4l-3 3m0 0l-3-3m3 3V3" />
                        <span className="topbar-tooltip group-hover:scale-100">Save</span>
                    </div>

                    <div className="group relative">
                        <Link to={`/ws-preview/${websiteName}/${pageSelected}`} rel="noopener">
                            <SVGIcon svgClassName="h-6 w-6 mr-4 text-gray-900 cursor-pointer" pathD="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </Link>
                        <span className="topbar-tooltip group-hover:scale-100">Preview</span>
                    </div>

                    <div onClick={handlePublishWebsite} className="group relative">
                        <SVGIcon svgClassName="h-6 w-6 text-gray-400" pathD="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        <span className="topbar-tooltip group-hover:scale-100">Publish</span>
                    </div>
                </div>

            </div>
        </nav>
        </>
    )
}