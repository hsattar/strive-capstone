import { FormEvent, useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import parse from 'html-react-parser'
import EditWebsiteTopBar from "../components/EditWebsiteTopBar"
import EditWebsiteSidebarGeneral from "../components/EditWebsiteSidebarGeneral"
import EditWebsiteSidebarIcons from "../components/EditWebsiteSidebarIcons"
import EditWebsiteSidebarLayout from "../components/EditWebsiteSidebarLayout"
import EditWebsiteSidebarElements from "../components/EditWebsiteSidebarElements"
import EditWebsiteSidebarComponents from "../components/EditWebsiteSidebarComponents"
import EditWebsiteSidebarStyles from "../components/EditWebsiteSidebarStyles"
import Navbar from "../components/Navbar"
import EditWebsiteSidebarStructure from "../components/EditWebsiteSidebarStructure"
import { changeElementClassAction, updateAllWebsiteInformationAction } from "../redux/actions/actionCreators"
import { Helmet } from "react-helmet-async"
import useAxios from '../hooks/useAxios'

export default function EditWebsite() {

    const dispatch = useDispatch()
    const axiosRequest = useAxios()
    const { websiteName, pageSelected } = useParams()
    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    const code = useSelector((state: IReduxStore) => state.website.code)
    const elementToEdit = useSelector((state: IReduxStore) => state.website.elementToEdit)

    const [sidebarTab, setSidebarTab] = useState('general')
    const [showEditTextModal, setShowEditTextModal] = useState(false)
    const [elementToEditText, setelementToEditText] = useState<string | undefined>('')

    const fetchWebsiteDetails = async () => {
        try {
            const response = await axiosRequest(`/websites/${websiteName}/${pageSelected}/development`, 'GET')
            if (response.status === 200) {
                const defaultWebsiteStructure = {
                    containers: [{
                        id: '123456789',
                        name: 'root',
                        openingTag: `<div class="">`,
                        class: `123456789`,
                        closingTag: `</div>`,
                        children: [],
                    }],
                    elements: [],
                    containerOrder: ['123456789']
                }
                dispatch(updateAllWebsiteInformationAction(response.data.code, response.data.structure || defaultWebsiteStructure ))
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        dispatch(changeElementClassAction(elementToEdit?.id!, 'text', elementToEditText!))
        setShowEditTextModal(false)
    }

    useEffect(() => {
        elementToEdit && setelementToEditText(elementToEdit?.text)
    }, [elementToEdit])

    useEffect(() => {
        fetchWebsiteDetails()
    }, [pageSelected])

    return (
        <>
        <Helmet>
            <title>{`Code Buddy - Edit ${websiteName}`}</title>
        </Helmet>
        <div className="overflow-hidden">
            <Navbar />
            <div className="divide-y divide-gray-200">
            <EditWebsiteTopBar />
            <div className={sidebarTab === '' ? 'grid grid-cols-[50px_1fr] gap-0 min-h-[88vh]' : 'grid grid-cols-[300px_1fr] gap-0 min-h-[88vh]'}>
                <div className="grid gap-0 grid-cols-[50px_250px] divide-x min-h-[88vh] max-h-[88vh] overflow-y-scroll overflow-x-hidden">
                <EditWebsiteSidebarIcons sidebarTab={sidebarTab} setSidebarTab={setSidebarTab} />
                { sidebarTab === 'general' && <EditWebsiteSidebarGeneral /> }
                { sidebarTab === 'structure' && <EditWebsiteSidebarStructure setSidebarTab={setSidebarTab} /> }
                { sidebarTab === 'styles' && <EditWebsiteSidebarStyles showEditTextModal={showEditTextModal} setShowEditTextModal={setShowEditTextModal} /> }
                { sidebarTab === 'layout' && <EditWebsiteSidebarLayout /> }
                { sidebarTab === 'elements' && <EditWebsiteSidebarElements /> }
                { sidebarTab === 'components' && <EditWebsiteSidebarComponents /> }
                </div>
                <div className="bg-gray-100 flex justify-center select-none">
                    <div className="w-[95%] bg-white my-2">
                        { parse(code) }
                    </div>
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