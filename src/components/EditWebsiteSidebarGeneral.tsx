import { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import EditWebsiteSidebarDropdowns from "./EditWebsiteSidebarDropdowns"

export default function EditWebsiteSidebarGeneral() {

    const navigate = useNavigate()
    const { websiteId, pageSelected } = useParams()

    const [pageToEdit, setPageToEdit] = useState<string | undefined>('')
    const [showPageToEdit, setShowPageToEdit] = useState(false)
    const [pages, setPages] = useState<string[]>([])

    const handlePageToEditChange = (page: string) => {
        setShowPageToEdit(false)
        setPageToEdit(page)
        navigate(`/ws-edit/${websiteId}/${page}`)
    }

    useEffect(() => {
        setPages(['home', 'about', 'contact'])
        setPageToEdit(pageSelected)
    }, [])

    return (
        <div className="flex flex-col">
            <EditWebsiteSidebarDropdowns name={`pages - ${pageSelected}`}>
                <div>
                    { pages.map(page => (
                    <div>
                        <p key={page} className="capitalize cursor-pointer hover:bg-gray-100 pb-2 pl-8" onClick={() => handlePageToEditChange(page)}>{page}</p>
                    </div>)) }
                </div>
            </EditWebsiteSidebarDropdowns>

            <EditWebsiteSidebarDropdowns name="sections">
                <div className="ml-8">
                    <p>Navbar</p>
                    <p>Hero</p>
                    <p>Pricing</p>
                </div>
            </EditWebsiteSidebarDropdowns>
        </div>
    )
}