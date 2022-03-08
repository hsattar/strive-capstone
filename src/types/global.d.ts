interface IWebsiteDetails {
    name: string
    page1: string
    page2: string
    page3: string
}

interface IWebSafeFonts {
    name: string
    value: string
}

type elementTemplateOptions = 'heading' | 'paragraph' | 'button' | 'image' | 'youTube'

type elementToEditOptions = 'openingTag' | 'height' | 'width' | 'font' | 'fontSize' | 'bold' | 'italics' | 'underline' | 'alignment' | 'color' | 'backgroundColor' | 'margin' | 'padding' | 'border' | 'borderRadius' | 'text' | 'closingTag'