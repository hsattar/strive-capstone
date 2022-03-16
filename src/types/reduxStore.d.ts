interface IReduxStore {
    user: {
        isLoggedIn: boolean
        currentUser: IUser | null
    }
    website: {
        code: string,
        codeBlocks: ICodeBlock[] 
        elementToEdit: IElement | null
    }
}

interface ICodeBlock {
    id: string
    name: string
    code: IElement[]
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
    textSize?: string
    bold?: string
    italics?: string
    underline?: string
    alignment?: string
    color?: string
    backgroundColor?: string
    marginT?: string
    marginR?: string
    marginB?: string
    marginL?: string
    paddingT?: string
    paddingR?: string
    paddingB?: string
    paddingL?: string
    border?: string 
    borderRadius?: string 
    text?: string
    listStyle?: string
}