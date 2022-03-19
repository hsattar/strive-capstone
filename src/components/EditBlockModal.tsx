import { Dispatch, FormEvent, SetStateAction, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createNewCode, updateCodeAndCodeBlocksAction } from '../redux/actions/actionCreators'

interface IProps {
    setShowEditTextModal: Dispatch<SetStateAction<boolean>>
}

export default function EditBlockModal({ setShowEditTextModal }: IProps) {

    const dispatch = useDispatch()
    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    const codeBlocks = useSelector((state: IReduxStore) => state.website.codeBlocks)
    const elementToEdit = useSelector((state: IReduxStore) => state.website.elementToEdit)
    
    const [elementToEditText, setelementToEditText] = useState<string | undefined>('')

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        switch (elementToEdit?.type) {
            case 'element':
                elementToEdit.code[1].text = elementToEditText
                const updatedCodeBlocks = codeBlocks.map(block => block.id === elementToEdit.id ? elementToEdit : block)
                const flatBlocks = updatedCodeBlocks.map(block => block.code).flat()
                const updatedCode = createNewCode(flatBlocks)
                dispatch(updateCodeAndCodeBlocksAction(updatedCode, updatedCodeBlocks))
                break
            default: return
        }
        setShowEditTextModal(false)
    }

    useEffect(() => {
        (elementToEdit && elementToEdit.type === 'element') && setelementToEditText(elementToEdit.code[1].text)
    }, [elementToEdit])

    return (
        <div onClick={() => setShowEditTextModal(false)} className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div onClick={e => e.stopPropagation()} className="relative top-20 mx-auto p-5 border w-[50%] shadow-lg rounded-md bg-white">
                <form onSubmit={handleSubmit} className="mt-3 text-center">
                    <textarea
                        autoFocus
                        rows={6}
                        ref={textAreaRef}
                        onClick={e => e.stopPropagation()}
                        value={elementToEditText}
                        onChange={e => setelementToEditText(e.target.value)}
                        className="w-full p-2 mb-2 resize-none border-2 rounded outline-none"

                    />
                    <button type="submit" onClick={e => e.stopPropagation()} className="bg-blue-500 hover:bg-blue-600 py-1 px-5 mr-3 rounded-md text-white">Save</button>
                </form>
            </div>
        </div>
    )
}
