import EditWebsiteSidebarDropdowns from "./EditWebsiteSidebarDropdowns"

export default function EditWebsiteSidebarLayout() {
    return (
        <div className="select-none overflow-y-scroll">
            <EditWebsiteSidebarDropdowns name="Grid - Container">
                <div className="grid grid-cols-1 justify-items-center p-3">
                    <img src="/assets/container.jpg" className="h-16 hover:border-2 hover:cursor-pointer p-2" alt="container" />
                </div>
            </EditWebsiteSidebarDropdowns>
            <EditWebsiteSidebarDropdowns name="Grid - Simple">
                <div className="grid grid-cols-2 justify-center gap-3 p-3">
                    <img src="/assets/2x1.jpg" className="h-16 hover:border-2 hover:cursor-pointer p-2" alt="2x1" />
                    <img src="/assets/3x1.jpg" className="h-16 hover:border-2 hover:cursor-pointer p-2" alt="3x1" />
                    <img src="/assets/1x2.jpg" className="h-16 hover:border-2 hover:cursor-pointer p-2" alt="1x2" />
                    <img src="/assets/1x3.jpg" className="h-16 hover:border-2 hover:cursor-pointer p-2" alt="1x3" />
                    <img src="/assets/2x2.jpg" className="h-16 hover:border-2 hover:cursor-pointer p-2" alt="2x2" />
                    <img src="/assets/3x3.jpg" className="h-16 hover:border-2 hover:cursor-pointer p-2" alt="3x3" />
                </div>
            </EditWebsiteSidebarDropdowns>
            <EditWebsiteSidebarDropdowns name="Grid - Advanced">
                <div className="grid grid-cols-2 justify-center gap-3 p-3">
                    <img src="/assets/1-1x2.jpg" className="h-16 hover:border-2 hover:cursor-pointer p-2" alt="1-1x2" />
                    <img src="/assets/1x2-1.jpg" className="h-16 hover:border-2 hover:cursor-pointer p-2" alt="1x2-1" />
                    <img src="/assets/1x2-1x3.jpg" className="h-16 hover:border-2 hover:cursor-pointer p-2" alt="1x2-1x3" />
                    <img src="/assets/1x3-1x2.jpg" className="h-16 hover:border-2 hover:cursor-pointer p-2" alt="1x3-1x2" />
                </div>
            </EditWebsiteSidebarDropdowns>
            <EditWebsiteSidebarDropdowns name="Grid - Custom">
                <div className="ml-8">
                    <p>Number Of Rows</p>
                    <p>Number Of Columns</p>
                    <p>Generate</p>
                </div>
            </EditWebsiteSidebarDropdowns>
        </div>
    )
}