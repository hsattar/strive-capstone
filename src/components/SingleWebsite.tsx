import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useAxios from '../hooks/useAxios'
import SVGIcon from './reusable/CustomSVGIcon'

interface IProps {
    website: IWesbite
    handleDeleteWebsite: (websiteName: string, websiteId: string) => void
}

export default function SingleWebsite({ website, handleDeleteWebsite }: IProps) {

    const axiosRequest = useAxios()
    const [imageSrc, setImageSrc] = useState('')
    const [showDeleteModal, setShowDeleteModal] = useState(false)

    const fetchImagePreview = async () => {
        try {
            const response = await axiosRequest(`/websites/thumbnail/${website.name}`, 'GET')
            if (response.status === 200) {
                setImageSrc(response.data.url)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchImagePreview()
    }, [])

    return (
        <>
        <div className="flex flex-col py-6">
            { imageSrc ? ( 
                <img src={imageSrc} alt="" /> 
            ) : (
                <div className="h-[180px] w-[320px] bg-gray-100"></div>
            ) }
            <div className="flex justify-between items-center mt-2">
            <a href={`/ws-preview/${website.name}/home`} target="_blank" className="text-xl">{website.name}</a>
                <div className="flex">
                    <Link to={`/ws-edit/${website.name}/home`} className="mr-3 select-none">
                        <SVGIcon svgClassName="h-5 w-5 text-green-500" pathD="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </Link>
                    <button onClick={() => handleDeleteWebsite(website.name, website._id)} className="mr-1 select-none">
                        <SVGIcon svgClassName="h-5 w-5 text-red-500" pathD="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </button>
                </div>
            </div>
        </div>
        {/* { showDeleteModal && (
        <div onClick={() => setShowNewWebsiteModal(false)} className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div onClick={e => e.stopPropagation()} className="relative top-10 mx-auto p-5 border w-[50%] shadow-lg rounded-md bg-white">
                <form onSubmit={handleSubmit} autoComplete="off" noValidate className="mt-3">
                    <div className="relative z-0 mb-6 w-full group">
                        <input 
                            className={ userError ? "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-red-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" : "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"} 
                            type="text"
                            value={websiteName}
                            onChange={e => setWebsiteName(e.target.value)}
                            autoFocus 
                            required 
                        />
                        <label className={userError ? "absolute text-sm text-red-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" : "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"}>Website Name</label>
                    </div>
                    <div className="flex justify-center">
                    <button type="submit" onClick={e => e.stopPropagation()} className="bg-blue-500 hover:bg-blue-600 py-1 px-5 mr-3 rounded-md text-white">Create</button>
                    </div>
                </form>
            </div>
        </div>
        ) } */}
        </>
    )
}