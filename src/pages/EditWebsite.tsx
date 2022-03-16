import { FormEvent, useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import EditWebsiteTopBar from "../components/EditWebsiteTopBar"
import EditWebsiteSidebarGeneral from "../components/EditWebsiteSidebarGeneral"
import EditWebsiteSidebarIcons from "../components/EditWebsiteSidebarIcons"
import EditWebsiteSidebarLayout from "../components/EditWebsiteSidebarLayout"
import EditWebsiteSidebarElements from "../components/EditWebsiteSidebarElements"
import EditWebsiteSidebarComponents from "../components/EditWebsiteSidebarComponents"
import EditWebsiteSidebarStyles from "../components/EditWebsiteSidebarStyles"
import Navbar from "../components/Navbar"
import EditWebsiteSidebarMedia from "../components/EditWebsiteSidebarMedia"
import { updateCodeAndCodeBlocksAction, createNewCode } from "../redux/actions/actionCreators"
import { Helmet } from "react-helmet-async"
import useAxios from '../hooks/useAxios'
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { DragDropContext, Droppable } from "react-beautiful-dnd"
import DraggableCodeBlock from "../components/DraggableCodeBlock"

export default function EditWebsite() {

    const dispatch = useDispatch()
    const axiosRequest = useAxios()
    const { websiteName, pageSelected } = useParams()
    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    const code = useSelector((state: IReduxStore) => state.website.code)
    const codeBlocks = useSelector((state: IReduxStore) => state.website.codeBlocks)
    const elementToEdit = useSelector((state: IReduxStore) => state.website.elementToEdit)

    const [sidebarTab, setSidebarTab] = useState('general')
    const [showEditTextModal, setShowEditTextModal] = useState(false)
    const [elementToEditText, setelementToEditText] = useState<string | undefined>('')

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

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        setShowEditTextModal(false)
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

        if (!destination) return 
        if (destination.droppableId === source.droppableId && destination.index === source.index) return

        const elementToMove = codeBlocks.find(block => block.id === draggableId)
        if (!elementToMove) return
        const newCodeBlocks = [...codeBlocks]
        newCodeBlocks.splice(source.index, 1)
        newCodeBlocks.splice(destination.index, 0, elementToMove)
        const newCodeBlockCode = newCodeBlocks.map(block => block.code).flat()
        const newCode = createNewCode(newCodeBlockCode)
        dispatch(updateCodeAndCodeBlocksAction(newCode, newCodeBlocks))
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
        elementToEdit && setelementToEditText(elementToEdit.id)
    }, [elementToEdit])

    useEffect(() => {
        fetchWebsiteDetails()
    }, [pageSelected])

    return (
        <>
        <Helmet>
            <title>{`Code Buddy - Edit ${websiteName}`}</title>
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
                { sidebarTab === 'general' && <EditWebsiteSidebarGeneral /> }
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
                            <DraggableCodeBlock key={block.id} codeBlock={block} index={index} />
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
        { showEditTextModal && (
        <div onClick={() => setShowEditTextModal(false)} className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div onClick={e => e.stopPropagation()} className="relative top-20 mx-auto p-5 border w-[50%] shadow-lg rounded-md bg-white">
                <form onSubmit={handleSubmit} className="mt-3 text-center">
                    <textarea
                        autoFocus
                        rows={6}
                        ref={textAreaRef}
                        onClick={e => e.stopPropagation()}
                        value={elementToEditText}
                        onChange={e => setelementToEditText(e.target.value)}
                        className="w-full p-2 mb-2 resize-none border-2 rounded outline-none"

                    />
                    <button type="submit" onClick={e => e.stopPropagation()} className="bg-blue-500 hover:bg-blue-600 py-1 px-5 mr-3 rounded-md text-white">Save</button>
                </form>
            </div>
        </div>
        ) }
        </>
    )
}