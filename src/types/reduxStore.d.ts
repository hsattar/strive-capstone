interface IReduxStore {
    user: {
        isLoggedIn: boolean
        currentUser: IUser | null
    }
    website: {
        code: Icode[], 
        // structure: IStructure
        elementToEdit: ICode | null
    }
}

interface ICode {
    id: string
    code: string
}

interface IStructure {
    containers: IContainer[]
    elements: IElement[]
    containerOrder: string[]
}

interface IUser {
    _id: string
    firstName: string
    lastName: string
    email: string
    website: string[]
    avatar: string
}

interface IComponentSub {
    container: IContainer
    elements: IElement[]
}

interface IComponent {
    navbar: IComponentSub
}

interface IContainerElement {
    id?: string
    name: string
    openingTag: string
    class: string
    closingTag: string
}

interface IContainer extends IContainerElement {
    children: string[]
}

interface IElement extends IContainerElement {
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