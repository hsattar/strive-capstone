import { Dispatch, FormEvent, Fragment, MouseEvent, SetStateAction, useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import CustomSidebarDropdown from "../reusable/CustomSidebarDropdown"
import CustomSVGIcon from "../reusable/CustomSVGIcon"
import useAxios from '../../hooks/useAxios'
import { useSelector } from "react-redux"

interface IProps {
    pages: string[]
    setPages: Dispatch<SetStateAction<string[]>>
}

export default function EditWebsiteSidebarGeneral({ pages, setPages}: IProps) {

    const navigate = useNavigate()
    const axiosRequest = useAxios()
    const { websiteName, pageSelected } = useParams()
    const code = useSelector((state: IReduxStore) => state.website.code)
    const codeBlocks = useSelector((state: IReduxStore) => state.website.codeBlocks)

    const [pageToEdit, setPageToEdit] = useState<string | undefined>('')
    const [showPageToEdit, setShowPageToEdit] = useState(false)
    const [showAddNewPageModal, setShowAddNewPageModal] = useState(false)
    const [newPageName, setNewPageName] = useState('')
    const [pageToCopy, setPageToCopy] = useState(false)


    const handlePageToEditChange = (page: string) => {
        handleSaveWebsite()
        setShowPageToEdit(false)
        setPageToEdit(page)
        navigate(`/ws-edit/${websiteName}/${page}`)
    }

    const handleSaveWebsite = async () => {
        try {
            const response = await axiosRequest(`/websites/${websiteName}/${pageSelected}/development`, 'PUT', { code, codeBlocks })
            if (response.status === 200) {
                // toastNotification('Saved')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleDuplicatePage = async (e: MouseEvent) => {
        setPageToCopy(true)
        setShowAddNewPageModal(true)
    }

    const handleDeletePage = async (e: MouseEvent, pageToDelete: string) => {
        e.stopPropagation()
        try {
            const response = await axiosRequest(`/websites/${websiteName}/${pageToDelete}`, 'DELETE')
            if (response.status === 204) {
                const remainingPages = pages.filter(page => page !== pageToDelete) 
                setPages(remainingPages)
                if (pageToDelete === pageSelected) {
                    navigate(`/ws-edit/${websiteName}/${remainingPages[0]}`)
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const pageName = newPageName.toLowerCase()
        if (!newPageName) return
        try {
            if (pageToCopy) {
                const response = await axiosRequest('/websites', 'POST', { name: websiteName, page: pageName, stage: 'development', code, codeBlocks })
                if (response.status === 201) {
                    navigate(`/ws-edit/${websiteName}/${pageName}`)
                    setPages(prev => ([...prev, pageName]))
                    setShowAddNewPageModal(false)
                    setNewPageName('')
                    setPageToCopy(false)
                }
            } else {
                const response = await axiosRequest('/websites', 'POST', { name: websiteName, page: pageName, stage: 'development' })
                if (response.status === 201) {
                    navigate(`/ws-edit/${websiteName}/${pageName}`)
                    setPages(prev => ([...prev, pageName]))
                    setShowAddNewPageModal(false)
                    setNewPageName('')
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setPageToEdit(pageSelected)
    }, [])

    return (
        <>
        <div className="flex flex-col select-none">
        <CustomSidebarDropdown 
                name={`pages - ${pageSelected}`}
                iconClassName="h-5 w-5 text-green-500 mr-2" 
                iconPath="M12 4v16m8-8H4" 
                iconStrokeWidth={2}
                onClick={(e: MouseEvent) => {
                    e.stopPropagation()
                    setShowAddNewPageModal(true)
                }}
            >
                <>
                    { pages.map(page => (
                    <Fragment key={page}>
                    { (page === 'home' && page !== pageSelected) && (
                        <div className="flex justify-between items-center hover:bg-gray-100 py-1" onClick={e => handlePageToEditChange(page)}>
                            <p className="capitalize ml-8 cursor-default">{page}</p>
                            <button onClick={handleDuplicatePage}>
                                <CustomSVGIcon svgClassName="text-blue-500 h-4 w-4 mr-2.5" pathD="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </button>
                        </div>
                    ) }
                    { (page === 'home' && page === pageSelected) && (
                        <div className="flex justify-between items-center bg-gray-100 py-1" onClick={e => handlePageToEditChange(page)}>
                            <p className="capitalize ml-8 cursor-default">{page}</p>
                            <button onClick={handleDuplicatePage}>
                                <CustomSVGIcon svgClassName="text-blue-500 h-4 w-4 mr-2.5" pathD="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </button>
                        </div>
                    ) }
                    { (page !== 'home' && page !== pageSelected) && (
                        <div className="flex justify-between items-center hover:bg-gray-100 py-1" onClick={e => handlePageToEditChange(page)}>
                            <p className="capitalize ml-8 cursor-default">{page}</p>
                            <div>
                                <button onClick={handleDuplicatePage}>
                                    <CustomSVGIcon svgClassName="text-blue-500 h-4 w-4 mr-2.5" pathD="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </button>
                                <button onClick={e => handleDeletePage(e, page)}>
                                    <CustomSVGIcon svgClassName="h-4 w-4 mr-2.5 text-red-500 cursor-pointer" pathD="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </button>
                            </div>
                        </div>
                    ) }
                    { (page !== 'home' && page === pageSelected) && (
                        <div className="flex justify-between items-center bg-gray-100 py-1" onClick={e => handlePageToEditChange(page)}>
                            <p className="capitalize ml-8 cursor-default">{page}</p>
                            <div>
                                <button onClick={handleDuplicatePage}>
                                    <CustomSVGIcon svgClassName="text-blue-500 h-4 w-4 mr-2.5" pathD="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </button>
                                <button onClick={e => handleDeletePage(e, page)}>
                                    <CustomSVGIcon svgClassName="h-4 w-4 mr-2.5 text-red-500 cursor-pointer" pathD="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </button>
                            </div>
                        </div>
                    ) }
                    </Fragment>
                    )) }
                </>
            </CustomSidebarDropdown>

            <CustomSidebarDropdown name="Website Settings">
                <div>
                    <p className="capitalize pl-8 py-1">Website Name</p>
                </div>
            </CustomSidebarDropdown>
        </div>
        { showAddNewPageModal && (
        <div onClick={() => setShowAddNewPageModal(false)} className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div onClick={e => e.stopPropagation()} className="relative top-20 mx-auto p-5 border w-[50%] shadow-lg rounded-md bg-white">
                <form onSubmit={handleSubmit} autoComplete="off" noValidate className="mt-3 text-center">
                    <div className="relative z-0 mb-6 w-full group">
                        <input 
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            type="text"
                            value={newPageName}
                            onChange={e => setNewPageName(e.target.value)}
                            autoFocus 
                            required 
                        />
                        <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Page Name</label>
                    </div>
                    <button type="submit" onClick={e => e.stopPropagation()} className="bg-blue-500 hover:bg-blue-600 py-1 px-5 mr-3 rounded-md text-white">Add</button>
                </form>
            </div>
        </div>
        ) }
        </>
    )
}

{/* <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
</svg> */}