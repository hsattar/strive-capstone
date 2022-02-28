import { useNavigate } from 'react-router-dom'

export default function Home() {

    const navigate = useNavigate()

    const handleNewWebsite = () => {
        const id = new Date().getTime()
        navigate(`/ws-edit/${id}/home`)
    }

    return (
        <div className="container mx-auto">
        <div className="divide-y divide-gray-200">
            <div className="flex justify-between my-6">
                <h3 className="text-3xl">Your Websites</h3>
                <button onClick={handleNewWebsite} className="bg-blue-500 hover:bg-blue-600 py-1 px-5 mr-3 rounded-md text-white capitalize">New Website</button>
            </div>
                <p className="text-center py-12 text-xl">You Have No Websites</p>
            </div>
        </div>
    )
}