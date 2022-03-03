import ACTIONS from "./actionNames"

export const userLogsInAction = () => ({ type: ACTIONS.USER_LOGS_IN })
export const userLogsOutAction = () => ({ type: ACTIONS.USER_LOGS_OUT })

export const createNewWebsitesAction = () => ({ type: ACTIONS.CREATING_NEW_WEBSITE })
export const editWebsiteCodeAction = (code: string) => ({ type: ACTIONS.EDIT_WEBSITE_CODE, payload: code })
export const editWebsiteStructureAction = (code: string) => ({ type: ACTIONS.EDIT_WEBSITE_STRUCTURE, payload: code })
export const setElementToEditAction = (element: string) => ({ type: ACTIONS.SET_ELEMENT_TO_EDIT, payload: element })