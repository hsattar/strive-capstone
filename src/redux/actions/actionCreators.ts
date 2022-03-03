import { Action } from "redux"
import { ThunkDispatch } from "redux-thunk"
import ACTIONS from "./actionNames"

export const userLogsInAction = () => ({ type: ACTIONS.USER_LOGS_IN })
export const userLogsOutAction = () => ({ type: ACTIONS.USER_LOGS_OUT })

export const createNewWebsitesAction = () => ({ type: ACTIONS.CREATING_NEW_WEBSITE })
export const editWebsiteCodeAction = (code: string) => ({ type: ACTIONS.EDIT_WEBSITE_CODE, payload: code })
export const editWebsiteStructureAction = (code: IElement) => ({ type: ACTIONS.EDIT_WEBSITE_STRUCTURE, payload: code })
export const setElementToEditAction = (element: IElement) => ({ type: ACTIONS.SET_ELEMENT_TO_EDIT, payload: element })

export const changeElementClassAction = (elementId: string, className: string) => 
(dispatch: ThunkDispatch<Action, any, any>, getState: () => IReduxStore) => {   
    const code = getState().website.code
    const structure = getState().website.structure
    const element = structure.find(obj => obj.id === elementId)
    if (!element) return
    element.class = element.class.concat(` ${className}`)
    const splitCode = code.split(elementId)
    const addClassNamesToCode = [splitCode[0], element.class, splitCode[1]]
    const newCode = addClassNamesToCode.join('')
    dispatch({
        type: ACTIONS.CHANGE_ELEMENT_CLASS,
        payload: { element, structure, newCode }
    })
}