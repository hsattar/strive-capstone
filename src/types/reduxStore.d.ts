interface IReduxStore {
    user: {
        isLoggedIn: boolean
        currentUser: null
    }
    website: {
        code: string, 
        structure: IElement[]
        elementToEdit: IElement | null
    }
}

interface IElement {
    id: string
    parentId?: string
    children?: string[]
    openingTag: string
    class?: string
    height?: string
    width?: string
    font?: string
    fontSize?: string
    bold?: string
    italics?: string
    underline?: string
    alignment?: string
    color?: string
    backgroundColor?: string
    margin?: string
    padding?: string
    border?: string 
    borderRadius?: string 
    text?: string
    closingTag: string
}