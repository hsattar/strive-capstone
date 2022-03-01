import EditWebsiteSidebarDropdowns from "./EditWebsiteSidebarDropdowns";

export default function EditWebsiteSidebarElements() {
    return (
        <div className="select-none">
            <EditWebsiteSidebarDropdowns name="Text">
                <div className="ml-8">
                    <p>Heading</p>
                    <p>Paragraph</p>
                    <p>Link</p>
                    <p>List</p>
                </div>
            </EditWebsiteSidebarDropdowns>
            <EditWebsiteSidebarDropdowns name="Media">
                <div className="ml-8">
                    <p>Image</p>
                    <p>Video</p>
                    <p>YouTube</p>
                </div>
            </EditWebsiteSidebarDropdowns>
            <EditWebsiteSidebarDropdowns name="Other">
                <div className="ml-8">
                    <p>Button</p>
                    <p>Dropdown</p>
                </div>
            </EditWebsiteSidebarDropdowns>
        </div>
    )
}