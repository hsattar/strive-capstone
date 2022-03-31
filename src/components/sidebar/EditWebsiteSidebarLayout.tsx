import { v4 as uuid } from 'uuid'
import { useDispatch } from 'react-redux'
import CustomSidebarDropdown from "../reusable/CustomSidebarDropdown"
import { addElementsToCodeAction, setElementToEditAction } from '../../redux/actions/actionCreators'

export default function EditWebsiteSidebarLayout() {

    const dispatch = useDispatch()

    const handleAddLayout = (container: any) => {
        const id = uuid()
        const codeObject = { id, name: container[0].name, type: container[0].type, code: container} as ICodeBlock
        dispatch(setElementToEditAction(codeObject))
        dispatch(addElementsToCodeAction(codeObject))
    }

    return (
        <div className="select-none overflow-y-scroll">
            <CustomSidebarDropdown name="Grid - Simple">
                <div className="grid grid-cols-2 justify-center gap-3 p-3">
                    <img src="/assets/2x1.jpg" className="h-16 hover:border-2 hover:cursor-pointer p-2" alt="2x1" />
                    <img src="/assets/3x1.jpg" className="h-16 hover:border-2 hover:cursor-pointer p-2" alt="3x1" />
                    <img src="/assets/1x2.jpg" className="h-16 hover:border-2 hover:cursor-pointer p-2" alt="1x2" />
                    <img src="/assets/1x3.jpg" className="h-16 hover:border-2 hover:cursor-pointer p-2" alt="1x3" />
                    <img src="/assets/2x2.jpg" className="h-16 hover:border-2 hover:cursor-pointer p-2" alt="2x2" />
                    <img src="/assets/3x3.jpg" className="h-16 hover:border-2 hover:cursor-pointer p-2" alt="3x3" />
                </div>
            </CustomSidebarDropdown>
            <CustomSidebarDropdown name="Grid - Advanced">
                <div className="grid grid-cols-2 justify-center gap-3 p-3">
                    <img src="/assets/1-1x2.jpg" className="h-16 hover:border-2 hover:cursor-pointer p-2" alt="1-1x2" />
                    <img src="/assets/1x2-1.jpg" className="h-16 hover:border-2 hover:cursor-pointer p-2" alt="1x2-1" />
                    <img src="/assets/1x2-1x3.jpg" className="h-16 hover:border-2 hover:cursor-pointer p-2" alt="1x2-1x3" />
                    <img src="/assets/1x3-1x2.jpg" className="h-16 hover:border-2 hover:cursor-pointer p-2" alt="1x3-1x2" />
                </div>
            </CustomSidebarDropdown>
        </div>
    )
}