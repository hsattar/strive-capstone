import { Dispatch, FormEvent, Fragment, MouseEvent, SetStateAction, useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import CustomSidebarDropdown from "../reusable/CustomSidebarDropdown"
import CustomSVGIcon from "../reusable/CustomSVGIcon"
import useAxios from '../../hooks/useAxios'
import { useDispatch, useSelector } from "react-redux"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { ActionCreators } from 'redux-undo'
import CustomSelectDropdown from "../reusable/CustomSelectDropdown"
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import markup from 'react-syntax-highlighter/dist/esm/languages/prism/markup'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import vscDarkPlus from 'react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus'

interface IProps {
    pages: string[]
    setPages: Dispatch<SetStateAction<string[]>>
}

export default function EditWebsiteSidebarGeneral({ pages, setPages}: IProps) {

    const navigate = useNavigate()
    const axiosRequest = useAxios()
    const dispatch = useDispatch()
    const { clearHistory } = ActionCreators
    const { websiteName, pageSelected } = useParams()
    const code = useSelector((state: IReduxStore) => state.website.present.code)
    const codeBlocks = useSelector((state: IReduxStore) => state.website.present.codeBlocks)

    const [websiteTitle, setWebsiteTitle] = useState('')
    const [websiteDescription, setWebsiteDescription] = useState('')
    const [pageToEdit, setPageToEdit] = useState<string | undefined>('')
    const [showPageToEdit, setShowPageToEdit] = useState(false)
    const [showAddNewPageModal, setShowAddNewPageModal] = useState(false)
    const [newPageName, setNewPageName] = useState('')
    const [pageToCopy, setPageToCopy] = useState(false)
    const [showCodeModal, setShowCodeModal] = useState(false)
    const [viewCode, setViewCode] = useState('')
    const [viewCodeLanguage, setViewCodeLanguage] = useState('html')

    const openingHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="index, follow">
    <meta name="description" content="${websiteDescription}">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>${websiteTitle}</title>
</head>
<body>\n\t`

        const closingHTML = `
</body>
</html>`

        const openingReact = `import { Link } from 'react-router-dom'
// You will need to install Tailwind CSS - https://tailwindcss.com/docs/guides/create-react-app

export default function ${pageSelected}() {
    return (
        <>\n\t\t\t`

        const closingReact = `
        </>
    )
}`

    const handlePageToEditChange = (page: string) => {
        handleSaveWebsite()
        dispatch(clearHistory())
        setShowPageToEdit(false)
        setPageToEdit(page)
        navigate(`/ws-edit/${websiteName}/${page}`)
    }

    const fetchWebsiteDetails = async () => {
        try {
            const response = await axiosRequest(`/websites/${websiteName}/${pageSelected}/details`, 'GET')
            if (response.status === 200) {
                setWebsiteTitle(`${response.data.title} - ${pageSelected}`)
                setWebsiteDescription(response.data.description)
            }
        } catch (error) {
            console.log(error)
        }
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

    const updateWebsiteDetails = async (e: FormEvent) => {
        try {
            e.preventDefault()
            const response = await axiosRequest(`/websites/${websiteName}/${pageSelected}/update-details`, 'PUT', { title: websiteTitle, description: websiteDescription })
            if (response.status === 200) {
                toastNotification('Updated')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleCopyCode = async () => {
        viewCodeLanguage === 'html'
        ? navigator.clipboard.writeText(`${openingHTML}${viewCode}${closingHTML}`)
        : navigator.clipboard.writeText(`${openingReact}${viewCode}${closingReact}`)
        toastNotification('Copied')
        setShowCodeModal(false)
    }

    const toastNotification = (msg: string) => toast.success(msg, {
        position: "bottom-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
    })

    useEffect(() => {
        setPageToEdit(pageSelected)
        SyntaxHighlighter.registerLanguage('markup', markup)
        SyntaxHighlighter.registerLanguage('jsx', jsx)
    }, [])
    
    useEffect(() => {
        viewCodeLanguage === 'html' 
        ? setViewCode(code.replaceAll('className', 'class').split('">').join('">\n\t\t').split('</').join('\n\t</').split('><').join('>\n\t<').split('">  ').join('">\n'))
        : setViewCode(code.replaceAll('<a href', '<Link to').replaceAll('</a>', '</Link>').split('">').join('">\n\t\t\t\t').split('</').join('\n\t\t\t</').split('><').join('>\n\t\t\t<').split('">  ').join('">\n\t\t\t'))
    }, [code, viewCodeLanguage])

    useEffect(() => {
        fetchWebsiteDetails()
    }, [pageSelected])

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

            <CustomSidebarDropdown name="Website Details">
            <div className="text-center">
            <form onSubmit={updateWebsiteDetails} autoComplete="off" noValidate className="mt-0">
                <div className="relative z-0 mb-4 group flex justify-center">
                    <input 
                        className="block py-2.5 px-0 text-sm w-5/6 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        value={websiteName}
                        disabled 
                    />
                </div>
                <div className="relative z-0 mb-6 group flex justify-center">
                    <input 
                        className="block py-2.5 px-0 text-sm w-5/6 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        value={websiteTitle}
                        onChange={e => setWebsiteTitle(e.target.value)}
                        placeholder="Website Title"
                        required 
                    />
                </div>
                <div className="relative z-0 mb-6 group flex justify-center">
                    <textarea 
                        className="resize-none block py-2.5 px-0 text-sm w-5/6 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        value={websiteDescription}
                        onChange={e => setWebsiteDescription(e.target.value)}
                        placeholder="Website Description"
                        required 
                        rows={4}
                    />
                </div>
                <button type="submit" className="border-green-500 border hover:bg-green-500 py-1 px-5 w-5/6 rounded-md text-green-500 hover:text-white">Update</button>
            </form>
            <button onClick={() => setShowCodeModal(true)} className="border-blue-500 border hover:bg-blue-500 py-1 px-5 w-5/6 rounded-md text-blue-500 hover:text-white mt-4">View Code</button>
            </div>
            </CustomSidebarDropdown>
        </div>
        { showAddNewPageModal && (
        <div onClick={() => setShowAddNewPageModal(false)} className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div onClick={e => e.stopPropagation()} className="relative top-10 mx-auto p-5 border w-[50%] shadow-lg rounded-md bg-white z-50">
                <form onSubmit={handleSubmit} autoComplete="off" noValidate className="mt-3">
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
                    <div className="flex justify-center">   
                    <button type="submit" onClick={e => e.stopPropagation()} className="bg-blue-500 hover:bg-blue-600 py-1 px-5 mr-3 rounded-md text-white">Add</button>
                    </div>
                </form>
            </div>
        </div>
        ) }
        { showCodeModal && (
        <div onClick={() => setShowCodeModal(false)} className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div onClick={e => e.stopPropagation()} className="relative top-10 mx-auto p-5 border w-[85%] shadow-lg rounded-md max-h-[85vh] overflow-hidden overflow-y-scroll bg-white">
                <CustomSelectDropdown 
                    containerClass="w-full"
                    initialValue={viewCodeLanguage}
                    listOfValues={['html', 'react']}
                    onClick={value => setViewCodeLanguage(value)}
                />
                <button onClick={handleCopyCode} className="border-blue-500 border hover:bg-blue-500 my-2 px-5 py-1 rounded-md text-blue-500 hover:text-white w-full">Copy</button>
                { viewCodeLanguage === 'html' ? (
                    <SyntaxHighlighter language="markup" style={vscDarkPlus} showLineNumbers={true}>
                        { `${openingHTML}${viewCode}${closingHTML}` }
                    </SyntaxHighlighter>
                ) : (
                    <SyntaxHighlighter language="jsx" style={vscDarkPlus} showLineNumbers={true}>
                        { `${openingReact}${viewCode}${closingReact}` }
                    </SyntaxHighlighter>
                ) }
            </div>
        </div>
        ) }
        <ToastContainer
            position="bottom-left"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover
        />
        </>
    )
}