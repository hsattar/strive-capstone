interface IWesbite {
    _id: string
    owner: string
    name: string
    page: string
    stage: string
    code: string
    namePageStage: string
    createdAt: Date
    updatedAt: Date
    __v: number
}

type blockTemplateOptions = 'heading' | 'paragraph' | 'button' | 'image' | 'unsplashImage' | 'youTube' | 'list' | 'navbar' | 'pricingCards'

type elementToEditOptions = 'tag' | 'height' | 'width' | 'font' | 'textSize' | 'bold' | 'italics' | 'underline' | 'alignment' | 'color' | 'bgColor' | 'marginT' | 'marginR' | 'marginB' | 'marginL' | 'paddingT' | 'paddingR' | 'paddingB' | 'paddingL' | 'borderStyle' | 'borderColor' | 'borderWidth' | 'borderRadius' | 'text' | 'className' | 'display' | 'flexDirection' | 'flexItems' | 'flexJustify'

type blockTypes = 'element' | 'single' | 'image-container' | 'nested-element'