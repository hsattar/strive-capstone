import EditWebsiteSidebarDropdowns from "./EditWebsiteSidebarDropdowns"

export default function EditWebsiteSidebarStyles() {
    return (
        <div className="select-none">
            <EditWebsiteSidebarDropdowns name="Text">
                <div>
                    <p className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Size</p>
                    <p className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Color</p>
                    <p className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Styles</p>
                </div>
            </EditWebsiteSidebarDropdowns>
        </div>
    )
}