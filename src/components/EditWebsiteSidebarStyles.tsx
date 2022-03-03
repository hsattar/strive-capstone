import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import useDebounce from "../hooks/useDebounce"
import { changeElementClassAction } from "../redux/actions/actionCreators"
import EditWebsiteSidebarDropdowns from "./EditWebsiteSidebarDropdowns"
import webSafeFonts from '../data/fonts'
import fontSizes from '../data/fontSizes'
import SVGIcon from "./SVGIcon"

export default function EditWebsiteSidebarStyles() {
    
    const dispatch = useDispatch()
    const elementToEdit = useSelector((state: IReduxStore) => state.website.elementToEdit)

    const [showFontDropdown, setShowFontDropdown] = useState(false)
    const [fontSelected, setFontSelected] = useState('') 

    const openFontDropdown = () => {
        setShowFontSizeDropdown(false)
        setShowFontDropdown(prev => !prev)
    }   

    const handleFontChange = (font: string) => {
        setFontSelected(font)
        setShowFontDropdown(false)
    }

    const [showFontSizeDropdown, setShowFontSizeDropdown] = useState(false)
    const [fontSizeSelected, setFontSizeSelected] = useState('') 

    const openFontSizeDropdown = () => {
        setShowFontDropdown(false)
        setShowFontSizeDropdown(prev => !prev)
    }   

    const handleFontSizeChange = (size: string) => {
        setFontSizeSelected(size)
        setShowFontSizeDropdown(false)
    }

    const [color, setColor] = useState('')
    const debouncedColor = useDebounce(color, 750)

    useEffect(() => {
        debouncedColor && dispatch(changeElementClassAction(elementToEdit?.id!, `text-[${debouncedColor}]`))
    }, [debouncedColor])

    const [backgroundColor, setBackgroundColor] = useState('')
    const debouncedBackgroundColor = useDebounce(backgroundColor, 750)

    useEffect(() => {
        debouncedBackgroundColor && dispatch(changeElementClassAction(elementToEdit?.id!, `bg-[${debouncedBackgroundColor}]`))
    }, [debouncedBackgroundColor])

    return (
        <div className="select-none">
            { elementToEdit ? (
                <>
                <EditWebsiteSidebarDropdowns name="text">
                    <>
                    <div className="flex justify-between">
                        <p className="px-2 py-1">Content - Open Modal</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="px-2 py-1">Font</p>
                        <div className="w-5/6 relative mr-2">
                            <button onClick={openFontDropdown} className="flex justify-between items-center transition duration-200 border capitalize mx-0 px-3 py-1 my-2 cursor-pointer font-normal text-md rounded-md w-full text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                            <span>{fontSelected}</span>
                            <SVGIcon svgClassName="h-5 w-5" pathD="M19 9l-7 7-7-7"/>
                            </button>
                            <div className={`${!showFontDropdown && 'hidden'} absolute z-20 my-0 text-base list-none bg-white rounded divide-y divide-gray-100 shadow w-full`}>
                                <ul className="py-1">
                                    { webSafeFonts.map(font => (
                                    <li key={font.value}>
                                        <button onClick={() => handleFontChange(font.value)} className={`block w-full py-1 px-4 text-sm text-gray-700 hover:bg-gray-100 capitalize font-['${font.value}']`}>{font.name}</button>
                                    </li>
                                    )) }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="px-2 py-1">Size</p>
                        <div className="w-5/6 relative mr-2">
                            <button onClick={openFontSizeDropdown} className="flex justify-between items-center transition duration-200 border capitalize mx-0 px-3 py-1 my-2 cursor-pointer font-normal text-md rounded-md w-full text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                            <span>{fontSizeSelected}</span>
                            <SVGIcon svgClassName="h-5 w-5" pathD="M19 9l-7 7-7-7"/>
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
                    </div>
                    <div className="flex justify-between my-2">
                        <div className="mx-2 py-1 border-2">
                            <span className="m-3 cursor-pointer hover:bg-gray-100 font-bold">B</span>
                            <span className="m-3 cursor-pointer hover:bg-gray-100 italic">I</span>
                            <span className="m-3 cursor-pointer hover:bg-gray-100 underline">U</span>
                        </div>
                        <div className="mx-2 py-1 border-2">
                            <span className="m-3 cursor-pointer hover:bg-gray-100">L</span>
                            <span className="m-3 cursor-pointer hover:bg-gray-100">C</span>
                            <span className="m-3 cursor-pointer hover:bg-gray-100">R</span>
                        </div>
                    </div>
                    </>
                </EditWebsiteSidebarDropdowns>
                <EditWebsiteSidebarDropdowns name="colors">
                    <>
                    <div className="flex justify-between items-center">
                        <p className="px-2 py-1">Color</p>
                        <input
                            type="color"
                            className="bg-transparent outline-none pr-2 border-0"
                            value={color}
                            onChange={e => setColor(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="px-2 py-1">Background Color</p>
                        <input
                            type="color"
                            className="bg-transparent outline-none pr-2 border-0"
                            value={backgroundColor}
                            onChange={e => setBackgroundColor(e.target.value)}
                        />
                    </div>
                    </>
                </EditWebsiteSidebarDropdowns>
                <EditWebsiteSidebarDropdowns name="positioning">
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
                </EditWebsiteSidebarDropdowns>
                <EditWebsiteSidebarDropdowns name="hover state">
                    <div className="flex justify-between">
                        <p className="px-2 py-1">All Options</p>
                    </div>
                </EditWebsiteSidebarDropdowns>
                </>
            ) : (
                <p className="text-center mt-12">Please add/select an element to edit</p>
            ) }
        </div>
    )
}