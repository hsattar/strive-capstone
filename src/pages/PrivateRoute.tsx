import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import useAxios from '../hooks/useAxios'
import { addInfoToCurrentUserAction } from '../redux/actions/actionCreators'

interface IProps {
    children: JSX.Element
}

export default function PrivateRoute({ children }: IProps) {

    const axiosRequest = useAxios()
    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state: IReduxStore) => state.user.isLoggedIn)
    const currentUser = useSelector((state: IReduxStore) => state.user.currentUser)

    const fetchMyInfo = async () => {
        try {
            const response = await axiosRequest('/users/me', 'GET')
            if (response.status === 200) {
                dispatch(addInfoToCurrentUserAction(response.data))
            }
        } catch (error) {
            console.log(error)
        }
    }

    if (isLoggedIn && !currentUser) fetchMyInfo()

    return isLoggedIn ? children : <Navigate to="/login" />
}