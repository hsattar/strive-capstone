import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {

    const navigate = useNavigate()

    const [showUserMenu, setShowUserMenu] = useState(false)

    const handleLogout = () => {
        navigate('/login')
    }

    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
            <Link to="/" className="flex"><span className="self-center text-lg font-semibold whitespace-nowrap">Coding Buddy</span></Link>
            <div className="flex items-center">
                <button onClick={() => setShowUserMenu(prev => !prev)} className="flex mr-3 text-sm rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300">
                    <img className="w-8 h-8 rounded-full" src="" alt="" />
                </button>
            </div>
            </div>
            <div className={`${!showUserMenu && 'hidden'} z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow`}>
                <div className="py-3 px-4">
                <span className="block text-sm text-gray-900">Hasan Sattar</span>
                <span className="block text-sm font-medium text-gray-500 truncate">hasan@sattar.com</span>
                </div>
                <ul className="py-1" aria-labelledby="dropdown">
                <li><Link to="/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Dashboard</Link></li>
                <li><Link to="/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Settings</Link></li>
                <li><button onClick={handleLogout} className="block w-full text-left py-2 px-4 text-sm text-red-400 hover:bg-gray-100">Logout</button></li>
                </ul>
            </div>
        </nav>
    )
}