import { Fragment, MouseEvent, useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import EditWebsiteSidebarDropdowns from "./EditWebsiteSidebarDropdowns"
import SVGIcon from "./SVGIcon"

export default function EditWebsiteSidebarGeneral() {

    const navigate = useNavigate()
    const { websiteName, pageSelected } = useParams()

    const [pageToEdit, setPageToEdit] = useState<string | undefined>('')
    const [showPageToEdit, setShowPageToEdit] = useState(false)
    const [pages, setPages] = useState<string[]>([])

    const handlePageToEditChange = (page: string, e: MouseEvent) => {
        setShowPageToEdit(false)
        setPageToEdit(page)
        navigate(`/ws-edit/${websiteName}/${page}`)
    }

    const handleDeletePage = (pageToDelete: string, e: MouseEvent) => {
        e.stopPropagation()
        const remainingPages = pages.filter(page => page !== pageToDelete) 
        setPages(remainingPages)
        if (pageToDelete === pageSelected) {
            navigate(`/ws-edit/${websiteName}/${remainingPages[0]}`)
        }
    }

    useEffect(() => {
        setPages(['home', 'about', 'contact'])
        setPageToEdit(pageSelected)
    }, [])

    return (
        <div className="flex flex-col select-none">
            <EditWebsiteSidebarDropdowns name={`pages - ${pageSelected}`}>
                <>
                    { pages.map(page => (
                    <Fragment key={page}> 
                    { page === pageSelected ? (
                        <div className="flex justify-between items-center bg-gray-100 py-1">
                            <p className="capitalize ml-8 cursor-default">{page}</p>
                            <button onClick={e => handleDeletePage(page, e)}><SVGIcon svgClassName="h-4 w-4 mr-8 text-red-500 cursor-pointer" pathD="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></button>
                        </div>
                    ) : (
                        <div className="flex justify-between items-center hover:bg-gray-100 py-1" onClick={e => handlePageToEditChange(page, e)}>
                            <p className="capitalize ml-8 cursor-default">{page}</p>
                            <button onClick={e => handleDeletePage(page, e)}><SVGIcon svgClassName="h-4 w-4 mr-8 text-red-500 cursor-pointer" pathD="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></button>
                        </div>
                    )}
                    </Fragment>
                    )) }
                </>
            </EditWebsiteSidebarDropdowns>

            <EditWebsiteSidebarDropdowns name="sections">
                <div className="ml-8">
                    <p>Navbar</p>
                    <p>Hero</p>
                    <p>Pricing</p>
                </div>
            </EditWebsiteSidebarDropdowns>
            <EditWebsiteSidebarDropdowns name="Website Settings">
                <div className="ml-8">
                    <p>Website Name</p>
                    <p>Load All Pages At Once / only on request</p>
                </div>
            </EditWebsiteSidebarDropdowns>
        </div>
    )
}