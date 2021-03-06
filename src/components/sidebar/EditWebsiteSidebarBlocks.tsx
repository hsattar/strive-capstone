import { useSelector, useDispatch } from 'react-redux'
import { addElementsToCodeAction, setElementToEditAction } from '../../redux/actions/actionCreators'
import CustomSidebarDropdown from "../reusable/CustomSidebarDropdown"
import { v4 as uuid } from 'uuid'
import blockTemplates from '../../data/templates/blockTemplates'
import useAxios from '../../hooks/useAxios'
import { FormEvent, useState } from 'react'
import parse from 'html-react-parser'
import previews from '../../data/templates/codepreviews'

export default function EditWebsiteSidebarElements() {

    const dispatch = useDispatch()
    const originalCode = useSelector((state: IReduxStore) => state.website.present.code)
    const axiosRequest = useAxios()

    const [showIFrameModal, setShowIFrameModal] = useState(false)
    const [IFrameElement, setIFrameElement] = useState('')
    
    const [showNewBlockModal, setShowNewBlockModal] = useState(false)
    const [newBlockName, setNewBlockName] = useState('')

    const [showCardsModal, setShowCardsModal] = useState(false)

    const createElementTemplate = (template: blockTemplateOptions) => {
        return blockTemplates[template].map(block => {
            const id = uuid()
            return { id, ...block }
        })
    }

    const handleAddCode = (elementsToAdd: any) => {
        const id = uuid()
        const codeObject = { id, name: elementsToAdd[0].name, type: elementsToAdd[0].type, code: elementsToAdd} as ICodeBlock
        console.log(codeObject)
        dispatch(setElementToEditAction(codeObject))
        dispatch(addElementsToCodeAction(codeObject))
    }

    const handleCreateIFrame = () => {
        const elementsToAdd = [{ name: 'iframe', type: 'iframe', tag: `<div className="flex justify-center hover:border-2 hover:border-blue-300 hover:cursor-grab">`, hoverBorder: `hover:border-2 hover:border-blue-300 hover:cursor-grab` }, { tag: IFrameElement }, { tag: `</div>`}]
        console.log(elementsToAdd)
        handleAddCode(elementsToAdd)
        setIFrameElement('')
        setShowIFrameModal(false)
    }

    const handleCreateNewBlock = async (e: FormEvent) => {
        e.preventDefault()
    }

    return (
        <>
        <div className="select-none">
            <CustomSidebarDropdown name="Text">
                <div>
                    <p onClick={() => handleAddCode(createElementTemplate('heading'))} className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Heading</p>
                    <p onClick={() => handleAddCode(createElementTemplate('paragraph'))} className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Paragraph</p>
                    <p onClick={() => handleAddCode(createElementTemplate('button'))} className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Button</p>
                </div>
            </CustomSidebarDropdown>
            <CustomSidebarDropdown name="Media">
                <div>
                    <p onClick={() => setShowIFrameModal(true)}className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">IFrame - YouTube/Map</p>
                    <p onClick={() => handleAddCode(createElementTemplate('imageGallery'))} className="pl-8 py-1 cursor-pointer hover:bg-gray-100">Image Gallery</p>
                    <p onClick={() => handleAddCode(createElementTemplate('layout_2x1_1'))} className="pl-8 py-1 cursor-pointer hover:bg-gray-100">Image + Text</p>
                </div>
            </CustomSidebarDropdown>
            <CustomSidebarDropdown name="Components">
                <div>
                    <p onClick={() => handleAddCode(createElementTemplate('navbar'))} className="pl-8 py-1 cursor-pointer hover:bg-gray-100">Navbar</p>
                    <p onClick={() => handleAddCode(createElementTemplate('heroSection'))} className="pl-8 py-1 cursor-pointer hover:bg-gray-100">Hero Section</p>
                    <p onClick={() => setShowCardsModal(true)} className="pl-8 py-1 cursor-pointer hover:bg-gray-100">Cards</p>
                </div>
            </CustomSidebarDropdown>
        </div>
        { showIFrameModal && (
            <div onClick={() => setShowIFrameModal(false)} className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
                <div onClick={e => e.stopPropagation()} className="relative top-10 mx-auto p-5 border w-[50%] shadow-lg rounded-md bg-white">
                    <form onSubmit={handleCreateIFrame} autoComplete="off" noValidate className="mt-3">
                        <div className="relative z-0 mb-6 w-full group">
                            <textarea 
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer resize-none"
                                rows={4}
                                value={IFrameElement}
                                onChange={e => setIFrameElement(e.target.value)}
                                autoFocus 
                            />
                            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">IFrame</label>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" onClick={e => e.stopPropagation()} className="bg-blue-500 hover:bg-blue-600 py-1 px-5 mr-3 rounded-md text-white">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        ) }
        { showCardsModal && (
            <div onClick={() => setShowCardsModal(false)} className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
                <div onClick={e => e.stopPropagation()} className="relative top-10 mx-auto p-5 border w-[85%] max-h-[90vh] overflow-y-scroll shadow-lg rounded-md bg-white">
                    <div className="mb-8 cursor-pointer" onClick={() => {
                        handleAddCode(createElementTemplate('pricingCards'))
                        setShowCardsModal(false)
                    }}>{parse(previews.pricingCards)}</div>
                    <div className="mb-8 cursor-pointer" onClick={() => {
                        handleAddCode(createElementTemplate('testimonialCards'))
                        setShowCardsModal(false)
                    }}>{parse(previews.testimonialCards)}</div>
                </div>
            </div>
        ) }
        { showNewBlockModal && (
            <div onClick={() => setShowNewBlockModal(false)} className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
                <div onClick={e => e.stopPropagation()} className="relative top-10 mx-auto p-5 border w-[85%] max-h-[90vh] shadow-lg rounded-md bg-white">
                    <form onSubmit={handleCreateNewBlock} autoComplete="off" noValidate className="mt-3">
                        <div className="relative z-0 mb-6 w-full group">
                            <input
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer resize-none"
                                type="text"
                                value={newBlockName}
                                onChange={e => setNewBlockName(e.target.value)}
                                autoFocus
                            />
                            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Block Name</label>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" onClick={e => e.stopPropagation()} className="bg-blue-500 hover:bg-blue-600 py-1 px-5 mr-3 rounded-md text-white">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        ) }
        </>
    )
}