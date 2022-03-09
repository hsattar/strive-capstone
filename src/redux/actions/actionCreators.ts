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
    const findParentIndex = structure.containers.map(container => container.id === code.parentId ? container.children!.push(code.id) : container)
    dispatch({ 
        type: ACTIONS.EDIT_WEBSITE_STRUCTURE,
        payload: { 
            ...structure,
            elements: [...structure.elements, code]
        }
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
    
    let element = structure.elements.find(obj => obj.id === elementId)
    if (!element) return
    element = elementToEdit

    const newCode = `${structure.containers[0].openingTag}${structure.containers[0].children?.map(child => {
        const element = structure.elements.find(element => element.id === child)
        return `${element?.openingTag}${element?.class}${element?.text}${element?.closingTag}`
    }).join('')}${structure.containers[0].closingTag}`

    dispatch({
        type: ACTIONS.CHANGE_ELEMENT_CLASS,
        payload: { element, structure, newCode }
    })
}

export const structureDndChangeAction = (structureContainers: IContainer[]) => 
(dispatch: ThunkDispatch<Action, any, any>, getState: () => IReduxStore) => {   
    const structure = getState().website.structure

    const newCode = `${structure.containers[0].openingTag}${structure.containers[0].children?.map(child => {
        const element = structure.elements.find(element => element.id === child)
        return `${element?.openingTag}${element?.class}${element?.text}${element?.closingTag}`
    }).join('')}${structure.containers[0].closingTag}`
    
    dispatch({ 
        type: ACTIONS.STRUCTURE_DND_CHANGE,
        payload: { structureContainers, newCode }
    })
}