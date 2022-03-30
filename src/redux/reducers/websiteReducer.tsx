import ACTIONS from "../actions/actionNames"
import { AnyAction } from "redux"
import { initialState } from "../store"

const websiteReducer = (state = initialState.website, action: AnyAction) => {
    switch(action.type) {
        case ACTIONS.RESET_ALL_WEBSITE_INFORMATION: return {
            ...state,
            code: "",
            codeBlocks: [],
            // elementToEdit: null
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
        case ACTIONS.UPDATE_CODE_AND_CODEBLOCKS: return {
            ...state,
            code: action.payload.code,
            codeBlocks: action.payload.codeBlocks
        }
        case ACTIONS.ADD_OR_REMOVE_ELEMENT_LINK: return {
            ...state,
            code: action.payload,
        }
        default: return state
    }
}

export default websiteReducer