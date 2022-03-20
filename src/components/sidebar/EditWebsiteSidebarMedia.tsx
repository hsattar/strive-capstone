import { FormEvent, MouseEvent, useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import useAxios from "../../hooks/useAxios"
import CustomDropdown from "../reusable/CustomDropdown"
import SingleUnsplashImage from "../SingleUnsplashImage"
import SingleWesbiteImage from "../SingleWebsiteImage"

export default function EditWebsiteSidebarMedia() {

    const dispatch = useDispatch()
    const axiosRequest = useAxios()
    const imageUploadRef = useRef<HTMLInputElement>(null)
    const { websiteName } = useParams()

    const [unsplashQuery, setUnsplashQuery] = useState('')
    const [unsplashImages, setUnsplahImages] = useState<IUnsplashResult[]>([])
    const [websiteImages, setWebsiteImages] = useState<string[]>([])

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

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        try {
            const response = await axiosRequest(`/images/unsplash/${unsplashQuery}/1/20`, 'GET')
            if (response.status === 200) {
                setUnsplahImages(response.data.results)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleSelectImage = (e: MouseEvent) => {
        e.stopPropagation()
        if (!imageUploadRef.current) return
        imageUploadRef.current.click()
    }

    const handleImageUpload = async (image: File) => {
        try {
            const formData = new FormData()
            formData.append('image', image)
            const response = await axiosRequest(`/images/${websiteName}/upload-image`, 'POST', formData)
            if (response.status === 201) {
                setWebsiteImages(prev => ([...prev, response.data]))
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchWebsiteImages()
    }, [])

    return (
        <div className="select-none flex flex-col">
            <CustomDropdown 
                name="My Images" 
                iconClassName="h-5 w-5 text-green-500 mr-2" 
                iconPath="M12 4v16m8-8H4" 
                iconStrokeWidth={2}
                onClick={handleSelectImage}
            >
                <>
                <input type="file" ref={imageUploadRef} hidden onChange={e => handleImageUpload(e.target.files![0])} />
                { websiteImages.length === 0 ? (
                    <p className="text-center text-gray-400 my-4">You Have No Images Uploaded</p>
                ) : (
                    <div className="grid grid-cols-2 justify-center gap-3 p-3">
                    { websiteImages.map(image => <SingleWesbiteImage key={image} image={image} />) }
                    </div>
                ) }
                </>
            </CustomDropdown>
            <CustomDropdown 
                name="My Videos"
                iconClassName="h-5 w-5 text-green-500 mr-2" 
                iconPath="M12 4v16m8-8H4" 
                iconStrokeWidth={2}
                onClick={(e: MouseEvent) => e.stopPropagation()}
            >
                <>
                <p className="text-center text-gray-400 my-4">You Have No Videos Uploaded</p>
                </>
            </CustomDropdown>
            <CustomDropdown name="Unsplash Images">
                <>
                <form onSubmit={handleSubmit} autoComplete="off" noValidate className="mt-0 text-center">
                    <div className="relative z-0 mb-6 group flex justify-center">
                        <input 
                            className="block py-2.5 px-0 text-sm w-5/6 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            value={unsplashQuery}
                            onChange={e => setUnsplashQuery(e.target.value)}
                            placeholder="Search"
                            required 
                        />
                    </div>
                </form>
                <div className="grid grid-cols-2 justify-center gap-3 p-3">
                    { unsplashImages.map(image => <SingleUnsplashImage key={image.id} image={image} />) }
                </div>
                </>
            </CustomDropdown>
        </div>
    )
}