const componentTemplates: IComponent = {
    navbar: {
        container: {
            name: 'navbar container',
            openingTag: `<div class="flex justify-between items-center p-2 bg-gray-200">`,
            class: `flex justify-between items-center p-2 bg-gray-400`,
            closingTag: `</div>`,
            children: [],
        },
        elements: [{
            name: 'h2 heading',
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
            name: 'link',
            openingTag: `<a href="https://www.google.com" class="`,
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
            closingTag: `</a>`
        }, {
            name: 'link',
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