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
        default: return state
    }
}

export default userReducer