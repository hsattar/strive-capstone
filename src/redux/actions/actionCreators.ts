import { Action } from "redux"
import { ThunkDispatch } from "redux-thunk"
import ACTIONS from "./actionNames"

export const userLogsInAction = () => ({ type: ACTIONS.USER_LOGS_IN })
export const userLogsOutAction = () => ({ type: ACTIONS.USER_LOGS_OUT })
export const addInfoToCurrentUserAction = (user: IUser) => ({ type: ACTIONS.ADD_INFO_TO_CURRENT_USER, payload: user })

export const setElementToEditAction = (block: ICodeBlock) => ({ type: ACTIONS.SET_ELEMENT_TO_EDIT, payload: block })
export const clearAllWebsiteInformationAction = () => ({ type: ACTIONS.RESET_ALL_WEBSITE_INFORMATION })

export const createNewEditableCode = (codeBlocks: IElement[]) => codeBlocks.map(block => block.tag || block.text).join('')

export const createNewCode = (codeBlocks: IElement[]) => 
    codeBlocks.map(block => {
        if (block.tag && block.hoverBorder) {
            const newTag = block.tag.split('hover:border-2 hover:border-blue-300 hover:cursor-grab')
            return newTag[0].concat('">')
        } else if (block.tag) {
            return block.tag
        } else {
            return block.text
        }
    }).join('')

export const addElementsToCodeAction = (elements: ICodeBlock) => 
(dispatch: ThunkDispatch<Action, any, any>, getState: () => IReduxStore) => {
    const oldCodeBlock = getState().website.present.codeBlocks
    const newCodeBlocks = [...oldCodeBlock, elements]
    const newCodeBlockCode = newCodeBlocks.map(block => block.code).flat()
    const newCode = createNewCode(newCodeBlockCode)

    dispatch({ type: ACTIONS.ADD_ELEMENTS_TO_CODE, payload: { newCode, newCodeBlocks }})
}

export const changeElementClassNameAction = (field: elementToEditOptions, value: string) => 
(dispatch: ThunkDispatch<Action, any, any>, getState: () => IReduxStore) => {
    const codeBlock = getState().website.present.codeBlocks
    const codeBlockCode = codeBlock.map(block => block.code).flat()
    const elementToEdit = getState().website.present.elementToEdit
    if (!elementToEdit) return
    elementToEdit.code[0][field] = value
    
    const { name, tag, className, ...htmlProperties } = elementToEdit.code[0]
    const htmlValues = Object.values(htmlProperties) 
    const classNamesAsString = htmlValues.join(' ')
    elementToEdit.code[0].className = classNamesAsString
    const openingTag = elementToEdit.code[0].tag!.split('className')[0]
    elementToEdit.code[0].tag = openingTag.concat(`className="${classNamesAsString}">`)

    let element = codeBlockCode.find(block => block.id === elementToEdit.code[0].id)
    if (!element) return
    element = elementToEdit.code[0]

    const newCode = createNewCode(codeBlockCode)

    dispatch({ type: ACTIONS.CHNAGE_ELEMENT_CLASS_NAME, payload: { newCode, codeBlock } })
}

export const updateCodeAndCodeBlocksAction = (code: string, codeBlocks: ICodeBlock[]) => ({
    type: ACTIONS.UPDATE_CODE_AND_CODEBLOCKS,
    payload: { code, codeBlocks }
})

export const addOrRemoveElementLinkAction = (linkType: string, linkTo: string) => 
(dispatch: ThunkDispatch<Action, any, any>, getState: () => IReduxStore) => {
    const elementToEdit = getState().website.present.elementToEdit
    const codeBlocks = getState().website.present.codeBlocks
    if (!elementToEdit) return
    if (linkType === '' && linkTo === '') {
        switch (elementToEdit.code[0].name) {
            case 'heading': 
                elementToEdit.code[0].tag = `<h1 className="${elementToEdit.code[0].className}" >`
                elementToEdit.code[2].tag = `</h1>`
                break
            case 'paragraph': 
                elementToEdit.code[0].tag = `<p className="${elementToEdit.code[0].className}" >`
                elementToEdit.code[2].tag = `</p>`
                break
            case 'button': 
                elementToEdit.code[0].tag = `<button className="${elementToEdit.code[0].className}" >`
                elementToEdit.code[2].tag = `</button>`
                break
            default: return
        }
        elementToEdit.code[0].linkTo = ''
        elementToEdit.code[0].linkType = ''
    } else {
        if (linkType === 'Link - Internal') {
            elementToEdit.code[0].tag = `<a href="/ws/test/${linkTo}" className="block ${elementToEdit.code[0].className}" >`
            elementToEdit.code[2].tag = `</a>`
        } else {
            elementToEdit.code[0].tag = `<a href="${linkTo}" target="_blank" className="block ${elementToEdit.code[0].className}" >`
            elementToEdit.code[2].tag = `</a>`
        }
    }
    const newCodeBlocks = codeBlocks.map(block => block.id === elementToEdit.id ? elementToEdit : block)
    const newCode = createNewCode(newCodeBlocks.map(block => block.code).flat())
    dispatch({ type: ACTIONS.ADD_OR_REMOVE_ELEMENT_LINK, payload: newCode })
}   