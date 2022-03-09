interface IReduxStore {
    user: {
        isLoggedIn: boolean
        currentUser: null
    }
    website: {
        code: string, 
        structure: {
            containers: IContainer[]
            elements: IElement[]
            containerOrder: string[]
        }
        elementToEdit: IElement | null
    }
}

interface IContainer {
    id: string
    openingTag: string
    class?: string
    closingTag: string
    children: string[]
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