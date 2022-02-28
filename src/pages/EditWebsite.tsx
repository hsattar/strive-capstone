import EditWebsiteTopBar from "../components/EditWebsiteTopBar"
import EditWebsiteSidebar from "../components/EditWebsiteSidebar"
import EditWebsiteSidebarIcons from "../components/EditWebsiteSidebarIcons"

export default function EditWebsite() {
    return (
        <div className="divide-y divide-gray-200">
        <EditWebsiteTopBar />
        <div className="grid grid-cols-[300px_1fr] min-h-[88.5vh]">
            <div className="grid grid-cols-[50px_1fr] divide-x">
            <EditWebsiteSidebarIcons />
            <EditWebsiteSidebar />
            </div>
            <div className="bg-gray-100">
                Editor
            </div>
        </div>
        </div>
    )
}
