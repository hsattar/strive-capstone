import { FormEvent, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SingleWebsite from '../components/SingleWebsite'
import useAxios from '../hooks/useAxios'

export default function Home() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const axiosRequest = useAxios()

    const [showNewWebsiteModal, setShowNewWebsiteModal] = useState(false)
    const [myWebsites, setMyWebsites] = useState<IWesbite[]>([])
    const [websiteName, setWebsiteName] = useState('')
    const [userError, setUserError] = useState(false)

    const fetchMyWebsites = async () => {
        try {
            const response = await axiosRequest('/websites', 'GET')
            if (response.status === 200) {
                setMyWebsites(response.data)
            }
        } catch (error) {
            console.error(error)
        }
    }

    const handleDeleteWebsite = async (websiteName: string, websiteId: string) => {
        try {
            const response = await axiosRequest(`/websites/${websiteName}`, 'DELETE')
            if (response.status === 204) {
                const newWebsites = myWebsites.filter(website => website._id !== websiteId)
                setMyWebsites(newWebsites)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (!websiteName) return setUserError(true)
        const webName = websiteName.toLowerCase()
        try {
            const response = await axiosRequest('/websites', 'POST', { name: webName, page: 'home', stage: 'development' })
            if (response.status === 201) {
                // dispatch(createNewWebsitesAction())
                navigate(`/ws-edit/${webName}/home`)
            } else {
                setUserError(true)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchMyWebsites()
    }, [])

    return (
        <>
        <Helmet>
            <title>{`Code Buddy - ${showNewWebsiteModal ? 'New Website' : 'Home'}`}</title>
        </Helmet>
        <Navbar />
        <div className="container mx-auto">
            <div className="divide-y divide-gray-200">
                <div className="flex justify-between my-6">
                    <h3 className="text-3xl">My Websites</h3>
                    <button onClick={() => setShowNewWebsiteModal(true)} className="bg-blue-500 hover:bg-blue-600 py-1 px-5 mr-3 rounded-md text-white">New Website</button>
                </div>
                { myWebsites.length === 0 ? (
                    <p className="text-center py-12 text-xl">You Have No Websites</p>
                ) : (
                    <div className="grid grid-cols-3 gap-6">
                        { myWebsites.map(website => <SingleWebsite key={website._id} website={website} handleDeleteWebsite={handleDeleteWebsite} />)}
                    </div>
                ) }
            </div>
        </div>
        { showNewWebsiteModal && (
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
        ) }
        </>
    )
}