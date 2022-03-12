import axios, { Method } from 'axios'

export default function useAxios() {

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
            if (error.response.status === 401 && (failedRequest.url !== 'users/refreshToken' || failedRequest.url !== 'users/login')) return Promise.reject(error)
            await axiosRequest('/users/refreshToken', 'POST')
            const retryRequest = axios(failedRequest)
            return retryRequest
        }
    )

    return axiosRequest

}