import { useState } from 'react'
import Navbar from '../components/Navbar'
import NewWebsiteForm from '../components/NewWebsiteForm'
import SVGIcon from '../components/SVGIcon'

export default function Home() {

    const [showNewWebsiteForm, setShowNewWebsiteForm] = useState(false)

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
                <p className="text-center py-12 text-xl">You Have No Websites</p>
                </>
                ) }
            </div>
        </div>
        </>
    )
}