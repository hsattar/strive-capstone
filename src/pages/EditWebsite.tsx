import { useState } from "react"
import EditWebsiteTopBar from "../components/EditWebsiteTopBar"
import EditWebsiteSidebarGeneral from "../components/EditWebsiteSidebarGeneral"
import EditWebsiteSidebarIcons from "../components/EditWebsiteSidebarIcons"
import EditWebsiteSidebarLayout from "../components/EditWebsiteSidebarLayout"
import EditWebsiteSidebarElements from "../components/EditWebsiteSidebarElements"
import EditWebsiteSidebarComponents from "../components/EditWebsiteSidebarComponents"

export default function EditWebsite() {

    const [sidebarTab, setSidebarTab] = useState('general')
    const [deviceView, setDeviceView] = useState('desktop')

    return (
        <div className="divide-y divide-gray-200">
        <EditWebsiteTopBar deviceView={deviceView} setDeviceView={setDeviceView} />
        <div className={`grid grid-cols-[${sidebarTab === '' ? '50px_' : '300px_'}1fr] min-h-[88.5vh]`}>
            <div className="grid grid-cols-[50px_1fr] divide-x">
            <EditWebsiteSidebarIcons sidebarTab={sidebarTab} setSidebarTab={setSidebarTab} />
            { sidebarTab === 'general' && <EditWebsiteSidebarGeneral /> }
            { sidebarTab === 'layout' && <EditWebsiteSidebarLayout /> }
            { sidebarTab === 'elements' && <EditWebsiteSidebarElements /> }
            { sidebarTab === 'components' && <EditWebsiteSidebarComponents /> }
            </div>
            <div className="bg-gray-100">
                Editor
            </div>
        </div>
        </div>
    )
}