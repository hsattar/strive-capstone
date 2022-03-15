import { Action } from "redux"
import { ThunkDispatch } from "redux-thunk"
import ACTIONS from "./actionNames"

export const userLogsInAction = () => ({ type: ACTIONS.USER_LOGS_IN })
export const userLogsOutAction = () => ({ type: ACTIONS.USER_LOGS_OUT })
export const addInfoToCurrentUserAction = (user: IUser) => ({ type: ACTIONS.ADD_INFO_TO_CURRENT_USER, payload: user })

export const setElementToEditAction = (element: IElement) => ({ type: ACTIONS.SET_ELEMENT_TO_EDIT, payload: element })
export const clearAllWebsiteInformationAction = () => ({ type: ACTIONS.CLEAR_ALL_WEBSITE_INFORMATION })

const createNewCode = (codeBlocks: IElement[]) => codeBlocks.map(block => block.tag || block.text).join('')

export const addElementsToCodeAction = (elements: IElement[]) => 
(dispatch: ThunkDispatch<Action, any, any>, getState: () => IReduxStore) => {
    const oldCodeBlock = getState().website.codeBlocks
    const newCodeBlocks = [...oldCodeBlock, ...elements]
    const newCode = createNewCode(newCodeBlocks)

    dispatch({ type: ACTIONS.ADD_ELEMENTS_TO_CODE, payload: { newCode, newCodeBlocks }})
}