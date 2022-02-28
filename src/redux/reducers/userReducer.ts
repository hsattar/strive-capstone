import ACTIONS from "../actions/actionNames"
import { AnyAction } from "redux"
import { initialState } from "../store"

const userReducer = (state = initialState.user, action: AnyAction) => {
    switch(action.type) {
        default: return state
    }
}

export default userReducer