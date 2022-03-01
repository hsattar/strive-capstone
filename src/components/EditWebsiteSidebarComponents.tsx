import EditWebsiteSidebarDropdowns from "./EditWebsiteSidebarDropdowns"

export default function EditWebsiteSidebarComponents() {
    return (
        <div className="select-none">
            <EditWebsiteSidebarDropdowns name="Top">
                <div>
                    <p className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Navbar</p>
                    <p className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Hero Section</p>
                </div>
            </EditWebsiteSidebarDropdowns>
            <EditWebsiteSidebarDropdowns name="Media">
                <div>
                    <p className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Carousel</p>
                </div>
            </EditWebsiteSidebarDropdowns>
            <EditWebsiteSidebarDropdowns name="Specific">
                <div>
                    <p className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Accordian</p>
                    <p className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Form</p>
                    <p className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Cards</p>
                    <p className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Modal</p>
                </div>
            </EditWebsiteSidebarDropdowns>
        </div>
    )
}