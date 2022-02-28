import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userLogsOutAction } from '../redux/actions/actionCreators'

export default function Navbar() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [showUserMenu, setShowUserMenu] = useState(false)

    const handleLogout = () => {
        dispatch(userLogsOutAction())
        navigate('/login')
    }

    return (
        <div className="relative">
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-3 rounded shadow-md">
            <div className="flex flex-wrap justify-between items-center mx-auto">
            <Link to="/" className="flex"><span className="self-center text-lg font-semibold whitespace-nowrap">Coding Buddy</span></Link>
            <div className="flex items-center">
                <button onClick={() => setShowUserMenu(prev => !prev)} className="flex mr-3 text-sm rounded-full md:mr-0">
                {/* <button onClick={() => setShowUserMenu(prev => !prev)} onBlur={() => setShowUserMenu(false)} className="flex mr-3 text-sm rounded-full md:mr-0"> */}
                    <img className="w-8 h-8 rounded-full" src="https://ui-avatars.com/api/?name=Hasan+Sattar" alt="" />
                </button>
            </div>
            </div>
        </nav>
        <div className="absolute right-3">
            <div className={`${!showUserMenu && 'hidden'} z-50 my-1 text-base list-none bg-white rounded divide-y divide-gray-100 shadow-md w-40`}>
                <div className="py-3 px-4">
                <span className="block text-sm text-gray-900">Hasan Sattar</span>
                <span className="block text-sm font-medium text-gray-500 truncate mt-1">hasan@sattar.com</span>
                </div>
                <ul className="py-1">
                <li>
                    <Link to="/" className="flex py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="ml-2">Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="flex py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="ml-2">Settings</span>
                    </Link>
                </li>
                <li>
                    <button onClick={handleLogout} className="flex w-full text-left py-2 px-4 text-sm text-red-400 hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span className="ml-2">Logout</span>
                    </button>
                </li>
                </ul>
            </div>
        </div>
        </div>
    )
}