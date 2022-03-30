import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import EditContainerElementModal from "./EditContainerElementModal"

interface IProps {
    block: IElement
    index: number
    pages: string[]
}

export default function ContainerElement({ block, index, pages }: IProps) {

    const dispatch = useDispatch()
    const elementToEdit = useSelector((state: IReduxStore) => state.misc.elementToEdit)
    const codeBlocks = useSelector((state: IReduxStore) => state.website.present.codeBlocks)

    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        console.log(elementToEdit!.code[index])
        setShowModal(true)
    }

    return (
        <>
        <p onClick={handleClick} className="my-2">{block.text}</p>
        { showModal && <EditContainerElementModal pages={pages} setShowModal={setShowModal} /> }
        </>
    )
}