import ACTIONS from "../actions/actionNames"
import { AnyAction } from "redux"
import { initialState } from "../store"

const userReducer = (state = initialState.user, action: AnyAction) => {
    switch(action.type) {
        case ACTIONS.USER_LOGS_IN: return {
            ...state,
            isLoggedIn: true
        }
        case ACTIONS.USER_LOGS_OUT: return {
            ...state,
            isLoggedIn: false,
            currentUser: null
        }
        case ACTIONS.ADD_INFO_TO_CURRENT_USER: return {
            ...state,
            currentUser: action.payload
        }
        default: return state
    }
}

export default userReducer