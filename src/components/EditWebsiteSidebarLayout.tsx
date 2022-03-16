import { v4 as uuid } from 'uuid'
import { useDispatch } from 'react-redux'
import CustomDropdown from "./CustomDropdown"
import containerTemplates from '../data/containerTemplates'

export default function EditWebsiteSidebarLayout() {

    const dispatch = useDispatch()

    const createContainerTemplate = (template: layoutTemplateOptions) => {
        const id = uuid()
        return {
            id,
            ...containerTemplates[template],
            class: `${containerTemplates[template].class} ${id}`,
        }
    }

    const handleAddLayout = (container: IElement) => {
    }

    return (
        <div className="select-none overflow-y-scroll">
            <CustomDropdown name="Grid - Container">
                <div className="grid grid-cols-2 justify-items-center p-3">
                    <img src="/assets/container.jpg" className="h-16 hover:border-2 hover:cursor-pointer p-2" alt="container" />
                    <img onClick={() => {}} src="/assets/flex.jpg" className="h-16 hover:border-2 hover:cursor-pointer p-2" alt="flex" />
                </div>
            </CustomDropdown>
            <CustomDropdown name="Grid - Simple">
                <div className="grid grid-cols-2 justify-center gap-3 p-3">
                    <img src="/assets/2x1.jpg" className="h-16 hover:border-2 hover:cursor-pointer p-2" alt="2x1" />
                    <img src="/assets/3x1.jpg" className="h-16 hover:border-2 hover:cursor-pointer p-2" alt="3x1" />
                    <img src="/assets/1x2.jpg" className="h-16 hover:border-2 hover:cursor-pointer p-2" alt="1x2" />
                    <img src="/assets/1x3.jpg" className="h-16 hover:border-2 hover:cursor-pointer p-2" alt="1x3" />
                    <img src="/assets/2x2.jpg" className="h-16 hover:border-2 hover:cursor-pointer p-2" alt="2x2" />
                    <img src="/assets/3x3.jpg" className="h-16 hover:border-2 hover:cursor-pointer p-2" alt="3x3" />
                </div>
            </CustomDropdown>
            <CustomDropdown name="Grid - Advanced">
                <div className="grid grid-cols-2 justify-center gap-3 p-3">
                    <img src="/assets/1-1x2.jpg" className="h-16 hover:border-2 hover:cursor-pointer p-2" alt="1-1x2" />
                    <img src="/assets/1x2-1.jpg" className="h-16 hover:border-2 hover:cursor-pointer p-2" alt="1x2-1" />
                    <img src="/assets/1x2-1x3.jpg" className="h-16 hover:border-2 hover:cursor-pointer p-2" alt="1x2-1x3" />
                    <img src="/assets/1x3-1x2.jpg" className="h-16 hover:border-2 hover:cursor-pointer p-2" alt="1x3-1x2" />
                </div>
            </CustomDropdown>
            <CustomDropdown name="Grid - Custom">
                <div>
                    <p className="capitalize pl-8 py-1">Number Of Rows</p>
                    <p className="capitalize pl-8 py-1">Number Of Columns</p>
                    <p className="capitalize pl-8 py-1">Generate</p>
                </div>
            </CustomDropdown>
        </div>
    )
}