import { ChangeEvent, FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userLogsInAction } from '../redux/actions/actionCreators'
import SVGIcon from '../components/reusable/CustomSVGIcon'
import useAxios from '../hooks/useAxios'
import { Helmet } from 'react-helmet-async'

export default function Register() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const axiosRequest = useAxios()

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

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (!userDetails.firstName || !userDetails.lastName || !userDetails.email || !userDetails.password) return setUserError(true)
        try {
            const response = await axiosRequest('users/register', 'POST', userDetails)
            if (response.status === 201) {
                dispatch(userLogsInAction())
                navigate('/')
            } 
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
        <Helmet>
            <title>Code Buddy - Register</title>
        </Helmet>
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
            <div className="p-10 xs:p-0 mx-auto sm:w-full sm:min-w-xl sm:max-w-4xl">
                <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                <div className="px-5 py-7">
                <h1 className="font-bold text-center text-2xl mb-5">Code Buddy</h1>  
                    <form onSubmit={handleSubmit} autoComplete="off" noValidate>
                    <div className="grid grid-cols-2 gap-x-10">
                        <div className="relative z-0 mb-6 w-full group">
                            <input 
                                type="text" 
                                name="floating_fname" 
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                                required 
                                value={userDetails.firstName}
                                onChange={e => handleChange('firstName', e.target.value)}
                            />
                            <label htmlFor="floating_fname" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input 
                                type="text" 
                                name="floating_lname" 
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                                required 
                                value={userDetails.lastName}
                                onChange={e => handleChange('lastName', e.target.value)}
                            />
                            <label htmlFor="floating_lname" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Name</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input 
                                type="email" 
                                name="floating_email" 
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                                required 
                                value={userDetails.email}
                                onChange={e => handleChange('email', e.target.value)}
                            />
                            <label htmlFor="floating_email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input 
                                type="password" 
                                name="floating_password" 
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                                required 
                                value={userDetails.password}
                                onChange={e => handleChange('password', e.target.value)}
                            />
                            <label htmlFor="floating_password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                        </div>
                    </div>
                    <button type="submit" className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                        <span className="inline-block mr-2">Register</span>
                        <SVGIcon svgClassName="w-4 h-4 inline-block" pathStrokeWidth={2} pathD="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </button>
                    </form>
                </div>
                <div className="p-5">
                    <Link to="/login" className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">Login</Link>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}