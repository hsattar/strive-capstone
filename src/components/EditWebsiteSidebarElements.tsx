import { useSelector, useDispatch } from 'react-redux'
import { addElementsToCodeAction, setElementToEditAction } from '../redux/actions/actionCreators'
import CustomDropdown from "./CustomDropdown"
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
            const response = await axiosRequest('/images/upload-image', 'POST', formData)
            if (response.status === 201) {
                // handleAddCode(createImageTemplate(response.data || ''))
            }
        } catch (error) {
            console.log(error)
        }
    }

    const createElementTemplate = (template: elementTemplateOptions) => {
        const id = uuid()
        return elementTemplates[template].map(block => ({ id, ...block }))
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

    const handleAddCode = (elementsToAdd: any) => {
        const id = uuid()
        const codeObject = { id, name: elementsToAdd[0].name, code: elementsToAdd} as ICodeBlock
        dispatch(setElementToEditAction(elementsToAdd[0]))
        dispatch(addElementsToCodeAction(codeObject))
    }

    return (
        <div className="select-none">
            <CustomDropdown name="Text">
                <div>
                    <p onClick={() => handleAddCode(createElementTemplate('heading'))} className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Heading</p>
                    <p onClick={() => handleAddCode(createElementTemplate('paragraph'))} className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Paragraph</p>
                    <p onClick={() => handleAddCode(createElementTemplate('list'))} className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100"> List</p>
                </div>
            </CustomDropdown>
            <CustomDropdown name="Media">
                <div>
                    <label htmlFor="imageUpload" className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100 w-full">Image</label>
                    <input type="file" id="imageUpload" hidden onChange={e => handleImageUpload(e.target.files![0])} />
                    <p className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Video</p>
                    <p className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">YouTube</p>
                </div>
            </CustomDropdown>
            <CustomDropdown name="Other">
                <div>
                    <p onClick={() => handleAddCode(createElementTemplate('button'))} className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Button</p>
                    <p onClick={() => handleAddCode(createElementTemplate('youTube'))} className="capitalize pl-8 py-1 cursor-pointer hover:bg-gray-100">Dropdown</p>
                </div>
            </CustomDropdown>
        </div>
    )
}