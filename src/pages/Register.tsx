import { ChangeEvent, FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userLogsInAction } from '../redux/actions/actionCreators'

export default function Register() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [registrationError, setRegistrationError] = useState(false)
    const [userError, setUserError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [userDetails, setUserDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const handleChange = (field: string, value: string) => {
        setUserDetails(details => ({
            ...details,
            [field]: value
        }))
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        if (!userDetails.firstName || !userDetails.lastName || !userDetails.email || !userDetails.password) return setUserError(true)
        dispatch(userLogsInAction())
        navigate('/')
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
            <div className="p-10 xs:p-0 mx-auto sm:w-full sm:min-w-xl sm:max-w-4xl">
                <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                <div className="px-5 py-7">
                <h1 className="font-bold text-center text-2xl mb-5">Coding Buddy</h1>  
                    <form onSubmit={handleSubmit} autoComplete="off" noValidate>
                    <div className="grid grid-cols-2 gap-x-10">
                        <div>
                            <label className="font-semibold text-sm text-gray-600 pb-1 block">First Name</label>
                            <input
                                type="text"
                                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                                required
                                value={userDetails.firstName}
                                onChange={e => handleChange('firstName', e.target.value)}    
                            />
                        </div>
                        <div>
                            <label className="font-semibold text-sm text-gray-600 pb-1 block">Last Name</label>
                            <input
                                type="text"
                                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                                required
                                value={userDetails.lastName}
                                onChange={e => handleChange('lastName', e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
                            <input
                                type="email"
                                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                                required
                                value={userDetails.email}
                                onChange={e => handleChange('email', e.target.value)}    
                            />
                        </div>
                        <div>
                            <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
                            <input
                                type="password"
                                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                                required
                                value={userDetails.password}
                                onChange={e => handleChange('password', e.target.value)}
                            />
                        </div>
                    </div>
                    <button type="submit" className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                        <span className="inline-block mr-2">Register</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                    </form>
                </div>
                <div className="p-5">
                    <Link to="/login" className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">Login</Link>
                </div>
                </div>
            </div>
        </div>
    )
}