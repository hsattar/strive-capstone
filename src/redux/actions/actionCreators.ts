import { Action } from "redux"
import { ThunkDispatch } from "redux-thunk"
import ACTIONS from "./actionNames"

export const userLogsInAction = () => ({ type: ACTIONS.USER_LOGS_IN })
export const userLogsOutAction = () => ({ type: ACTIONS.USER_LOGS_OUT })
export const addInfoToCurrentUserAction = (user: IUser) => ({ type: ACTIONS.ADD_INFO_TO_CURRENT_USER, payload: user })

export const setElementToEditAction = (element: IElement) => ({ type: ACTIONS.SET_ELEMENT_TO_EDIT, payload: element })
export const clearAllWebsiteInformationAction = () => ({ type: ACTIONS.RESET_ALL_WEBSITE_INFORMATION })

const createNewCode = (codeBlocks: IElement[]) => codeBlocks.map(block => block.tag || block.text).join('')

export const addElementsToCodeAction = (elements: ICodeBlock) => 
(dispatch: ThunkDispatch<Action, any, any>, getState: () => IReduxStore) => {
    const oldCodeBlock = getState().website.codeBlocks
    const newCodeBlocks = [...oldCodeBlock, elements]
    const newCodeBlockCode = newCodeBlocks.map(block => block.code).flat()
    const newCode = createNewCode(newCodeBlockCode)

    dispatch({ type: ACTIONS.ADD_ELEMENTS_TO_CODE, payload: { newCode, newCodeBlocks }})
}

export const changeElementClassNameAction = (field: elementToEditOptions, value: string) => 
(dispatch: ThunkDispatch<Action, any, any>, getState: () => IReduxStore) => {
    const codeBlock = getState().website.codeBlocks
    const codeBlockCode = codeBlock.map(block => block.code).flat()
    const elementToEdit = getState().website.elementToEdit
    if (!elementToEdit) return
    elementToEdit[field] = value
    
    const { id, name, tag, className, ...htmlProperties } = elementToEdit
    const htmlValues = Object.values(htmlProperties) 
    htmlValues.unshift(id)
    const classNamesAsString = htmlValues.join(' ')
    elementToEdit.className = classNamesAsString
    const openingTag = elementToEdit.tag.split('className')[0]
    elementToEdit.tag = openingTag.concat(`className="${classNamesAsString}">`)

    let element = codeBlockCode.find(block => block.id === elementToEdit.id)
    if (!element) return
    element = elementToEdit

    const newCode = createNewCode(codeBlockCode)

    dispatch({ type: ACTIONS.CHNAGE_ELEMENT_CLASS_NAME, payload: { newCode, codeBlock } })
}

export const addCodeAndBlocksFromDBToReduxAction = (code: string, codeBlocks: ICodeBlock[]) => ({
    type: ACTIONS.ADD_CODE_AND_BLOCKS_FROM_DB_TO_REDUX,
    payload: { code, codeBlocks }
})