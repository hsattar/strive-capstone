import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from 'react-router-dom'
import webSafeFonts from "../data/fonts"
import fontSizes from "../data/fontSizes"
import useDebounce from "../hooks/useDebounce"
import { changeElementClassAction } from "../redux/actions/actionCreators"
import SVGIcon from "./SVGIcon"
import  useAxios from '../hooks/useAxios'
import textColors from '../data/textColors'
import backgroundColors from '../data/backgroundColors'

export default function EditWebsiteTopBar() {

    const dispatch = useDispatch()
    const axiosRequest = useAxios()
    const { REACT_APP_FE_URL: FE_URL } = process.env
    const { websiteName, pageSelected } = useParams()
    const code = useSelector((state: IReduxStore) => state.website.code)
    const structure = useSelector((state: IReduxStore) => state.website.structure)
    const elementToEdit = useSelector((state: IReduxStore) => state.website.elementToEdit)

    const [fontSelected, setFontSelected] = useState('sans') 
    const [showFontDropdown, setShowFontDropdown] = useState(false)
    const [fontSizeSelected, setFontSizeSelected] = useState('base') 
    const [showFontSizeDropdown, setShowFontSizeDropdown] = useState(false)

    const [isBold, setIsBold] = useState(false)
    const [isItalics, setIsItalics] = useState(false)
    const [isUnderline, setIsUnderline] = useState(false)
    const [textAlignment, setTextAlignment] = useState('left')

    const [textColor, setTextColor] = useState('gray-900')
    const [showTextColor, setShowTextColor] = useState(false)
    const [backgroundColor, setBackgroundColor] = useState('gray-900')
    const [showBackgroundColor, setShowBackgroundColor] = useState(false)

    const handleFontChange = (font: string) => {
        setFontSelected(font)
        setShowFontDropdown(false)
        dispatch(changeElementClassAction(elementToEdit?.id!, 'font', `font-${font}`))
    }

    const handleFontSizeChange = (size: string) => {
        setFontSizeSelected(size)
        setShowFontSizeDropdown(false)
        dispatch(changeElementClassAction(elementToEdit?.id!, 'fontSize', `text-${size}`))
    }

    const handleFontBoldChange = () => {
        setIsBold(prev => !prev)
        isBold ? dispatch(changeElementClassAction(elementToEdit?.id!, 'bold', ``)) : dispatch(changeElementClassAction(elementToEdit?.id!, 'bold', `font-bold`))
    }

    const handleFontItalicsChange = () => {
        setIsItalics(prev => !prev)
        isItalics ? dispatch(changeElementClassAction(elementToEdit?.id!, 'italics', ``)) : dispatch(changeElementClassAction(elementToEdit?.id!, 'italics', `italics`))
    }

    const handleFontUnderlineChange = () => {
        setIsUnderline(prev => !prev)
        isUnderline ? dispatch(changeElementClassAction(elementToEdit?.id!, 'underline', ``)) : dispatch(changeElementClassAction(elementToEdit?.id!, 'underline', `underline underline-offset-1`))
    }

    const handleTextColorChange = (color: string) => {
        setTextColor(color)
        setShowTextColor(false)
        dispatch(changeElementClassAction(elementToEdit?.id!, 'color', color))
    }

    const handleBackgroundColorChange = (color: string) => {
        setBackgroundColor(color)
        setShowBackgroundColor(false)
        dispatch(changeElementClassAction(elementToEdit?.id!, 'backgroundColor', color))
    }

    const handletextAlignment = (position: string) => {
        setTextAlignment(position)
        switch(position) {
            case 'left': return dispatch(changeElementClassAction(elementToEdit?.id!, 'alignment', 'text-left'))
            case 'center': return dispatch(changeElementClassAction(elementToEdit?.id!, 'alignment', 'text-center'))
            case 'right': return dispatch(changeElementClassAction(elementToEdit?.id!, 'alignment', 'text-right'))
            default: return dispatch(changeElementClassAction(elementToEdit?.id!, 'alignment', 'text-left'))
        }
    }

    const handleSaveWebsite = async () => {
        try {
            const response = await axiosRequest(`/websites/${websiteName}/${pageSelected}/development`, 'PUT', { code, structure })
            if (response.status === 200) {
                alert('saved')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handlePublishWebsite = async () => {
        try {
            const response = await Promise.all([
                axiosRequest(`/websites/${websiteName}/${pageSelected}/development`, 'PUT', { code, structure }),
                axiosRequest(`/websites/${websiteName}/${pageSelected}/production/publish`, 'PUT', { code })
            ])
            if ((response[0].status === 200) && (response[1].status === 200 || 201)) {
                alert('Saved & Published')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <nav className="bg-white px-2 sm:px-4 py-1 text-[14px]">
            <div className="flex flex-wrap justify-between items-center mx-auto">

                <div>
                { elementToEdit && (
                    <p className="pr-2 mr-2">{elementToEdit.name}</p>
                ) }
                </div>
                
                <div className="flex">
                { elementToEdit && (
                    <div className="flex items-center">
                    <div className="w-[175px] relative mr-2">
                        <button onClick={() => setShowFontDropdown(prev => !prev)} className="transition duration-200 border capitalize mx-0 px-3 py-1 my-1 cursor-pointer font-normal text-md rounded-md w-full text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset text-center">
                            {fontSelected}
                        </button>
                        <div className={`${!showFontDropdown && 'hidden'} absolute z-20 my-0 text-base list-none bg-white rounded divide-y divide-gray-100 shadow w-full`}>
                            <ul className="py-1">
                                { webSafeFonts.map(font => (
                                <li key={font}>
                                    <button onClick={() => handleFontChange(font)} className={`block w-full py-1 px-4 text-sm text-gray-700 hover:bg-gray-100 capitalize font-${font}`}>{font}</button>
                                </li>
                                )) }
                            </ul>
                        </div>
                    </div>
                    <div className="w-[60px] relative mr-2">
                        <button onClick={() => setShowFontSizeDropdown(prev => !prev)} className="transition duration-200 border text-center capitalize mx-0 px-3 py-1 my-1 cursor-pointer font-normal text-md rounded-md w-full text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                            {fontSizeSelected}
                        </button>
                        <div className={`${!showFontSizeDropdown && 'hidden'} absolute z-20 my-0 text-base list-none bg-white rounded divide-y divide-gray-100 shadow w-full`}>
                            <ul className="py-1">
                                { fontSizes.map(size => (
                                <li key={size}>
                                    <button onClick={() => handleFontSizeChange(size)} className={`block w-full py-1 px-4 text-sm text-gray-700 hover:bg-gray-100 capitalize`}>{size}</button>
                                </li>
                                )) }
                            </ul>
                        </div>
                    </div>
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
                    <div className="w-[150px] relative mr-2">
                        <button onClick={() => setShowTextColor(prev => !prev)} className="transition duration-200 border capitalize mx-0 px-3 py-1 my-1 cursor-pointer font-normal text-md rounded-md w-full text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset text-center">
                            Color
                        </button>
                        <div className={`${!showTextColor && 'hidden'} absolute z-20 my-0 text-base list-none bg-white rounded divide-y divide-gray-100 shadow w-full`}>
                            <ul className="py-1">
                                { textColors.map(color => (
                                <li key={color}>
                                    <button onClick={() => handleTextColorChange(color)} className={`block w-full py-1 px-4 text-sm ${color} hover:bg-gray-100 capitalize`}>{color}</button>
                                </li>
                                )) }
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                    <div className="w-[150px] relative mr-2">
                    <button onClick={() => setShowBackgroundColor(prev => !prev)} className="transition duration-200 border capitalize mx-0 px-3 py-1 my-1 cursor-pointer font-normal text-md rounded-md w-full text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset text-center">
                            BG Color
                        </button>
                        <div className={`${!showBackgroundColor && 'hidden'} absolute z-20 my-0 text-base list-none bg-white rounded divide-y divide-gray-100 shadow w-full`}>
                            <ul className="py-1">
                                { backgroundColors.map(color => (
                                <li key={color}>
                                    <button onClick={() => handleBackgroundColorChange(color)} className={`block w-full py-1 px-4 text-sm text-white ${color} hover:bg-gray-100 capitalize`}>{color}</button>
                                </li>
                                )) }
                            </ul>
                        </div>
                        </div>
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
    )
}