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

    return (
        <div className="select-none">
            { elementToEdit ? (
                <>
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