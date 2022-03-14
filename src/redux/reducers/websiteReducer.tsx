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
        case ACTIONS.ADD_NEW_ELEMENT: return {
            ...state,
            code: action.payload.newCode,
            structure: {
                ...state.structure,
                containers: action.payload.containers,
                elements: action.payload.newElementsArray
            }
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
        case ACTIONS.CONTAINER_ORDER_DND_CHANGE: return {
            ...state,
            code: action.payload.newCode,
            structure: {
                ...state.structure,
                containers: action.payload.newStructureContainers,
                containerOrder: action.payload.containerOrder
            }
        }
        case ACTIONS.ADD_WEBSITE_CONTAINER: return {
            ...state,
            structure: {
                ...state.structure,
                containers: [...state.structure.containers, action.payload],
                containerOrder: [...state.structure.containerOrder, action.payload.id]
            }
        }
        case ACTIONS.ADD_NEW_COMPONENT: return {
            ...state,
            code: action.payload.newCode,
            structure: action.payload.newStructure
        }
        case ACTIONS.UPDATE_ALL_WEBSITE_INFORMATION: return {
            ...state,
            code: action.payload.code,
            structure: action.payload.structure
        }
        default: return state
    }
}

export default websiteReducer