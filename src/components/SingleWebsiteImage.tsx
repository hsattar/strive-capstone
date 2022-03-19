import { useDispatch } from "react-redux"
import { v4 as uuid } from 'uuid'
import elementTemplates from "../data/templates/elementTemplates"
import { addElementsToCodeAction, setElementToEditAction } from "../redux/actions/actionCreators"

interface IProps {
    image: string
}

export default function SingleWebsiteImage({ image }: IProps) {

    const dispatch = useDispatch()
    
    const createImageTemplate = (imgSrc: string) => {
        const id = uuid()
        return [{
            id,
            ...elementTemplates.image,
            className: id,
            tag: `<img src="${imgSrc}" className="${id} hover:border-2 hover:border-blue-300 hover:cursor-grab" />`,
        }]
    }
    
    const handleAddCode = (elementsToAdd: any) => {
        const id = uuid()
        const codeObject = { id, name: elementsToAdd[0].name, code: elementsToAdd} as ICodeBlock
        dispatch(setElementToEditAction(codeObject))
        dispatch(addElementsToCodeAction(codeObject))
    }

    return (
        <img className="cursor-pointer" onClick={() => handleAddCode(createImageTemplate(image))} src={image} alt="" />
    )
}
