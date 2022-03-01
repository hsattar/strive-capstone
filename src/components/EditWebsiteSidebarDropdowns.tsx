import { useState } from "react"
import SVGIcon from "./SVGIcon"

interface IProps {
    name: string
    children: JSX.Element
}

export default function EditWebsiteSidebarDropdowns({ name, children }: IProps) {

    const [showChildren, setShowChildren] = useState(true)

    return (
        <div>
        <button className="flex items-center my-2 border-b-2 pb-1 w-full mb-0" onClick={() => setShowChildren(prev => !prev)}>
            <SVGIcon svgClassName="h-5 w-5 ml-2" pathD={showChildren ? 'M19 9l-7 7-7-7' : 'M9 5l7 7-7 7'} />
            <span className="ml-2 font-medium capitalize">{name}</span>
        </button>
        { showChildren && children }
        </div>
    )
}