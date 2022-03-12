import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import NewWebsiteForm from '../components/NewWebsiteForm'
import SingleWebsite from '../components/SingleWebsite'
import SVGIcon from '../components/SVGIcon'
import useAxios from '../hooks/useAxios'

export default function Home() {

    const axiosRequest = useAxios()
    const [showNewWebsiteForm, setShowNewWebsiteForm] = useState(false)
    const [myWebsites, setMyWebsites] = useState<IWesbite[]>([])

    const fetchMyWebsites = async () => {
        try {
            const response = await axiosRequest('/websites', 'GET')
            if (response.status !== 200) throw new Error('Could Not Fetch Websites')
            setMyWebsites(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    const handleDeleteWebsite = async (websiteName: string, websiteId: string) => {
        try {
            const response = await axiosRequest(`/websites/${websiteName}`, 'DELETE')
            if (response.status !== 204) throw new Error('Delete Failed')
            const newWebsites = myWebsites.filter(website => website._id !== websiteId)
            setMyWebsites(newWebsites)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchMyWebsites()
    }, [])

    return (
        <>
        <Navbar />
        <div className="container mx-auto">
        <div className="divide-y divide-gray-200">
            { showNewWebsiteForm ? (
                <>
                <div className="my-6">
                    <button className="flex items-center" onClick={() => setShowNewWebsiteForm(false)}>
                        <SVGIcon pathStrokeWidth={2} pathD="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        <span className="text-3xl ml-2">My Websites</span>
                    </button>
                </div>
                <NewWebsiteForm />
                </>
                ) : (
                <>
                <div className="flex justify-between my-6">
                    <h3 className="text-3xl">My Websites</h3>
                    <button onClick={() => setShowNewWebsiteForm(true)} className="bg-blue-500 hover:bg-blue-600 py-1 px-5 mr-3 rounded-md text-white">New Website</button>
                </div>
                { myWebsites.length === 0 ? (
                    <p className="text-center py-12 text-xl">You Have No Websites</p>
                ) : (
                    <div className="pt-8">
                    { myWebsites.map(website => <SingleWebsite key={website._id} website={website} handleDeleteWebsite={handleDeleteWebsite} />)}
                    </div>
                ) }
                </>
                ) }
            </div>
        </div>
        </>
    )
}