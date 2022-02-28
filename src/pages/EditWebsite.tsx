import EditWebsiteTopBar from "../components/EditWebsiteTopBar"
import EditWebsiteSidebar from "../components/EditWebsiteSidebar"

export default function EditWebsite() {
    return (
        <div className="divide-y divide-gray-200">
        <EditWebsiteTopBar />
        <div className="grid grid-cols-[300px_1fr] min-h-[87vh]">
            <EditWebsiteSidebar />
            <div className="bg-gray-100">
                Editor
            </div>
        </div>
        </div>
    )
}
