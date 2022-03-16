import { FormEvent, useState } from "react"
import { useDispatch } from "react-redux"
import useAxios from "../hooks/useAxios"
import CustomDropdown from "./CustomDropdown"
import SingleUnsplashImage from "./SingleUnsplashImage"

export default function EditWebsiteSidebarMedia() {

    const dispatch = useDispatch()
    const axiosRequest = useAxios()

    const [unsplashQuery, setUnsplashQuery] = useState('')
    const [unsplashImages, setUnsplahImages] = useState<IUnsplashResult[]>([])

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

    return (
        <div className="select-none flex flex-col">
            <CustomDropdown 
                name="My Images" 
                iconClassName="h-5 w-5 text-green-500 mr-2" 
                iconPath="M12 4v16m8-8H4" 
                iconStrokeWidth={2}
                onClick={(e: any) => e.stopPropagation()}
            >
                <>
                <p className="text-center text-gray-400 my-4">You Have No Images Uploaded</p>
                </>
            </CustomDropdown>
            <CustomDropdown 
                name="My Videos"
                iconClassName="h-5 w-5 text-green-500 mr-2" 
                iconPath="M12 4v16m8-8H4" 
                iconStrokeWidth={2}
                onClick={(e: any) => e.stopPropagation()}
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
                            type="text"
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