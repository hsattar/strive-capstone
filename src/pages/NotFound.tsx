import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="container mx-auto flex flex-col items-center">
            <p className="text-center text-4xl mt-20 mb-10">Sorry, We Couldn't Find What You Were Looking For</p>
            <Link to="/" className="text-center w-32 border border-blue-500 hover:bg-blue-500 py-1 px-5 mr-3 rounded-md text-blue-500 hover:text-white">Go Home</Link>
        </div>
    )
}