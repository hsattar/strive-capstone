import { useSelector, useDispatch } from 'react-redux'
import { addNewElement, editWebsiteCodeAction, editWebsiteStructureAction, setElementToEditAction } from '../redux/actions/actionCreators'
import EditWebsiteSidebarDropdowns from "./EditWebsiteSidebarDropdowns"
import { v4 as uuid } from 'uuid'
import elementTemplates from '../data/elementTemplates'
import useAxios from '../hooks/useAxios'

export default function EditWebsiteSidebarElements() {

    const dispatch = useDispatch()
    const originalCode = useSelector((state: IReduxStore) => state.website.code)
    const axiosRequest = useAxios()

    const handleImageUpload = async (image : File) => {
        try {
            const formData = new FormData()
            formData.append('image', image)
            const response = await axiosRequest('/websites/upload-image', 'POST', formData)
            if (response.status === 201) {
                handleAddCode(createImageTemplate(response.data || ''))
            }
        } catch (error) {
            console.log(error)
        }
    }

    const createElementTemplate = (template: elementTemplateOptions) => {
        const id = uuid()
        return {
            id,
            ...elementTemplates[template],
            class: `${elementTemplates[template].class} ${id}`,
        }
    }

    const createImageTemplate = (imgSrc: string) => {
        const id = uuid()
        return {
            id,
            ...elementTemplates.image,
            class: id,
            openingTag: `<img src=${imgSrc} class="`,
        }
    }

    const handleAddCode = (elementToAdd: IElement) => {
        dispatch(addNewElement(elementToAdd))
        dispatch(setElementToEditAction(elementToAdd))
    }

    return (
        <div className="select-none">
            <EditWebsiteSidebarDropdowns name="Text">
                <div>
                    <p onClick={() => handleAddCode(createElementTemplate('heading'))} className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Heading</p>
                    <p onClick={() => handleAddCode(createElementTemplate('paragraph'))} className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Paragraph</p>
                    <p className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100"> Ordered List</p>
                    <p className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100"> Unordered List</p>
                </div>
            </EditWebsiteSidebarDropdowns>
            <EditWebsiteSidebarDropdowns name="Media">
                <div>
                    <label htmlFor="imageUpload" className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100 w-full">Image</label>
                    <input type="file" id="imageUpload" hidden onChange={e => handleImageUpload(e.target.files![0])} />
                    <p className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Video</p>
                    <p className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">YouTube</p>
                </div>
            </EditWebsiteSidebarDropdowns>
            <EditWebsiteSidebarDropdowns name="Other">
                <div>
                    <p onClick={() => handleAddCode(createElementTemplate('button'))} className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Button</p>
                    <p onClick={() => handleAddCode(createElementTemplate('youTube'))} className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Dropdown</p>
                </div>
            </EditWebsiteSidebarDropdowns>
        </div>
    )
}