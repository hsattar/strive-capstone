import axios, { Method } from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userLogsOutAction } from '../redux/actions/actionCreators'

export default function useAxios() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { REACT_APP_BE_URL: baseURL } = process.env

    const axiosRequest = async (url: string, method: Method, data = {}) => {
        try {
            return await axios({ baseURL, url, method, data, withCredentials: true })
        } catch (error: any) {
            return error.toJSON()
        }
    }

    axios.interceptors.response.use(
        response => response,
        async error => {
            const failedRequest = error.config
            if (failedRequest.url === 'users/login') {
                return Promise.reject(failedRequest)
            } else {
                if (error.response.status === 401 && failedRequest.url !== '/users/refresh-token') {
                    console.log('IF', error.response.status, failedRequest.url)
                    await axiosRequest('/users/refresh-token', 'POST')
                    const retryRequest = axios(failedRequest)
                    return retryRequest
                } else if (error.response.status === 400 && failedRequest.url === '/users/refresh-token') {
                    console.log('ELSE IF', error.response.status, failedRequest.url)
                    dispatch(userLogsOutAction())
                    navigate('/login')
                    return Promise.reject(error)
                } else {
                    console.log('ELSE', error.response.status, failedRequest.url)
                    return Promise.reject(error)
                }
            }
        }
    )

    return axiosRequest

}