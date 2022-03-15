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

type elementTemplateOptions = 'heading' | 'paragraph' | 'button' | 'image' | 'youTube'

type elementToEditOptions = 'tag' | 'height' | 'width' | 'font' | 'textSize' | 'bold' | 'italics' | 'underline' | 'alignment' | 'color' | 'backgroundColor' | 'margin' | 'padding' | 'border' | 'borderRadius' | 'text' | 'className'

type layoutTemplateOptions = 'flexContainer'

type componentTemplateOptions = 'navbar'