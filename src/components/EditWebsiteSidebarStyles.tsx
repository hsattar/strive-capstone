import EditWebsiteSidebarDropdowns from "./EditWebsiteSidebarDropdowns"

export default function EditWebsiteSidebarStyles() {
    return (
        <div className="select-none">
            <EditWebsiteSidebarDropdowns name="Text">
                <div className="ml-8">
                    <p>Size</p>
                    <p>Color</p>
                    <p>Styles</p>
                </div>
            </EditWebsiteSidebarDropdowns>
        </div>
    )
}