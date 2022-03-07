import { Action } from "redux"
import { ThunkDispatch } from "redux-thunk"
import ACTIONS from "./actionNames"

export const userLogsInAction = () => ({ type: ACTIONS.USER_LOGS_IN })
export const userLogsOutAction = () => ({ type: ACTIONS.USER_LOGS_OUT })

export const createNewWebsitesAction = () => ({ type: ACTIONS.CREATING_NEW_WEBSITE })
export const editWebsiteCodeAction = (code: string) => ({ type: ACTIONS.EDIT_WEBSITE_CODE, payload: code })
export const setElementToEditAction = (element: IElement) => ({ type: ACTIONS.SET_ELEMENT_TO_EDIT, payload: element })

export const editWebsiteStructureAction = (code: IElement) => 
(dispatch: ThunkDispatch<Action, any, any>, getState: () => IReduxStore) => {   
    const structure = getState().website.structure
    const findParentIndex = structure.map(element => element.id === code.parentId ? element.children!.push(code.id) : element)
    dispatch({ 
        type: ACTIONS.EDIT_WEBSITE_STRUCTURE,
        payload: [...structure, code]
    })
}

export const changeElementClassAction = (elementId: string, property: elementToEditOptions,  className: string) => 
(dispatch: ThunkDispatch<Action, any, any>, getState: () => IReduxStore) => {   
    const structure = getState().website.structure
    const elementToEdit = getState().website.elementToEdit
    if (!elementToEdit) return
    elementToEdit[property] = className
    
    const { id, openingTag, class: oldClass, text, closingTag, parentId, ...htmlProperties } = elementToEdit
    const htmlValues = Object.values(htmlProperties) 
    htmlValues.unshift(id)
    const classNamesAsString = htmlValues.join(' ')
    elementToEdit.class = classNamesAsString
    
    let element = structure.find(obj => obj.id === elementId)
    if (!element) return
    element = elementToEdit

    // const newCode = `${structure[0].openingTag}${structure[0].children?.map(child => 'hello')}${structure[0].closingTag}`

    const newCode = `${structure[0].openingTag}${structure[0].children?.map(child => {
        const element = structure.find(element => element.id === child)
        return `${element?.openingTag}${element?.class}${element?.text}${element?.closingTag}`
    })}${structure[0].closingTag}`

    console.log(newCode)

    dispatch({
        type: ACTIONS.CHANGE_ELEMENT_CLASS,
        payload: { element, structure, newCode }
    })
}

// export const changeElementClassAction = (elementId: string, property: elementToEditOptions,  className: string) => 
// (dispatch: ThunkDispatch<Action, any, any>, getState: () => IReduxStore) => {   
//     const code = getState().website.code
//     const structure = getState().website.structure
//     const elementToEdit = getState().website.elementToEdit
//     if (!elementToEdit) return
//     elementToEdit[property] = className
    
//     const { id, openingTag, class: oldClass, text, closingTag, parentId, ...htmlProperties } = elementToEdit
//     console.log(htmlProperties)
//     const htmlValues = Object.values(htmlProperties) 
//     console.log(htmlValues)
//     htmlValues.unshift(id)
//     const classNamesAsString = htmlValues.join(' ')
//     console.log(classNamesAsString)
//     elementToEdit.class = classNamesAsString
    
//     let element = structure.find(obj => obj.id === elementId)
//     if (!element) return
//     element = elementToEdit
    
//     const splitCode = code.split(elementId)
//     console.log(splitCode)
//     const addClassNamesToCode = [splitCode[0], classNamesAsString, splitCode[1]]
//     console.log(addClassNamesToCode)
//     const newCode = addClassNamesToCode.join('')
//     console.log(newCode)
//     dispatch({
//         type: ACTIONS.CHANGE_ELEMENT_CLASS,
//         payload: { element, structure, newCode }
//     })
// }