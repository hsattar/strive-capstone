const elementTemplates = {
    heading: { 
        openingTag: `<h1 class="`,
        class: ``,
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
        openingTag: `<p class="`,
        class: ``,
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
        openingTag: `<img src="" class="`,
        class: ``,
        height: ``,
        width: ``,
        closingTag: `"/>`,
    },
    button: {
        openingTag: `<button class="`,
        class: ``,
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