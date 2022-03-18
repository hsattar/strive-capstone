const elementTemplates = {
    heading: [{ 
        name: 'h1 heading',
        tag: `<h1 className="font-sans text-6xl font-bold hover:border-2 hover:border-blue-300 hover:cursor-grab">`,
        className: `font-sans text-6xl font-bold hover:border-2 hover:border-blue-300 hover:cursor-grab`,
        font: `font-sans`,
        textSize: `text-6xl`,
        bold: `font-bold`,
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
        borderStyle: ``,
        borderColor: ``,
        borderWidth: ``,
        borderRadius: ``,
        hoverBorder: `hover:border-2 hover:border-blue-300 hover:cursor-grab`
    }, {
        text: `Heading`
    }, {
        tag: `</h1>`
    }],
    paragraph: [{
        name: 'paragraph',
        tag: `<p className="font-sans text-base hover:border-2 hover:border-blue-300 hover:cursor-grab">`,
        className: `font-sans text-base hover:border-2 hover:border-blue-300 hover:cursor-grab`,
        font: `font-sans`,
        textSize: `text-base`,
        bold: ``,
        italics: ``,
        underline: ``,
        alignment: ``,
        color: ``,
        bgColor: ``,
        borderStyle: ``,
        borderColor: ``,
        borderWidth: ``,
        borderRadius: ``,
        marginT: ``,
        marginR: ``,
        marginB: ``,
        marginL: ``,
        paddingT: ``,
        paddingR: ``,
        paddingB: ``,
        paddingL: ``,
        hoverBorder: `hover:border-2 hover:border-blue-300 hover:cursor-grab`
    }, {
        text: `Paragraph`
    }, {
        tag: `</p>`
    }],
    image: [{
        name: 'image',
        tag: `<img src="" className="hover:border-2 hover:border-blue-300 hover:cursor-grab" />`,
        className: `hover:border-2 hover:border-blue-300 hover:cursor-grab`,
        height: ``,
        width: ``,
        marginT: ``,
        marginR: ``,
        marginB: ``,
        marginL: ``,
        paddingT: ``,
        paddingR: ``,
        paddingB: ``,
        paddingL: ``,
        borderStyle: ``,
        borderColor: ``,
        borderWidth: ``,
        borderRadius: ``,
        hoverBorder: `hover:border-2 hover:border-blue-300 hover:cursor-grab`
    }], 
    unsplashImage: [{
        name: `unsplash container`,
        tag: `<div className="flex flex-col items-center p-2 hover:border-2 hover:border-blue-300 hover:cursor-grab">`,
        className: `flex flex-col items-center p-2 hover:border-2 hover:border-blue-300 hover:cursor-grab`,
        borderStyle: ``,
        borderColor: ``,
        borderWidth: ``,
        borderRadius: ``,
        hoverBorder: `hover:border-2 hover:border-blue-300 hover:cursor-grab`
    }, {
        name: 'unsplashImage',
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
    }, {
        tag: `<p className="mt-2">`
    }, {
        text: `Photo by `
    }, {
        tag: `<a href="" className="underline">`
    }, {
        text: `Alice`
    }, {
        tag: `</a>`
    }, {
        text: ` on `
    }, {
        tag: `<a href="https://unsplash.com/?utm_source=code_buddy&utm_medium=referral" className="underline" target="_blank">`
    }, {
        text: `Unsplash`
    }, {
        tag: `</a>`
    }, {
        tag: `</p>`
    }, {
        tag: `</div>`
    }],
    button: [{
        name: 'button',
        tag: `<button className="font-sans text-base text-white bg-blue-500 py-1 px-3 rounded-md hover:border-2 hover:border-blue-300 hover:cursor-grab">`,
        className: `font-sans text-base text-white bg-blue-500 py-1 px-3 rounded-md hover:border-2 hover:border-blue-300 hover:cursor-grab`,
        font: `font-sans`,
        textSize: `text-base`,
        bold: ``,
        italics: ``,
        underline: ``,
        alignment: ``,
        color: `text-white`,
        bgColor: `bg-blue-500`,
        marginT: ``,
        marginR: ``,
        marginB: ``,
        marginL: ``,
        paddingT: `pt-1`,
        paddingR: `pr-3`,
        paddingB: `pb-1`,
        paddingL: `pl-3`,
        borderStyle: ``,
        borderColor: ``,
        borderWidth: ``,
        borderRadius: `rounded-md`,
        hoverBorder: `hover:border-2 hover:border-blue-300 hover:cursor-grab`
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
        tag: `<ol className="list-disc ml-6 hover:border-2 hover:border-blue-300 hover:cursor-grab">`,
        className: `list-disc ml-6 hover:border-2 hover:border-blue-300 hover:cursor-grab`,
        marginT: ``,
        marginR: ``,
        marginB: ``,
        marginL: `ml-6`,
        paddingT: ``,
        paddingR: ``,
        paddingB: ``,
        paddingL: ``,
        listStyle: `list-disc`,
        borderStyle: ``,
        borderColor: ``,
        borderWidth: ``,
        borderRadius: ``,
        hoverBorder: `hover:border-2 hover:border-blue-300 hover:cursor-grab`
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