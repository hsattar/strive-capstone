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

interface IComponentSub {
    container: IContainer
    elements: IElement[]
}

interface IComponent {
    navbar: IComponentSub
}

interface IContainerElement {
    id?: string
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