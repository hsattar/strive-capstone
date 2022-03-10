const componentTemplates: IComponent = {
    navbar: {
        container: {
            openingTag: `<div class="flex justify-between items-center p-2 bg-gray-200">`,
            class: `flex justify-between items-center p-2 bg-gray-400`,
            closingTag: `</div>`,
            children: [],
        },
        elements: [{
            openingTag: `<h2 class="`,
            class: `font-['Open_Sans'] text-xl`,
            font: `font-['Open_Sans']`,
            fontSize: `text-xl`,
            bold: ``,
            italics: ``,
            underline: ``,
            alignment: ``,
            color: ``,
            backgroundColor: ``,
            margin: ``,
            padding: ``,
            border: ``,
            text: `">Name / Logo`,
            closingTag: `</h2>`
        }, {
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
            text: `">Link 1`,
            closingTag: `</p>`
        }, {
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
            text: `">Link 2`,
            closingTag: `</p>`
        }]
    }
}

export default componentTemplates