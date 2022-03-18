import { v4 as uuid} from 'uuid'
import { useDispatch } from 'react-redux'
import { addElementsToCodeAction, setElementToEditAction } from "../redux/actions/actionCreators"
import elementTemplates from '../data/elementTemplates'
import useAxios from '../hooks/useAxios'

interface IProps {
    image: IUnsplashResult
}

// Photo by <a href="https://unsplash.com/@anniespratt?utm_source=your_app_name&utm_medium=referral">Annie Spratt</a> on <a href="https://unsplash.com/?utm_source=your_app_name&utm_medium=referral">Unsplash</a>
// /images/unsplash/downloadImage

export default function SingleUnsplashImage({ image }: IProps) {

    const dispatch = useDispatch()
    const axiosRequest = useAxios()

    const downloadImage =  async (imgSrc: string, photoBy: string, photoByLink: string, downloadUrl: string) => {
        try {
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
        console.log(elementsToAdd)
        console.log(elementsToAdd[0])
        const codeObject = { id, name: elementsToAdd[0].name, code: elementsToAdd} as ICodeBlock
        dispatch(setElementToEditAction(codeObject))
        dispatch(addElementsToCodeAction(codeObject))
    }

    return (
        <img onClick={() => (downloadImage(image.urls.regular, image.user.name, image.user.links.html, image.links.download_location))} className="cursor-pointer" src={image.urls.thumb} alt={image.alt_description} />
    )
}
