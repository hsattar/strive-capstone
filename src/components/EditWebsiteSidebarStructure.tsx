import EditWebsiteSidebarDropdowns from "./EditWebsiteSidebarDropdowns"

export default function EditWebsiteSidebarStructure() {
    return (
        <div className="select-none">
            <EditWebsiteSidebarDropdowns name="Top">
                <div>
                    <p className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Navbar</p>
                    <p className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Hero Section</p>
                </div>
            </EditWebsiteSidebarDropdowns>
        </div>
    )
}