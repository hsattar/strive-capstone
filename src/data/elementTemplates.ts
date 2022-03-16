const elementTemplates = {
    heading: [{ 
        name: 'h1 heading',
        tag: `<h1 className="font-sans text-6xl font-bold">`,
        className: `font-sans text-6xl font-bold`,
        font: `font-sans`,
        textSize: `text-6xl`,
        bold: `font-bold`,
        italics: ``,
        underline: ``,
        alignment: ``,
        color: ``,
        backgroundColor: ``,
        marginT: ``,
        marginR: ``,
        marginB: ``,
        marginL: ``,
        paddingT: ``,
        paddingR: ``,
        paddingB: ``,
        paddingL: ``,
        border: ``
    }, {
        text: `Heading`
    }, {
        tag: `</h1>`
    }],
    paragraph: [{
        name: 'paragraph',
        tag: `<p className="font-sans text-base">`,
        className: `font-sans text-base`,
        font: `font-sans`,
        textSize: `text-base`,
        bold: ``,
        italics: ``,
        underline: ``,
        alignment: ``,
        color: ``,
        backgroundColor: ``,
        border: ``,
        marginT: ``,
        marginR: ``,
        marginB: ``,
        marginL: ``,
        paddingT: ``,
        paddingR: ``,
        paddingB: ``,
        paddingL: ``,
    }, {
        text: `Paragraph`
    }, {
        tag: `</p>`
    }],
    image: [{
        name: 'image',
        tag: `<img src="" className="" />`,
        className: ``,
        height: ``,
        width: ``,
        marginT: ``,
        marginR: ``,
        marginB: ``,
        marginL: ``,
        paddingT: ``,
        paddingR: ``,
        paddingB: ``,
        paddingL: ``
    }],
    button: [{
        name: 'button',
        tag: `<button className="font-sans text-base text-white bg-blue-500 py-1 px-3 rounded-md">`,
        className: `font-sans text-base text-white bg-blue-500 py-1 px-3 rounded-md`,
        font: `font-sans`,
        textSize: `text-base`,
        bold: ``,
        italics: ``,
        underline: ``,
        alignment: ``,
        color: `text-white`,
        backgroundColor: `bg-blue-500`,
        marginT: ``,
        marginR: ``,
        marginB: ``,
        marginL: ``,
        paddingT: `pt-1`,
        paddingR: `pr-3`,
        paddingB: `pb-1`,
        paddingL: `pl-3`,
        border: ``,
        borderRadius: `rounded-md`,
    }, {
        text: `Button`
    }, {
        tag: `</button>`
    }],
    youTube: [{
        name: 'youtube',
        tag: `<iframe src="" className="">`,
        className: ``,
        allow: ``,
        height: ``,
        width: ``,
    }],
    list: [{
        name: 'bullet list',
        tag: `<ol className="list-disc ml-6">`,
        className: `list-disc ml-6`,
        marginT: ``,
        marginR: ``,
        marginB: ``,
        marginL: `ml-6`,
        paddingT: ``,
        paddingR: ``,
        paddingB: ``,
        paddingL: ``,
        listStyle: `list-disc`

    }, {
        name: 'list item 1',
        tag: `<li className="">`,
        className: ``
    }, {
        text: `Bullet 1`
    }, {
        tag: `</li>`
    }, {
        name: 'list item 2',
        tag: `<li className="">`,
        className: ``
    }, {
        text: `Bullet 2`
    }, {
        tag: `</li>`
    }, {
        name: 'list item 3',
        tag: `<li className="">`,
        className: ``
    }, {
        text: `Bullet 3`
    }, {
        tag: `</li>`
    }, {
        tag: `</ol>`
    }]
}

export default elementTemplates