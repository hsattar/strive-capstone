import { useDispatch, useSelector } from "react-redux"
import { setElementToEditAction } from "../redux/actions/actionCreators"

export default function EditWebsiteSidebarStructure() {

    const dispatch = useDispatch()
    const structure = useSelector((state: IReduxStore) => state.website.structure)
    const elementToEdit = useSelector((state: IReduxStore) => state.website.elementToEdit)

    return (
        <div className="select-none flex flex-col items-center">
            <p className="pt-2 text-center font-semibold">{`Selected - ${elementToEdit?.openingTag}`}</p>
            { structure.map(element => <p key={element.id} onDoubleClick={() => dispatch(setElementToEditAction(element))}className="pt-2 text-center">{element.openingTag}</p>) }
        </div>
    )
}