import EditWebsiteSidebarDropdowns from "./EditWebsiteSidebarDropdowns"

export default function EditWebsiteSidebarLayout() {
    return (
        <div className="select-none">
            <EditWebsiteSidebarDropdowns name="Grid - Container">
                <div className="ml-8">
                    <p>Add Images in 2 columns</p>
                    <p>Container</p>
                </div>
            </EditWebsiteSidebarDropdowns>
            <EditWebsiteSidebarDropdowns name="Grid - Simple">
                <div className="ml-8">
                    <p>2 x 1 Horizontal</p>
                    <p>3 x 1 Horizontal</p>
                    <p>1 x 2 Vertical</p>
                    <p>1 x 2 Vertical</p>
                    <p>2 x 2</p>
                    <p>3 x 3</p>
                </div>
            </EditWebsiteSidebarDropdowns>
            <EditWebsiteSidebarDropdowns name="Grid - Advanced">
                <div className="ml-8">
                    <p>1 on left, 2 x 1 vertical</p>
                    <p>2 on top, 3 on bottom</p>
                    <p>Plus Opposites</p>
                </div>
            </EditWebsiteSidebarDropdowns>
        </div>
    )
}