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
    openingTag: string
    class: string
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
    text?: string
    closingTag: string
}