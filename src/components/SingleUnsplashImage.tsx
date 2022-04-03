import { v4 as uuid} from 'uuid'
import { useDispatch } from 'react-redux'
import { addElementsToCodeAction, setElementToEditAction } from "../redux/actions/actionCreators"
import elementTemplates from '../data/templates/blockTemplates'
import useAxios from '../hooks/useAxios'
import { useState } from 'react'

interface IProps {
    image: IUnsplashResult
}

export default function SingleUnsplashImage({ image }: IProps) {

    const dispatch = useDispatch()
    const axiosRequest = useAxios()

    const [showImageModal, setShowImageModal] = useState(false)

    const downloadImage =  async (imgSrc: string, photoBy: string, photoByLink: string, downloadUrl: string) => {
        try {
            setShowImageModal(false)
            await axiosRequest(`/images/unsplash/downloadImage`, 'POST', { downloadUrl })
        } catch (error) {
            console.log(error)
        }
        handleAddCode(createUnsplashImageTemplate(imgSrc, photoBy, photoByLink))
    } 
    
    const createUnsplashImageTemplate = (imgSrc: string, photoBy: string, photoByLink: string) => {
        const id = uuid()
        const unsplashImageTemplate = [...elementTemplates.unsplashImage]
        unsplashImageTemplate[1].tag = `<img src="${imgSrc}" className="" />`
        unsplashImageTemplate[4].tag = `<a href="${photoByLink}?utm_source=code_buddy&utm_medium=referral" className="underline" target="_blank">`
        unsplashImageTemplate[5].text = photoBy
        return unsplashImageTemplate.map(block => ({ id, ...block }))
    }
    
    const handleAddCode = (elementsToAdd: any) => {
        const id = uuid()
        const codeObject = { id, name: elementsToAdd[0].name, code: elementsToAdd} as ICodeBlock
        dispatch(setElementToEditAction(codeObject))
        dispatch(addElementsToCodeAction(codeObject))
    }

    return (
        <>
        <img onClick={() => setShowImageModal(true)} className="cursor-pointer" src={image.urls.thumb} alt={image.alt_description} />
        { showImageModal && (
            <>
            <div onClick={() => setShowImageModal(false)} className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
                <div onClick={e => e.stopPropagation()} className="relative top-10 mx-auto p-5 border w-[75%] shadow-lg rounded-md bg-white max-h-[90vh] overflow-y-scroll z-50">
                    <div className="flex flex-col items-center">
                    <img onClick={() => (downloadImage(image.urls.thumb, image.user.name, image.user.links.html, image.links.download_location))} className="cursor-pointer my-2" src={image.urls.thumb} alt={image.alt_description} />
                    <img onClick={() => (downloadImage(image.urls.small, image.user.name, image.user.links.html, image.links.download_location))} className="cursor-pointer my-2" src={image.urls.small} alt={image.alt_description} />
                    <img onClick={() => (downloadImage(image.urls.regular, image.user.name, image.user.links.html, image.links.download_location))} className="cursor-pointer my-2" src={image.urls.regular} alt={image.alt_description} />
                    </div>
                </div>
            </div>
            </>
        ) }
        </>
    )
}
