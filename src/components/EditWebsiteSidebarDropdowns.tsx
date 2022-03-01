import { useState } from "react"

interface IProps {
    name: string
    children: JSX.Element
}

export default function EditWebsiteSidebarDropdowns({ name, children }: IProps) {

    const [showChildren, setShowChildren] = useState(true)

    return (
        <div>
        <button className="flex items-center my-2 border-b-2 pb-1 w-full mb-0" onClick={() => setShowChildren(prev => !prev)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d={showChildren ? 'M19 9l-7 7-7-7' : 'M9 5l7 7-7 7'} />
            </svg>
            <span className="ml-2 font-medium capitalize">{name}</span>
        </button>
        { showChildren && children }
        </div>
    )
}