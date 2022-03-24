import { useEffect, useState } from "react"
import { DragDropContext, Droppable } from "react-beautiful-dnd"
import { Helmet } from "react-helmet-async"
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import DraggableCodeBlock from "../components/DraggableCodeBlock"
import EditBlockModal from "../components/EditBlockModal"
import EditWebsiteTopBar from "../components/EditWebsiteTopBar"
import Navbar from "../components/Navbar"
import EditWebsiteSidebarComponents from "../components/sidebar/EditWebsiteSidebarComponents"
import EditWebsiteSidebarElements from "../components/sidebar/EditWebsiteSidebarElements"
import EditWebsiteSidebarGeneral from "../components/sidebar/EditWebsiteSidebarGeneral"
import EditWebsiteSidebarIcons from "../components/sidebar/EditWebsiteSidebarIcons"
import EditWebsiteSidebarLayout from "../components/sidebar/EditWebsiteSidebarLayout"
import EditWebsiteSidebarMedia from "../components/sidebar/EditWebsiteSidebarMedia"
import EditWebsiteSidebarStyles from "../components/sidebar/EditWebsiteSidebarStyles"
import useAxios from '../hooks/useAxios'
import { createNewCode, updateCodeAndCodeBlocksAction } from "../redux/actions/actionCreators"

export default function EditWebsite() {

    const dispatch = useDispatch()
    const axiosRequest = useAxios()
    const { websiteName, pageSelected } = useParams()
    const code = useSelector((state: IReduxStore) => state.website.code)
    const codeBlocks = useSelector((state: IReduxStore) => state.website.codeBlocks)

    const [pages, setPages] = useState<string[]>([])
    const [sidebarTab, setSidebarTab] = useState('general')
    const [showEditTextModal, setShowEditTextModal] = useState(false)

    const fetchWebsitePages = async () => {
        try {
            const response = await axiosRequest(`/websites/${websiteName}`, 'GET')
            if (response.status === 200) {
                setPages(response.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const fetchWebsiteDetails = async () => {
        try {
            const response = await axiosRequest(`/websites/${websiteName}/${pageSelected}/development`, 'GET')
            if (response.status === 200) {
                dispatch(updateCodeAndCodeBlocksAction(response.data.code, response.data.codeBlocks))
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleSaveWebsite = async () => {
        try {
            const response = await axiosRequest(`/websites/${websiteName}/${pageSelected}/development`, 'PUT', { code, codeBlocks })
            if (response.status === 200) {
                toastNotification('Website Saved')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleDragEnd = (result: any) => {
        const { source, destination, draggableId } = result
        
        if (!destination) {
            const elementToMove = codeBlocks.find(block => block.id === draggableId)
            if (!elementToMove) return
            const newCodeBlocks = [...codeBlocks]
            newCodeBlocks.splice(source.index, 1)
            const newCodeBlockCode = newCodeBlocks.map(block => block.code).flat()
            const newCode = createNewCode(newCodeBlockCode)
            dispatch(updateCodeAndCodeBlocksAction(newCode, newCodeBlocks))
            return
        } 

        if (destination.droppableId === source.droppableId && destination.index === source.index) return
        

        const elementToMove = codeBlocks.find(block => block.id === draggableId)
        if (!elementToMove) return
        const newCodeBlocks = [...codeBlocks]
        newCodeBlocks.splice(source.index, 1)
        newCodeBlocks.splice(destination.index, 0, elementToMove)
        const newCodeBlockCode = newCodeBlocks.map(block => block.code).flat()
        const newCode = createNewCode(newCodeBlockCode)
        dispatch(updateCodeAndCodeBlocksAction(newCode, newCodeBlocks))
        return
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
        fetchWebsiteDetails()
    }, [pageSelected])

    useEffect(() => {
        fetchWebsitePages()
    }, [])

    return (
        <>
        <Helmet>
            <title>{`Code Buddy - Edit ${websiteName}`}</title>
            <script src="https://cdn.tailwindcss.com"></script>
        </Helmet>
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
        <div className="overflow-hidden">
            <Navbar />
            <div className="divide-y divide-gray-200">
            <EditWebsiteTopBar />
            <div className={sidebarTab === '' ? 'grid grid-cols-[50px_1fr] gap-0 min-h-[88vh]' : 'grid grid-cols-[300px_1fr] gap-0 min-h-[88vh]'}>
                <div className="grid gap-0 grid-cols-[50px_250px] divide-x min-h-[88vh] max-h-[88vh] overflow-y-scroll overflow-x-hidden">
                <EditWebsiteSidebarIcons sidebarTab={sidebarTab} setSidebarTab={setSidebarTab} />
                { sidebarTab === 'general' && <EditWebsiteSidebarGeneral pages={pages} setPages={setPages} /> }
                { sidebarTab === 'media' && <EditWebsiteSidebarMedia /> }
                { sidebarTab === 'styles' && <EditWebsiteSidebarStyles showEditTextModal={showEditTextModal} setShowEditTextModal={setShowEditTextModal} /> }
                { sidebarTab === 'layout' && <EditWebsiteSidebarLayout /> }
                { sidebarTab === 'elements' && <EditWebsiteSidebarElements /> }
                { sidebarTab === 'components' && <EditWebsiteSidebarComponents /> }
                </div>
                <div className="bg-gray-100 flex justify-center select-none overflow-hidden min-h-[88vh] max-h-[88vh]">
                    <DragDropContext onDragEnd={handleDragEnd}>
                        <Droppable droppableId="website-display">
                            {(provided) => (
                            <div
                                className="w-[95%] bg-white my-2 overflow-y-scroll"
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                            { codeBlocks.map((block, index) => (
                            <DraggableCodeBlock key={block.id} codeBlock={block} index={index} setSidebarTab={setSidebarTab} setShowEditTextModal={setShowEditTextModal} />
                            )) }
                            { provided.placeholder }
                            </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>
            </div>
            </div>
        </div>
        { showEditTextModal && <EditBlockModal pages={pages} setShowEditTextModal={() => setShowEditTextModal(false)} /> }
        </>
    )
}