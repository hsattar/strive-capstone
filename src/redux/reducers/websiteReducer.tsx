import ACTIONS from "../actions/actionNames"
import { AnyAction } from "redux"
import { initialState } from "../store"

const websiteReducer = (state = initialState.website, action: AnyAction) => {
    switch(action.type) {
        case ACTIONS.CREATING_NEW_WEBSITE: return {
            ...state,
            code: `<div className="default"></div>`
        }
        case ACTIONS.EDIT_WEBSITE_CODE: return {
            ...state,
            code: action.payload
        }
        default: return state
    }
}

export default websiteReducer