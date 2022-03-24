const blockTemplates = {
    heading: [{ 
        type: 'element',
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
        type: 'element',
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
        type: 'single',
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
        type: 'image-container',
        name: `unsplash container`,
        tag: `<div className="flex flex-col items-center p-2 hover:border-2 hover:border-blue-300 hover:cursor-grab">`,
        className: `flex flex-col items-center pt-2 pr-2 pb-2 pl-2 hover:border-2 hover:border-blue-300 hover:cursor-grab`,
        borderStyle: ``,
        borderColor: ``,
        borderWidth: ``,
        borderRadius: ``,
        marginT: ``,
        marginR: ``,
        marginB: ``,
        marginL: ``,
        paddingT: `2`,
        paddingR: `2`,
        paddingB: `2`,
        paddingL: `2`,
        display: 'flex',
        flexDirection: 'flex-col',
        flexItems: 'items-center',
        flexJustify: '',
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
        type: 'element',
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
        type: 'single',
        name: 'youtube',
        tag: `<iframe src="" className="">`,
        className: ``,
        allow: ``,
        height: ``,
        width: ``,
    }],
    list: [{

        type: 'nested-element',
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
    }],
    navbar: [{
        type: 'container',
        name: `navbar container`,
        tag: `<div className="flex flex-row justify-between items-center p-2 bg-gray-200 hover:border-2 hover:border-blue-300 hover:cursor-grab">`,
        className: `flex flex-row justify-between items-center pt-2 pr-2 pb-2 pl-2 bg-gray-200 hover:border-2 hover:border-blue-300 hover:cursor-grab`,
        bgColor: `bg-gray-200`,
        marginT: ``,
        marginR: ``,
        marginB: ``,
        marginL: ``,
        paddingT: `pt-2`,
        paddingR: `pr-2`,
        paddingB: `pb-2`,
        paddingL: `pl-2`,
        border: ``,
        display: 'flex',
        flexDirection: 'flex-row',
        flexJustify: 'justify-between',
        flexItems: 'items-center',
        hoverBorder: `hover:border-2 hover:border-blue-300 hover:cursor-grab`
    }, {
        name: 'h2 heading',
        tag: `<h2 className="font-sans text-xl">`,
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
        tag: `</h2>`
    }, {
        name: `links container`,
        tag: `<div className="flex items-center">`,
        className: `flex items-center`
    }, {
        name: 'Paragraph',
        tag: `<p className="font-sans text-base mr-2">`,
        className: `font-sans text-base mr-2`,
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
        text: `Text 1`
    }, {
        tag: `</p>`
    }, {
        name: 'Paragraph',
        tag: `<p className="font-sans text-base">`,
        className: `font-sans text-base`,
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
        text: `Text 2`
    }, {
        tag: `</p>`
    }, {
        tag: `</div>`
    }, {
        tag: `</div>`
    }]
}

export default blockTemplates