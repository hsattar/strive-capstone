interface IReduxStore {
    user: {
        isLoggedIn: boolean
        currentUser: IUser | null
    }
    website: {
        code: string,
        codeBlocks: IElement[] 
        elementToEdit: IElement | null
    }
}

interface IUser {
    _id: string
    firstName: string
    lastName: string
    email: string
    website: string[]
    avatar: string
}

interface IElement {
    name: string
    id?: string
    tag: string
    className: string
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
}