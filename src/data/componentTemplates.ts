const componentTemplates = {
    navbar: [{
        name: `navabr container`,
        tag: `<div className="flex justify-between items-center p-2 bg-gray-200">`,
        className: `flex justify-between items-center p-2 bg-gray-200`
    }, {
        name: 'h2 heading',
        openingTag: `<h2 class="font-sans text-xl">`,
        className: `font-sans text-xl`,
        font: `font-sans`,
        textSize: `text-xl`,
        bold: ``,
        italics: ``,
        underline: ``,
        alignment: ``,
        color: ``,
        bgColor: ``,
        marginT: ``,
        marginR: ``,
        marginB: ``,
        marginL: ``,
        paddingT: ``,
        paddingR: ``,
        paddingB: ``,
        paddingL: ``,
        border: ``,
    }, {
        text: `Name / Logo`
    }, {
        closingTag: `</h2>`
    }, {
        name: `links container`,
        tag: `<div className="flex items-center">`,
        className: `flex items-center`
    }, {
        name: 'link 1',
        openingTag: `<Link to="" class="font-sans text-base mr-2">`,
        class: `font-sans text-base mr-2`,
        font: `font-sans`,
        textSize: `text-base`,
        bold: ``,
        italics: ``,
        underline: ``,
        alignment: ``,
        color: ``,
        bgColor: ``,
        marginT: ``,
        marginR: `mr-2`,
        marginB: ``,
        marginL: ``,
        paddingT: ``,
        paddingR: ``,
        paddingB: ``,
        paddingL: ``,
        border: ``,
    }, {
        text: `Link 1`
    }, {
        tag: `</Link>`
    }, {
        name: 'link 2',
        openingTag: `<Link to="" class="font-sans text-base">`,
        class: `font-sans text-base`,
        font: `font-sans`,
        textSize: `text-base`,
        bold: ``,
        italics: ``,
        underline: ``,
        alignment: ``,
        color: ``,
        bgColor: ``,
        marginT: ``,
        marginR: ``,
        marginB: ``,
        marginL: ``,
        paddingT: ``,
        paddingR: ``,
        paddingB: ``,
        paddingL: ``,
        border: ``,
    }, {
        text: `Link 2`
    }, {
        tag: `</Link>`
    }, {
        tag: `</div>`
    }, {
        tag: `</div>`
    }]
}

export default componentTemplates