import { useState } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from 'react-redux'
import parse from 'html-react-parser'
import EditWebsiteTopBar from "../components/EditWebsiteTopBar"
import EditWebsiteSidebarGeneral from "../components/EditWebsiteSidebarGeneral"
import EditWebsiteSidebarIcons from "../components/EditWebsiteSidebarIcons"
import EditWebsiteSidebarLayout from "../components/EditWebsiteSidebarLayout"
import EditWebsiteSidebarElements from "../components/EditWebsiteSidebarElements"
import EditWebsiteSidebarComponents from "../components/EditWebsiteSidebarComponents"
import EditWebsiteSidebarStyles from "../components/EditWebsiteSidebarStyles"
import Navbar from "../components/Navbar"

export default function EditWebsite() {

    const { pageSelected } = useParams()
    const code = useSelector((state: IReduxStore) => state.website.code)

    const [sidebarTab, setSidebarTab] = useState('general')
    const [deviceView, setDeviceView] = useState('desktop')

    return (
        <div className="overflow-hidden">
        <Navbar />
        <div className="divide-y divide-gray-200">
        <EditWebsiteTopBar deviceView={deviceView} setDeviceView={setDeviceView} />
        <div className={sidebarTab === '' ? 'grid grid-cols-[50px_1fr] gap-0 min-h-[90.5vh]' : 'grid grid-cols-[300px_1fr] gap-0 min-h-[90.5vh]'}>
            <div className="grid gap-0 grid-cols-[50px_250px] divide-x min-h-[90.5vh] max-h-[90.5vh] overflow-y-scroll overflow-x-hidden">
            <EditWebsiteSidebarIcons sidebarTab={sidebarTab} setSidebarTab={setSidebarTab} />
            { sidebarTab === 'general' && <EditWebsiteSidebarGeneral /> }
            { sidebarTab === 'styles' && <EditWebsiteSidebarStyles /> }
            { sidebarTab === 'layout' && <EditWebsiteSidebarLayout /> }
            { sidebarTab === 'elements' && <EditWebsiteSidebarElements /> }
            { sidebarTab === 'components' && <EditWebsiteSidebarComponents /> }
            </div>
            <div className="bg-gray-100 flex justify-center">
                <iframe 
                srcDoc={`
                <!doctype html>
                <html>
                <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <script src="https://cdn.tailwindcss.com"></script>
                </head>
                <body>
                  ${code}
                </body>
                </html>`} 
                className={deviceView === 'desktop' ? 'min-w-[95%] bg-white my-2' : deviceView === 'tablet' ? 'min-w-[65%] bg-white my-2' : 'min-w-[35%] bg-white my-2'}>
                    {/* {parse(code)} */}
                </iframe>
            </div>
        </div>
        </div>
        </div>
    )
}