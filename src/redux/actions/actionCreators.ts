import { Action } from "redux"
import { ThunkDispatch } from "redux-thunk"
import ACTIONS from "./actionNames"

export const userLogsInAction = () => ({ type: ACTIONS.USER_LOGS_IN })
export const userLogsOutAction = () => ({ type: ACTIONS.USER_LOGS_OUT })
export const addInfoToCurrentUserAction = (user: IUser) => ({ type: ACTIONS.ADD_INFO_TO_CURRENT_USER, payload: user })

export const createNewWebsitesAction = () => ({ type: ACTIONS.CREATING_NEW_WEBSITE })
export const editWebsiteCodeAction = (code: string) => ({ type: ACTIONS.EDIT_WEBSITE_CODE, payload: code })
export const setElementToEditAction = (element: IElement) => ({ type: ACTIONS.SET_ELEMENT_TO_EDIT, payload: element })

const createNewCode = (containers: IContainer[], elements: IElement[]) => {
    return containers.map(container => `${container.openingTag}${container.children.map(child => {
        const element = elements.find(element => element.id === child)
        return `${element?.openingTag}${element?.class}${element?.text}${element?.closingTag}`
    }).join('')}${container.closingTag}`).join('')
}

export const editWebsiteStructureAction = (code: IElement) => 
(dispatch: ThunkDispatch<Action, any, any>, getState: () => IReduxStore) => {   
    const structure = getState().website.structure
    const rootIndex = structure.containers.findIndex(container => container.id === '123456789')
    structure.containers[rootIndex].children.push(code.id!)
    dispatch({ 
        type: ACTIONS.EDIT_WEBSITE_STRUCTURE,
        payload: { 
            ...structure,
            elements: [...structure.elements, code]
        }
    })
}

export const addNewElement = (newElement: IElement) => 
(dispatch: ThunkDispatch<Action, any, any>, getState: () => IReduxStore) => {   
    const containers = getState().website.structure.containers
    const existingElements = getState().website.structure.elements
   
    const { id, name, openingTag, class: oldClass, text, closingTag, ...htmlProperties } = newElement
    const htmlValues = Object.values(htmlProperties) 
    htmlValues.unshift(id)
    const classNamesAsString = htmlValues.join(' ')
    newElement.class = classNamesAsString
    
    const newElementsArray = [...existingElements, newElement]
    const updatedContainers = containers[containers.length - 1].children.push(newElement.id!)

    const newCode = createNewCode(containers, newElementsArray)       

    dispatch({
        type: ACTIONS.ADD_NEW_ELEMENT,
        payload: { newElementsArray, containers, newCode }
    })
}

export const changeElementClassAction = (elementId: string, property: elementToEditOptions,  className: string) => 
(dispatch: ThunkDispatch<Action, any, any>, getState: () => IReduxStore) => {   
    const structure = getState().website.structure
    const elementToEdit = getState().website.elementToEdit
    if (!elementToEdit) return
    elementToEdit[property] = className
    
    const { id, name, openingTag, class: oldClass, text, closingTag, ...htmlProperties } = elementToEdit
    const htmlValues = Object.values(htmlProperties) 
    htmlValues.unshift(id)
    const classNamesAsString = htmlValues.join(' ')
    elementToEdit.class = classNamesAsString
    
    let element = structure.elements.find(obj => obj.id === elementId)
    if (!element) return
    element = elementToEdit

    const newCode = createNewCode(structure.containers, structure.elements)       

    dispatch({
        type: ACTIONS.CHANGE_ELEMENT_CLASS,
        payload: { element, structure, newCode }
    })
}



export const structureDndChangeAction = (structureContainers: IContainer[]) => 
(dispatch: ThunkDispatch<Action, any, any>, getState: () => IReduxStore) => {   
    const structure = getState().website.structure

    const newCode = structure.containers.map(struct => `${struct.openingTag}${struct.children.map(child => {
        const element = structure.elements.find(element => element.id === child)
        return `${element?.openingTag}${element?.class}${element?.text}${element?.closingTag}`
    }).join('')}${struct.closingTag}`).join('')
    
    dispatch({ 
        type: ACTIONS.STRUCTURE_DND_CHANGE,
        payload: { structureContainers, newCode }
    })
}

export const containerOrderDndChangeAction = (containerOrder: string[]) =>
(dispatch: ThunkDispatch<Action, any, any>, getState: () => IReduxStore) => {
    const structure = getState().website.structure
    let newStructureContainers: IContainer[] = []
    
    containerOrder.map(contain => {
        const container = structure.containers.find(c => c.id === contain)
        if (!container) return
        newStructureContainers.push(container)
    })

    const newCode = createNewCode(newStructureContainers, structure.elements)

    dispatch({
        type: ACTIONS.CONTAINER_ORDER_DND_CHANGE,
        payload: { newCode, newStructureContainers, containerOrder }
    })
}

export const addWebsiteContainerAction = (websiteContainer: IContainer) => ({ 
    type: ACTIONS.ADD_WEBSITE_CONTAINER,
    payload: websiteContainer
})

export const addNewComponentAction = (container: IContainer, elements: IElement[]) => 
(dispatch: ThunkDispatch<Action, any, any>, getState: () => IReduxStore) => {
    const structure = getState().website.structure
    const newContainers = [...structure.containers, container]
    const newElements = [...structure.elements, ...elements]
    const newContainerOrder = [...structure.containerOrder, container.id]

    const newCode = createNewCode(newContainers, newElements)
    
    const newStructure = {
        ...structure,
        containers: newContainers,
        elements: newElements,
        containerOrder: newContainerOrder
    }

    dispatch({
        type: ACTIONS.ADD_NEW_COMPONENT,
        payload: { newCode, newStructure }
    })
}

export const updateAllWebsiteInformationAction = (code: string, structure: IStructure) => ({
    type: ACTIONS.UPDATE_ALL_WEBSITE_INFORMATION,
    payload: { code, structure }
})

export const clearAllWebsiteInformationAction = () => ({ type: ACTIONS.CLEAR_ALL_WEBSITE_INFORMATION })