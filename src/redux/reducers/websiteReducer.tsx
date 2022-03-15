import ACTIONS from "../actions/actionNames"
import { AnyAction } from "redux"
import { initialState } from "../store"

const websiteReducer = (state = initialState.website, action: AnyAction) => {
    switch(action.type) {
        case ACTIONS.SET_ELEMENT_TO_EDIT: return {
            ...state,
            elementToEdit: action.payload
        }
        case ACTIONS.CLEAR_ALL_WEBSITE_INFORMATION: return {
            ...state,
            code: [''],
            elementToEdit: null
        }
        default: return state
    }
}

export default websiteReducer