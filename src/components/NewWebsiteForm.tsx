import { FormEvent, useState } from "react"
import { useNavigate } from 'react-router-dom'

export default function NewWebsiteForm() {

    const navigate = useNavigate()

    const [websiteDetails, setWebsiteDetails] = useState<IWebsiteDetails>({
        name: '',
        pages: []
    })

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        navigate(`/ws-edit/${websiteDetails.name}/home`)
    }

    return (
        <form onSubmit={handleSubmit} autoComplete="off" noValidate className="pt-12 flex flex-col justify-center">
             <div className="relative z-0 mb-6 w-full group">
                <input type="text" name="website-name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="website-name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Website Name</label>
            </div>
            <button type="submit">Create</button>
        </form>
    )
}
