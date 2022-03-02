import ACTIONS from "../actions/actionNames"
import { AnyAction } from "redux"
import { initialState } from "../store"

const websiteReducer = (state = initialState.website, action: AnyAction) => {
    switch(action.type) {
        case ACTIONS.CREATING_NEW_WEBSITE: return {
            ...state,
            code: `<div className="default"></div>`
        }
        default: return state
    }
}

export default websiteReducer