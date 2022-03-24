import { Dispatch, SetStateAction } from "react"
import SVGIcon from "../reusable/CustomSVGIcon"

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
        <div className="sidebar-icon group" onClick={() => handleChangeSidebarTab('styles')}>
            <SVGIcon pathStrokeWidth={sidebarTab === 'styles' ? 2 : 1} pathD="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            <span className="sidebar-tooltip group-hover:scale-100">Styles</span>
        </div>
        <div className="sidebar-icon group" onClick={() => handleChangeSidebarTab('blocks')}>
            <SVGIcon pathStrokeWidth={sidebarTab === 'blocks' ? 2 : 1} pathD="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            <span className="sidebar-tooltip group-hover:scale-100">Blocks</span>
        </div>
        <div className="sidebar-icon group" onClick={() => handleChangeSidebarTab('media')}>
            <SVGIcon pathStrokeWidth={sidebarTab === 'media' ? 2 : 1} pathD="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            <span className="sidebar-tooltip group-hover:scale-100">Media</span>
        </div>
        <div className="sidebar-icon group" onClick={() => handleChangeSidebarTab('layout')}>
            <SVGIcon pathStrokeWidth={sidebarTab === 'layout' ? 2 : 1} pathD="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            <span className="sidebar-tooltip group-hover:scale-100">Layout</span>
        </div>
        </div>
    )
}