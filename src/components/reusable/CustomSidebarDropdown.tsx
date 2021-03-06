import { Dispatch, MouseEventHandler, SetStateAction, useEffect, useState } from "react"
import SVGIcon from "./CustomSVGIcon"

interface IProps {
    name: string
    children: JSX.Element
    iconClassName?: string
    iconPath?: string
    iconStrokeWidth?: number
    onClick?: MouseEventHandler<HTMLButtonElement>
    open?: boolean
    setOpen?: Dispatch<SetStateAction<boolean>>
}

export default function CustomSidebarDropdown({ name, children, iconClassName, iconPath, iconStrokeWidth, onClick, open = true, setOpen }: IProps) {

    const [showChildren, setShowChildren] = useState(true)

    if (iconPath && (open === true || open === false) && setOpen) {
        return (
            <>
            <div className="flex flex-row justify-between items-center my-2 border-b-2 pb-1 w-full mb-0 cursor-default" onClick={() => setOpen(prev => !prev)}>
                <div className="flex items-center">
                    <SVGIcon svgClassName="h-5 w-5 ml-2" pathD={open ? 'M19 9l-7 7-7-7' : 'M9 5l7 7-7 7'} />
                    <span className="ml-2">{name}</span>
                </div>
                <button onClick={onClick}>
                    <SVGIcon svgClassName={iconClassName ? iconClassName : 'h-5 w-5'} pathD={iconPath} pathStrokeWidth={iconStrokeWidth ? iconStrokeWidth : 1} />
                </button>
            </div>
            { open && children }
            </>
        )
    }

    return (
        <>
        { iconPath ? (
            <>
            <div className="flex flex-row justify-between items-center my-2 border-b-2 pb-1 w-full mb-0 cursor-default" onClick={() => setShowChildren(prev => !prev)}>
                <div className="flex items-center">
                    <SVGIcon svgClassName="h-5 w-5 ml-2" pathD={showChildren ? 'M19 9l-7 7-7-7' : 'M9 5l7 7-7 7'} />
                    <span className="ml-2 font-medium capitalize">{name}</span>
                </div>
                <button onClick={onClick}>
                    <SVGIcon svgClassName={iconClassName ? iconClassName : 'h-5 w-5'} pathD={iconPath} pathStrokeWidth={iconStrokeWidth ? iconStrokeWidth : 1} />
                </button>
            </div>
            { showChildren && children }
            </>
        ) : (
            <>
            <button className="flex items-center my-2 border-b-2 pb-1 w-full mb-0" onClick={() => setShowChildren(prev => !prev)}>
                <SVGIcon svgClassName="h-5 w-5 ml-2" pathD={showChildren ? 'M19 9l-7 7-7-7' : 'M9 5l7 7-7 7'} />
                <span className="ml-2 font-medium capitalize">{name}</span>
            </button>
            { showChildren && children }
            </>
        ) }
        </>
    )
}