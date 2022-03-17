import { useDispatch } from "react-redux"
import { v4 as uuid } from 'uuid'
import elementTemplates from "../data/elementTemplates"
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
            tag: `<img src="${imgSrc}" className="${id}" />`,
        }]
    }
    
    const handleAddCode = (elementsToAdd: any) => {
        const id = uuid()
        const codeObject = { id, name: elementsToAdd[0].name, code: elementsToAdd} as ICodeBlock
        dispatch(setElementToEditAction(elementsToAdd[0]))
        dispatch(addElementsToCodeAction(codeObject))
    }

    return (
        <img className="cursor-pointer" onClick={() => handleAddCode(createImageTemplate(image))} src={image} alt="" />
    )
}
