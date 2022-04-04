import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import useAxios from "../hooks/useAxios"
import { addOrRemoveElementLinkAction, createNewCode, updateCodeAndCodeBlocksAction } from "../redux/actions/actionCreators"
import CustomSelectDropdown from "./reusable/CustomSelectDropdown"

interface IProps {
    block: IElement
    index: number
    pages: string[]
    changesMade: boolean
    setChangesMade: Dispatch<SetStateAction<boolean>>
}

export default function ContainerElement({ block, index, pages, changesMade, setChangesMade }: IProps) {

    const dispatch = useDispatch()
    const axiosRequest = useAxios()
    const { websiteName } = useParams()
    const elementToEdit = useSelector((state: IReduxStore) => state.misc.elementToEdit)
    const codeBlocks = useSelector((state: IReduxStore) => state.website.present.codeBlocks)

    const [showEditOptions, setShowEditOptions] = useState(false)

    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    
    const [elementToEditText, setElementToEditText] = useState<string | undefined>('')
    const [elementToEditImage, setElementToEditImage] = useState<string | undefined>('')

    const [linkTo, setLinkTo] = useState('')
    const [pageSelected, setPageSelected] = useState(pages[0])
    const [linkType, setLinkType] = useState('Link - Internal')
    const linkTypeOptions = ['Link - Internal', 'Link - External']
    const [elementLinked, setElementLinked] = useState(false)

    const [editImageModal, setEditImageModal] = useState(false)
    const [websiteImages, setWebsiteImages] = useState<string[]>([])

    const handleSave = () => {
        let newText = elementToEditText
        if (elementLinked) {
            if (linkType === 'Link - Internal') {
                console.log('internal')
                newText = `<a href="/ws/test/${pageSelected}">  ${elementToEditText}  </a>`
            } else {
                newText = `<a href="/ws/test/${linkTo}" target="_blank">  ${elementToEditText}  </a>`
            }
        } 

        elementToEdit!.code[index].text = newText
        const updatedCodeBlocks = codeBlocks.map(block => block.id === elementToEdit!.id ? elementToEdit : block) as ICodeBlock[]
        const flatBlocks = updatedCodeBlocks.map(block => block!.code).flat()
        const updatedCode = createNewCode(flatBlocks)
        dispatch(updateCodeAndCodeBlocksAction(updatedCode, updatedCodeBlocks))

        setChangesMade(false)
        setShowEditOptions(false)
    }

    const fetchWebsiteImages = async () => {
        try {
            const response = await axiosRequest(`/images/${websiteName}/images`, 'GET')
            if (response.status === 200) {
                setWebsiteImages(response.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const linkChange = (add: boolean) => {
        const highlighted = window.getSelection()?.toString()
        setElementLinked(prev => !prev)
        if (!add) return dispatch(addOrRemoveElementLinkAction('', '', ''))
        if (linkType === 'Link - Internal') {
            if (highlighted) {
                dispatch(addOrRemoveElementLinkAction(linkType, pageSelected, highlighted))
            } else {
                dispatch(addOrRemoveElementLinkAction(linkType, pageSelected, ''))
            }
        } else {
            if (highlighted) {
                dispatch(addOrRemoveElementLinkAction(linkType, linkTo, highlighted))
            } else {
                dispatch(addOrRemoveElementLinkAction(linkType, linkTo, ''))
            }

        }
        !changesMade && setChangesMade(true)
    }

    const handleImageChange = (block: any, image: string) => {
        if (!elementToEdit) return
        const newImage = `<img src="${image}" className="${block.className}" />`
        const newElement = {...elementToEdit}
        newElement.code[index].tag = newImage
        const updatedCodeBlocks = codeBlocks.map(block => block.id === elementToEdit.id ? newElement : block)
        const flatBlocks = updatedCodeBlocks.map(block => block.code).flat()
        const updatedCode = createNewCode(flatBlocks)
        dispatch(updateCodeAndCodeBlocksAction(updatedCode, updatedCodeBlocks))
    }

    useEffect(() => {
        fetchWebsiteImages()
    }, [])

    useEffect(() => {
        if (block.text) {
            if (block.text?.startsWith('<a href')) {
                setElementLinked(true)
                const splitText = block.text.split('  ')
                setElementToEditText(splitText[1])
            } else {
                setElementLinked(false)
                setElementToEditText(block.text)
            }
        } else if (block.tag?.startsWith(`<img`)) {
            setElementToEditImage(block.tag)
        }
    }, [block])

    if (block.text?.includes('  undefined  ')) return <></>

    if (block.text) {
        return (
            <>
            <p onClick={() => setShowEditOptions(true)} className="my-2 cursor-pointer">{elementToEditText}</p>
            { showEditOptions && (
            <>
            <textarea
                autoFocus
                rows={6}
                ref={textAreaRef}
                onClick={e => e.stopPropagation()}
                value={elementToEditText}
                onChange={e => {
                    setElementToEditText(e.target.value)
                    !changesMade && setChangesMade(true)
                }}
                className="w-full p-2 mb-2 resize-none border-2 rounded outline-none"
            /> 
            <div className="flex items-center">
                <CustomSelectDropdown 
                    containerClass="w-[150px] relative z-50"
                    initialValue={linkType}
                    listOfValues={linkTypeOptions}
                    onClick={value => setLinkType(value)}
                />
                { linkType === 'Link - Internal' ? (
                    <CustomSelectDropdown 
                        containerClass="w-[150px] relative z-50 ml-4"
                        initialValue={pageSelected}
                        listOfValues={pages}
                        onClick={value => setPageSelected(value)}
                    />  
                    ) : (
                        <input 
                            type="url" 
                            placeholder="URL" 
                            value={linkTo}
                            onChange={e => setLinkTo(e.target.value)}
                            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:border focus:outline-none ml-4 w-[50%] block py-1.5 px-2.5" 
                        />
                    ) }
                    <div className="ml-4">
                        { !elementLinked ? (
                            <button onClick={() => linkChange(true)} className="border-green-500 border hover:bg-green-500 py-1 px-5 mr-3 rounded-md text-green-500 hover:text-white">Add</button>
                        ) : (   
                            <button onClick={() => linkChange(false)} className="border-red-500 border hover:bg-red-500 py-1 px-5 mr-3 rounded-md text-red-500 hover:text-white">Remove</button>
                        ) }
                    </div>
                    </div>
                    <div className="flex justify-end mt-4">
                        <button onClick={e => {
                            e.stopPropagation()
                            handleSave()
                        }} className={`bg-green-500 hover:bg-green-600 py-1 px-5 mr-3 rounded-md text-white`}>Save</button>
                    </div>
                </>
                ) }
            </>
        )
    } else if (block.tag?.startsWith(`<img`)) {
        return (
            <>
                <p onClick={() => setEditImageModal(true)} className="my-2 cursor-pointer">{elementToEditImage}</p>
                { editImageModal && (
                    <>
                    { websiteImages.length === 0 ? (
                        <p className="text-center text-gray-400 my-4">You Have No Images Uploaded</p>
                    ) : (
                        <div className="grid grid-cols-4 justify-items-center gap-3 p-3">
                        { websiteImages.map(image => <img key={image} className="cursor-pointer" onClick={() => handleImageChange(block, image)} src={image} alt="" />) }
                        </div>
                    ) }
                    <div className="flex justify-end mt-4">
                        <button onClick={e => {
                            e.stopPropagation()
                            setEditImageModal(false)
                        }} className={`bg-blue-500 hover:bg-blue-600 py-1 px-5 mr-3 rounded-md text-white`}>Close</button>
                    </div>
                    </>
                ) }
            </>
        )
    } else return <></>
}