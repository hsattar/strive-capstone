import { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'

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
        <div className="flex flex-col items-center">
            <div className="w-5/6 relative">
            <button onClick={() => setShowPageToEdit(prev => !prev)} className="flex justify-between items-center transition duration-200 border capitalize mx-0 px-3 py-1 my-2 cursor-pointer font-normal text-md rounded-md w-full text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                <span>{`Page - ${pageToEdit}`}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div className={`${!showPageToEdit && 'hidden'} absolute z-20 my-0 text-base list-none bg-white rounded divide-y divide-gray-100 shadow w-full`}>
                <ul className="py-1">
                    { pages.map(page => (
                        <li key={page}>
                            <button onClick={() => handlePageToEditChange(page)} className="block w-full py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 capitalize">{page}</button>
                        </li>
                    )) }
                    <li><button className="block w-full py-2 px-4 text-sm text-blue-500 hover:bg-gray-100 capitalize">New Page</button></li>
                </ul>
            </div>
            </div>
            <button className="transition duration-200 w-5/6 text-center border-red-500 hover:bg-red-100 py-1 px-3 mr-1 rounded-md text-red-500">Delete Page</button>
        </div>
    )
}