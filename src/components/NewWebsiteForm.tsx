import { FormEvent, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createNewWebsitesAction } from "../redux/actions/actionCreators"

export default function NewWebsiteForm() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

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

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (!websiteDetails.name || !websiteDetails.page1) return setUserError(true)
        dispatch(createNewWebsitesAction())
        navigate(`/ws-edit/${websiteDetails.name}/${websiteDetails.page1}`)
    }

    return (
        <form onSubmit={handleSubmit} autoComplete="off" noValidate className="pt-8 flex flex-col justify-center">
            <p className="text-center mb-8">You can change any of these details later and add more.</p>
             <div className="relative z-0 mb-6 w-full group">
                <input 
                    className={ userError ? "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-red-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" : "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"} 
                    type="text"
                    value={websiteDetails.name}
                    onChange={e => handleChange('name', e.target.value)} 
                    required 
                />
                <label className={userError ? "absolute text-sm text-red-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" : "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"}>Website Name *</label>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="relative z-0 mb-6 w-full group">
                    <input
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        type="text"
                        value={websiteDetails.page1}
                        onChange={e => handleChange('page1', e.target.value)} 
                        required 
                    />
                    <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Page 1 *</label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <input
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        type="text"
                        value={websiteDetails.page2}
                        onChange={e => handleChange('page2', e.target.value)} 
                        required 
                    />
                    <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Page 2</label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <input
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        type="text"
                        value={websiteDetails.page3}
                        onChange={e => handleChange('page3', e.target.value)} 
                        required 
                    />
                    <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Page 3</label>
                </div>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 py-1 px-5 mr-3 rounded-md text-white capitalize">Create</button>
        </form>
    )
}