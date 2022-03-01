import { useState } from "react"
import EditWebsiteTopBar from "../components/EditWebsiteTopBar"
import EditWebsiteSidebarGeneral from "../components/EditWebsiteSidebarGeneral"
import EditWebsiteSidebarIcons from "../components/EditWebsiteSidebarIcons"
import EditWebsiteSidebarLayout from "../components/EditWebsiteSidebarLayout"
import EditWebsiteSidebarElements from "../components/EditWebsiteSidebarElements"
import EditWebsiteSidebarComponents from "../components/EditWebsiteSidebarComponents"
import EditWebsiteSidebarStyles from "../components/EditWebsiteSidebarStyles"

export default function EditWebsite() {

    const [sidebarTab, setSidebarTab] = useState('general')
    const [deviceView, setDeviceView] = useState('desktop')

    return (
        <div className="divide-y divide-gray-200">
        <EditWebsiteTopBar deviceView={deviceView} setDeviceView={setDeviceView} />
        <div className={sidebarTab === '' ? 'grid grid-cols-[50px_1fr] min-h-[88.5vh]' : 'grid grid-cols-[300px_1fr] min-h-[88.5vh]'}>
            <div className="grid grid-cols-[50px_250px] divide-x">
            <EditWebsiteSidebarIcons sidebarTab={sidebarTab} setSidebarTab={setSidebarTab} />
            { sidebarTab === 'general' && <EditWebsiteSidebarGeneral /> }
            { sidebarTab === 'styles' && <EditWebsiteSidebarStyles /> }
            { sidebarTab === 'layout' && <EditWebsiteSidebarLayout /> }
            { sidebarTab === 'elements' && <EditWebsiteSidebarElements /> }
            { sidebarTab === 'components' && <EditWebsiteSidebarComponents /> }
            </div>
            <div className="bg-gray-100 flex justify-center">
                <div className={deviceView === 'desktop' ? 'min-w-[95%] bg-white my-2' : deviceView === 'tablet' ? 'min-w-[65%] bg-white my-2' : 'min-w-[35%] bg-white my-2'}>
                    Website
                </div>
            </div>
        </div>
        </div>
    )
}