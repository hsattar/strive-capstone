const elementTemplates = {
    heading: { 
        name: 'h1 heading',
        openingTag: `<h1 class="`,
        class: `font-['Open_Sans'] text-6xl font-bold`,
        font: `font-['Open_Sans']`,
        fontSize: `text-6xl`,
        bold: `font-bold`,
        italics: ``,
        underline: ``,
        alignment: ``,
        color: ``,
        backgroundColor: ``,
        margin: ``,
        padding: ``,
        border: ``,
        text: `">Heading`,
        closingTag: `</h1>`
    },
    paragraph: {
        name: 'paragraph',
        openingTag: `<p class="`,
        class: `font-['Open_Sans'] text-base`,
        font: `font-['Open_Sans']`,
        fontSize: `text-base`,
        bold: ``,
        italics: ``,
        underline: ``,
        alignment: ``,
        color: ``,
        backgroundColor: ``,
        margin: ``,
        padding: ``,
        border: ``,
        text: `">Paragraph`,
        closingTag: `</p>`
    },
    image: {
        name: 'image',
        openingTag: `<img src="" class="`,
        class: ``,
        height: ``,
        width: ``,
        closingTag: `"/>`,
    },
    button: {
        name: 'button',
        openingTag: `<button class="`,
        class: `font-['Open_Sans'] text-base text-white bg-blue-500 py-1 px-3 rounded-md`,
        font: `font-['Open_Sans']`,
        fontSize: `text-base`,
        bold: ``,
        italics: ``,
        underline: ``,
        alignment: ``,
        color: `text-white`,
        backgroundColor: `bg-blue-500`,
        margin: ``,
        padding: `py-1 px-3`,
        border: ``,
        borderRadius: `rounded-md`,
        text: `">Button`,
        closingTag: `</button>`
    },
    youTube: {
        name: 'youtube',
        openingTag: `<iframe src="" class="`,
        class: ``,
        src: ``,
        allow: ``,
        height: ``,
        width: ``,
        closingTag: `/>`,
    }
}

// bg-blue-500 hover:bg-blue-600 py-1 px-5 mr-3 rounded-md text-white

export default elementTemplates