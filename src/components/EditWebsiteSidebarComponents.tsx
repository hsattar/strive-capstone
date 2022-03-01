import EditWebsiteSidebarDropdowns from "./EditWebsiteSidebarDropdowns"

export default function EditWebsiteSidebarComponents() {
    return (
        <div className="select-none">
            <EditWebsiteSidebarDropdowns name="Top">
                <div className="ml-8">
                    <p>Navbar</p>
                    <p>Hero Section</p>
                </div>
            </EditWebsiteSidebarDropdowns>
            <EditWebsiteSidebarDropdowns name="Media">
                <div className="ml-8">
                    <p>Carousel</p>
                </div>
            </EditWebsiteSidebarDropdowns>
            <EditWebsiteSidebarDropdowns name="Specific">
                <div className="ml-8">
                    <p>Accordian</p>
                    <p>Form</p>
                    <p>Cards</p>
                    <p>Modal</p>
                </div>
            </EditWebsiteSidebarDropdowns>
        </div>
    )
}