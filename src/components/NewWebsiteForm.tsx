import { FormEvent, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createNewWebsitesAction } from "../redux/actions/actionCreators"
import useAxios from '../hooks/useAxios'

export default function NewWebsiteForm() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const axiosRequest = useAxios()

    const [userError, setUserError] = useState(false)
    const [websiteDetails, setWebsiteDetails] = useState<IWebsiteDetails>({
        name: '',
        page1: 'Home',
        page2: '',
        page3: ''
    })

    const handleChange = (field: string, value: string) => {
        setWebsiteDetails(details => ({
            ...details,
            [field]: value,
        }))
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (!websiteDetails.name || !websiteDetails.page1) return setUserError(true)
        try {
            setUserError(false)
            const newWebsiteValues = Object.values(websiteDetails)
            newWebsiteValues.shift()
            let errorCount = 0
            newWebsiteValues.map(async website => {
                if (!website) return
                const response = await axiosRequest('/websites', 'POST', { name: websiteDetails.name, page: website, stage: 'development' })
                if (response.status === 400) {
                    errorCount++
                }
            })
            if (errorCount) {
                dispatch(createNewWebsitesAction())
                navigate(`/ws-edit/${websiteDetails.name}/home`)
            } else {
                errorCount = 0
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit} autoComplete="off" noValidate className="pt-8 flex flex-col justify-center select-none">
            <p className="text-center mb-8">You can change any of these details later and add more.</p>
             <div className="relative z-0 mb-6 w-full group">
                <input 
                    className={ userError ? "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-red-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" : "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"} 
                    type="text"
                    value={websiteDetails.name}
                    onChange={e => handleChange('name', e.target.value)}
                    autoFocus 
                    required 
                />
                <label className={userError ? "absolute text-sm text-red-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" : "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"}>Website Name *</label>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="relative z-0 mb-6 w-full group">
                    <input
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 peer" 
                        type="text"
                        value={websiteDetails.page1} 
                        required
                        disabled 
                    />
                    <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Page 1 *</label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <input
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        type="text"
                        value={websiteDetails.page2}
                        onChange={e => handleChange('page2', e.target.value)} 
                    />
                    <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Page 2</label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <input
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        type="text"
                        value={websiteDetails.page3}
                        onChange={e => handleChange('page3', e.target.value)} 
                    />
                    <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Page 3</label>
                </div>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 py-1 px-5 mr-3 rounded-md text-white capitalize">Create</button>
        </form>
    )
}