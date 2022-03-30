import { useSelector, useDispatch } from 'react-redux'
import { addElementsToCodeAction, setElementToEditAction } from '../../redux/actions/actionCreators'
import CustomSidebarDropdown from "../reusable/CustomSidebarDropdown"
import { v4 as uuid } from 'uuid'
import blockTemplates from '../../data/templates/blockTemplates'
import useAxios from '../../hooks/useAxios'
import { useState } from 'react'

export default function EditWebsiteSidebarElements() {

    const dispatch = useDispatch()
    const originalCode = useSelector((state: IReduxStore) => state.website.present.code)
    const axiosRequest = useAxios()

    const [showIFrameModal, setShowIFrameModal] = useState(false)
    const [IFrameElement, setIFrameElement] = useState('')

    const createElementTemplate = (template: blockTemplateOptions) => {
        const test = blockTemplates[template].map(block => {
            const id = uuid()
            return { id, ...block }
        })
        console.log(test)
        return test
    }

    const handleAddCode = (elementsToAdd: any) => {
        const id = uuid()
        const codeObject = { id, name: elementsToAdd[0].name, type: elementsToAdd[0].type, code: elementsToAdd} as ICodeBlock
        dispatch(setElementToEditAction(codeObject))
        dispatch(addElementsToCodeAction(codeObject))
    }

    const handleCreateIFrame = () => {
        const elementsToAdd = [{ name: 'youtube video', type: 'iframe', tag: `<div className="flex justify-center hover:border-2 hover:border-blue-300 hover:cursor-grab">${IFrameElement}</div>` }]
        handleAddCode(elementsToAdd)
        setIFrameElement('')
        setShowIFrameModal(false)
    }

    return (
        <>
        <div className="select-none">
            <CustomSidebarDropdown name="Text">
                <div>
                    <p onClick={() => handleAddCode(createElementTemplate('heading'))} className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Heading</p>
                    <p onClick={() => handleAddCode(createElementTemplate('paragraph'))} className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Paragraph</p>
                </div>
            </CustomSidebarDropdown>
            <CustomSidebarDropdown name="Media">
                <div>
                    <p onClick={() => setShowIFrameModal(true)}className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">YouTube</p>
                    <p className="pl-8 py-1 cursor-pointer hover:bg-gray-100">Carousel</p>
                </div>
            </CustomSidebarDropdown>
            <CustomSidebarDropdown name="Components">
                <div>
                    <p onClick={() => handleAddCode(createElementTemplate('button'))} className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Button</p>
                    <p onClick={() => handleAddCode(createElementTemplate('navbar'))} className="pl-8 py-1 cursor-pointer hover:bg-gray-100">Navbar</p>
                    <p className="pl-8 py-1 cursor-pointer hover:bg-gray-100">Hero Section</p>
                    <p className="pl-8 py-1 cursor-pointer hover:bg-gray-100">Accordian</p>
                    <p className="pl-8 py-1 cursor-pointer hover:bg-gray-100">Form</p>
                    <p className="pl-8 py-1 cursor-pointer hover:bg-gray-100">Cards</p>
                    <p className="pl-8 py-1 cursor-pointer hover:bg-gray-100">Modal</p>
                </div>
            </CustomSidebarDropdown>
            <CustomSidebarDropdown 
                name="Custom Blocks" 
                iconClassName="h-5 w-5 text-green-500 mr-2" 
                iconPath="M12 4v16m8-8H4" 
                iconStrokeWidth={2}
                // onClick={handleSelectImage}
            >
                <>
                    <p className="text-center text-gray-400 my-4">You Have No Custom Blocks</p>
                </>
            </CustomSidebarDropdown>
        </div>
        { showIFrameModal && (
            <div onClick={() => setShowIFrameModal(false)} className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
                <div onClick={e => e.stopPropagation()} className="relative top-20 mx-auto p-5 border w-[50%] shadow-lg rounded-md bg-white">
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
        </>
    )
}