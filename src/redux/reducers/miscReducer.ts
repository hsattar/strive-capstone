import ACTIONS from "../actions/actionNames"
import { AnyAction } from "redux"
import { initialState } from "../store"

const miscReducer = (state = initialState.misc, action: AnyAction) => {
    switch(action.type) {
        case ACTIONS.SET_ELEMENT_TO_EDIT: return {
            ...state,
            elementToEdit: action.payload
        }
        default: return state
    }
}

export default miscReducer