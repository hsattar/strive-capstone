import { Dispatch, SetStateAction } from "react"
import SVGIcon from "./SVGIcon"

interface IProps {
    sidebarTab: string
    setSidebarTab: Dispatch<SetStateAction<string>>
}

export default function EditWebsiteSidebarIcons({ sidebarTab, setSidebarTab }: IProps) {

    const handleChangeSidebarTab = (string: string) => {
        if (string === sidebarTab) return setSidebarTab('')
        setSidebarTab(string)
    }

    return (
        <div className="divide-y">
        <div className="sidebar-icon group" onClick={() => handleChangeSidebarTab('general')}>
            <SVGIcon pathStrokeWidth={sidebarTab === 'general' ? 2 : 1} pathD="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            <span className="sidebar-tooltip group-hover:scale-100">General</span>
        </div>
        <div className="sidebar-icon group" onClick={() => handleChangeSidebarTab('structure')}>
            <SVGIcon pathStrokeWidth={sidebarTab === 'structure' ? 2 : 1} pathD="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            <span className="sidebar-tooltip group-hover:scale-100">Structure</span>
        </div>
        <div className="sidebar-icon group" onClick={() => handleChangeSidebarTab('styles')}>
            <SVGIcon pathStrokeWidth={sidebarTab === 'styles' ? 2 : 1} pathD="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            <span className="sidebar-tooltip group-hover:scale-100">Styles</span>
        </div>
        <div className="sidebar-icon group" onClick={() => handleChangeSidebarTab('layout')}>
            <SVGIcon pathStrokeWidth={sidebarTab === 'layout' ? 2 : 1} pathD="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            <span className="sidebar-tooltip group-hover:scale-100">Layout</span>
        </div>
        <div className="sidebar-icon group" onClick={() => handleChangeSidebarTab('elements')}>
            <SVGIcon pathStrokeWidth={sidebarTab === 'elements' ? 2 : 1} pathD="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            <span className="sidebar-tooltip group-hover:scale-100">Elements</span>
        </div>
        <div className="sidebar-icon group" onClick={() => handleChangeSidebarTab('components')}>
            <SVGIcon pathStrokeWidth={sidebarTab === 'components' ? 2 : 1} pathD="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            <span className="sidebar-tooltip group-hover:scale-100">Components</span>
        </div>
        </div>
    )
}