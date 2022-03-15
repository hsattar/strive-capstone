const elementTemplates = {
    heading: [{ 
        name: 'h1 heading',
        tag: `<h1 className="font-sans text-6xl font-bold">`,
        className: `font-sans text-6xl font-bold`,
        font: `font-sans`,
        fontSize: `text-6xl`,
        bold: `font-bold`,
        italics: ``,
        underline: ``,
        alignment: ``,
        color: ``,
        backgroundColor: ``,
        margin: ``,
        padding: ``,
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
        fontSize: `text-base`,
        bold: ``,
        italics: ``,
        underline: ``,
        alignment: ``,
        color: ``,
        backgroundColor: ``,
        margin: ``,
        padding: ``,
        border: ``
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
    }],
    button: [{
        name: 'button',
        tag: `<button className="font-sans text-base text-white bg-blue-500 py-1 px-3 rounded-md">`,
        className: `font-sans text-base text-white bg-blue-500 py-1 px-3 rounded-md`,
        font: `font-sans`,
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
    }]
}

export default elementTemplates