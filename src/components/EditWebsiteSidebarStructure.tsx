import { Dispatch, SetStateAction } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setElementToEditAction } from "../redux/actions/actionCreators"

interface IProps {
    setSidebarTab: Dispatch<SetStateAction<string>>
}

export default function EditWebsiteSidebarStructure({ setSidebarTab }: IProps) {

    const dispatch = useDispatch()
    const structure = useSelector((state: IReduxStore) => state.website.structure)
    const elementToEdit = useSelector((state: IReduxStore) => state.website.elementToEdit)

    const handleElementToEditChange = (element: IElement) => {
        dispatch(setElementToEditAction(element))
        setSidebarTab('styles')
    }

    return (
        <div className="select-none flex flex-col items-center">
            <p className="pt-2 text-center font-semibold">{`Selected - ${elementToEdit?.openingTag}`}</p>
            { structure.map(element => <p key={element.id} onDoubleClick={() => handleElementToEditChange(element)}className="pt-2 text-center">{element.openingTag}</p>) }
        </div>
    )
}