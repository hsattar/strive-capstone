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
            if (failedRequest.url === 'users/login') {
                return Promise.reject(failedRequest)
            } else {
                if (error.response.status === 401 && failedRequest.url !== 'users/refreshToken') {
                    await axiosRequest('/users/refresh-token', 'POST')
                    const retryRequest = axios(failedRequest)
                    return retryRequest
                } else {
                    return Promise.reject(error)
                }
            }
        }
    )

    return axiosRequest

}