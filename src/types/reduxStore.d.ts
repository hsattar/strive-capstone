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
    text?: string
    closingTag: string
}