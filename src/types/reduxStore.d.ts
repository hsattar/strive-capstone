interface IReduxStore {
    user: {
        isLoggedIn: boolean
        currentUser: IUser | null
    }
    website: {
        code: string,
        codeBlocks: ICodeBlock[] 
        elementToEdit: ICodeBlock | null
    }
}

interface ICodeBlock {
    id: string
    name: string
    type: string
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
    id?: string
    type?: string
    name: string
    tag?: string
    className?: string
    height?: string
    width?: string
    font?: string
    textSize?: string
    bold?: string
    italics?: string
    underline?: string
    alignment?: string
    color?: string
    bgColor?: string
    marginT?: string
    marginR?: string
    marginB?: string
    marginL?: string
    paddingT?: string
    paddingR?: string
    paddingB?: string
    paddingL?: string
    borderStyle?: string
    borderColor?: string
    borderWidth?: string
    borderRadius?: string
    text?: string
    listStyle?: string
    display?: string
    flexDirection?: string
    flexItems?: string
    flexJustify?: string
    linkTo?: string
    linkType?: string
    hoverBorder?: string
}