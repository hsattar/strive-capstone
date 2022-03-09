import ACTIONS from "../actions/actionNames"
import { AnyAction } from "redux"
import { initialState } from "../store"

const websiteReducer = (state = initialState.website, action: AnyAction) => {
    switch(action.type) {
        case ACTIONS.CREATING_NEW_WEBSITE: return {
            ...state,
            code: `<div></div>`
        }
        case ACTIONS.EDIT_WEBSITE_CODE: return {
            ...state,
            code: action.payload
        }
        case ACTIONS.EDIT_WEBSITE_STRUCTURE: return {
            ...state,
            structure: action.payload
        }
        case ACTIONS.SET_ELEMENT_TO_EDIT: return {
            ...state,
            elementToEdit: action.payload
        }
        case ACTIONS.CHANGE_ELEMENT_CLASS: return {
            ...state,
            code: action.payload.newCode,
            structure: action.payload.structure,
            elementToEdit: action.payload.element
        }
        case ACTIONS.STRUCTURE_DND_CHANGE: return {
            ...state,
            code: action.payload.newCode,
            structure: {
                ...state.structure,
                containers: action.payload.structureContainers
            }
        }
        default: return state
    }
}

export default websiteReducer