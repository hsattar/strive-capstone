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
            code: [],
            elementToEdit: null
        }
        case ACTIONS.ADD_ELEMENTS_TO_CODE: return {
            ...state,
            code: action.payload.newCode,
            codeBlocks: action.payload.newCodeBlocks
        }
        case ACTIONS.CHNAGE_ELEMENT_CLASS_NAME: return {
            ...state,
            code: action.payload.newCode,
            codeBlocks: action.payload.codeBlock
        }
        default: return state
    }
}

export default websiteReducer