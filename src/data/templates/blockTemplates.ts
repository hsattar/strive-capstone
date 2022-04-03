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
        type: 'flexContainer',
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
    }],
    pricingCards: [{
        type: 'gridContainer',
        name: `cards container`,
        tag: `<div className="grid grid-cols-3 gap-20 bg-gray-100 pt-8 pb-8 pr-24 pl-24 hover:border-2 hover:border-blue-300 hover:cursor-grab">`,
        className: `grid grid-cols-3 gap-20 bg-gray-100 pt-8 pb-8 pr-24 pl-24 hover:border-2 hover:border-blue-300 hover:cursor-grab`,
        bgColor: `bg-gray-100`,
        marginT: ``,
        marginR: ``,
        marginB: ``,
        marginL: ``,
        paddingT: `pt-8`,
        paddingR: `pr-24`,
        paddingB: `pb-8`,
        paddingL: `pl-24`,
        border: ``,
        display: 'grid',
        flexDirection: '',
        flexJustify: '',
        flexItems: '',
        gridCols: 'grid-cols-3',
        gridGap: 'gap-20',
        hoverBorder: `hover:border-2 hover:border-blue-300 hover:cursor-grab`
    }, {
        type: 'container',
        name: `card container`,
        tag: `<div className="bg-white text-center pt-4 pr-4 pb-4 pl-4 rounded-md">`,
        className: `bg-white text-center pt-4 pr-4 pb-4 pl-4 rounded-md`,
        bgColor: `bg-white`,
        marginT: ``,
        marginR: ``,
        marginB: ``,
        marginL: ``,
        paddingT: `pt-4`,
        paddingR: `pr-4`,
        paddingB: `pb-4`,
        paddingL: `pl-4`,
        border: `rounded-md`,
        display: '',
        flexDirection: '',
        flexJustify: '',
        flexItems: '',
        hoverBorder: `hover:border-2 hover:border-blue-300 hover:cursor-grab`
    }, {
        name: 'h2 heading',
        tag: `<h2 className="text-2xl font-semibold">`,
        className: `text-2xl font-semibold`,
        font: ``,
        textSize: `text-2xl`,
        bold: `font-semibold`,
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
        text: `Basic`
    }, {
        tag: `</h2>`
    }, {
        name: 'h4 heading',
        tag: `<h4 className="text-4xl font-bold mt-3 mb-1">`,
        className: `text-4xl font-bold mt-3 mb-1`,
        font: ``,
        textSize: `text-4xl`,
        bold: `font-bold`,
        italics: ``,
        underline: ``,
        alignment: ``,
        color: ``,
        bgColor: ``,
        marginT: `mt-3`,
        marginR: ``,
        marginB: `mb-1`,
        marginL: ``,
        paddingT: ``,
        paddingR: ``,
        paddingB: ``,
        paddingL: ``,
        border: ``,
    }, {
        text: `£0`
    }, {
        tag: `</h4>`
    }, {
        name: 'paragaraph',
        tag: `<p className="mb-3">`,
        className: `mb-3`,
        font: ``,
        textSize: ``,
        bold: ``,
        italics: ``,
        underline: ``,
        alignment: ``,
        color: ``,
        bgColor: ``,
        marginT: ``,
        marginR: ``,
        marginB: `mb-3`,
        marginL: ``,
        paddingT: ``,
        paddingR: ``,
        paddingB: ``,
        paddingL: ``,
        border: ``,
    }, {
        text: `/month`
    }, {
        tag: `</p>`
    }, {
        name: 'paragaraph',
        tag: `<p className="text-sm font-medium text-gray-500 mb-2.5 mt-2.5 trunctuate">`,
        className: `text-sm font-medium text-gray-500 mb-2.5 mt-2.5 trunctuate`,
        font: ``,
        textSize: `text-sm`,
        bold: `font-medium`,
        italics: ``,
        underline: ``,
        alignment: ``,
        color: `text-gray-500`,
        bgColor: ``,
        marginT: `mt-2.5`,
        marginR: ``,
        marginB: `mb-2.5`,
        marginL: ``,
        paddingT: ``,
        paddingR: ``,
        paddingB: ``,
        paddingL: ``,
        border: ``,
    }, {
        text: `✓ Basic Feature One`
    }, {
        tag: `</p>`
    }, {
        name: 'paragaraph',
        tag: `<p className="text-sm font-medium text-gray-500 mb-2.5 mt-2.5 trunctuate">`,
        className: `text-sm font-medium text-gray-500 mb-2.5 mt-2.5 trunctuate`,
        font: ``,
        textSize: `text-sm`,
        bold: `font-medium`,
        italics: ``,
        underline: ``,
        alignment: ``,
        color: `text-gray-500`,
        bgColor: ``,
        marginT: `mt-2.5`,
        marginR: ``,
        marginB: `mb-2.5`,
        marginL: ``,
        paddingT: ``,
        paddingR: ``,
        paddingB: ``,
        paddingL: ``,
        border: ``,
    }, {
        text: `✓ Basic Feature Two`
    }, {
        tag: `</p>`
    }, {
        name: 'paragaraph',
        tag: `<p className="text-sm font-medium text-gray-500 mb-2.5 mt-2.5 trunctuate">`,
        className: `text-sm font-medium text-gray-500 mb-2.5 mt-2.5 trunctuate`,
        font: ``,
        textSize: `text-sm`,
        bold: `font-medium`,
        italics: ``,
        underline: ``,
        alignment: ``,
        color: `text-gray-500`,
        bgColor: ``,
        marginT: `mt-2.5`,
        marginR: ``,
        marginB: `mb-2.5`,
        marginL: ``,
        paddingT: ``,
        paddingR: ``,
        paddingB: ``,
        paddingL: ``,
        border: ``,
    }, {
        text: `✓ Basic Feature Three`
    }, {
        tag: `</p>`
    }, {
        name: 'paragaraph',
        tag: `<p className="text-sm font-medium text-gray-500 mb-2.5 mt-2.5 trunctuate">`,
        className: `text-sm font-medium text-gray-500 mb-2.5 mt-2.5 trunctuate`,
        font: ``,
        textSize: `text-sm`,
        bold: `font-medium`,
        italics: ``,
        underline: ``,
        alignment: ``,
        color: `text-gray-500`,
        bgColor: ``,
        marginT: `mt-2.5`,
        marginR: ``,
        marginB: `mb-2.5`,
        marginL: ``,
        paddingT: ``,
        paddingR: ``,
        paddingB: ``,
        paddingL: ``,
        border: ``,
    }, {
        text: `✓ Basic Feature Four`
    }, {
        tag: `</p>`
    }, {
        name: 'paragaraph',
        tag: `<p className="text-sm font-medium text-gray-500 mb-2.5 mt-2.5 trunctuate">`,
        className: `text-sm font-medium text-gray-500 mb-2.5 mt-2.5 trunctuate`,
        font: ``,
        textSize: `text-sm`,
        bold: `font-medium`,
        italics: ``,
        underline: ``,
        alignment: ``,
        color: `text-gray-500`,
        bgColor: ``,
        marginT: `mt-2.5`,
        marginR: ``,
        marginB: `mb-2.5`,
        marginL: ``,
        paddingT: ``,
        paddingR: ``,
        paddingB: ``,
        paddingL: ``,
        border: ``,
    }, {
        text: `✓ Basic Feature Five`
    }, {
        tag: `</p>`
    }, {
        tag: `</div>`
    }, {
        type: 'container',
        name: `card container`,
        tag: `<div className="bg-white text-center pt-4 pr-4 pb-4 pl-4 rounded-md">`,
        className: `bg-white text-center pt-4 pr-4 pb-4 pl-4 rounded-md`,
        bgColor: `bg-white`,
        marginT: ``,
        marginR: ``,
        marginB: ``,
        marginL: ``,
        paddingT: `pt-4`,
        paddingR: `pr-4`,
        paddingB: `pb-4`,
        paddingL: `pl-4`,
        border: `rounded-md`,
        display: '',
        flexDirection: '',
        flexJustify: '',
        flexItems: '',
        hoverBorder: `hover:border-2 hover:border-blue-300 hover:cursor-grab`
    }, {
        name: 'h2 heading',
        tag: `<h2 className="text-2xl font-semibold">`,
        className: `text-2xl font-semibold`,
        font: ``,
        textSize: `text-2xl`,
        bold: `font-semibold`,
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
        text: `Pro`
    }, {
        tag: `</h2>`
    }, {
        name: 'h4 heading',
        tag: `<h4 className="text-4xl font-bold mt-3 mb-1">`,
        className: `text-4xl font-bold mt-3 mb-1`,
        font: ``,
        textSize: `text-4xl`,
        bold: `font-bold`,
        italics: ``,
        underline: ``,
        alignment: ``,
        color: ``,
        bgColor: ``,
        marginT: `mt-3`,
        marginR: ``,
        marginB: `mb-1`,
        marginL: ``,
        paddingT: ``,
        paddingR: ``,
        paddingB: ``,
        paddingL: ``,
        border: ``,
    }, {
        text: `£15`
    }, {
        tag: `</h4>`
    }, {
        name: 'paragaraph',
        tag: `<p className="mb-3">`,
        className: `mb-3`,
        font: ``,
        textSize: ``,
        bold: ``,
        italics: ``,
        underline: ``,
        alignment: ``,
        color: ``,
        bgColor: ``,
        marginT: ``,
        marginR: ``,
        marginB: `mb-3`,
        marginL: ``,
        paddingT: ``,
        paddingR: ``,
        paddingB: ``,
        paddingL: ``,
        border: ``,
    }, {
        text: `/month`
    }, {
        tag: `</p>`
    }, {
        name: 'paragaraph',
        tag: `<p className="text-sm font-medium text-gray-500 mb-2.5 mt-2.5 trunctuate">`,
        className: `text-sm font-medium text-gray-500 mb-2.5 mt-2.5 trunctuate`,
        font: ``,
        textSize: `text-sm`,
        bold: `font-medium`,
        italics: ``,
        underline: ``,
        alignment: ``,
        color: `text-gray-500`,
        bgColor: ``,
        marginT: `mt-2.5`,
        marginR: ``,
        marginB: `mb-2.5`,
        marginL: ``,
        paddingT: ``,
        paddingR: ``,
        paddingB: ``,
        paddingL: ``,
        border: ``,
    }, {
        text: `✓ Pro Feature One`
    }, {
        tag: `</p>`
    }, {
        name: 'paragaraph',
        tag: `<p className="text-sm font-medium text-gray-500 mb-2.5 mt-2.5 trunctuate">`,
        className: `text-sm font-medium text-gray-500 mb-2.5 mt-2.5 trunctuate`,
        font: ``,
        textSize: `text-sm`,
        bold: `font-medium`,
        italics: ``,
        underline: ``,
        alignment: ``,
        color: `text-gray-500`,
        bgColor: ``,
        marginT: `mt-2.5`,
        marginR: ``,
        marginB: `mb-2.5`,
        marginL: ``,
        paddingT: ``,
        paddingR: ``,
        paddingB: ``,
        paddingL: ``,
        border: ``,
    }, {
        text: `✓ Pro Feature Two`
    }, {
        tag: `</p>`
    }, {
        name: 'paragaraph',
        tag: `<p className="text-sm font-medium text-gray-500 mb-2.5 mt-2.5 trunctuate">`,
        className: `text-sm font-medium text-gray-500 mb-2.5 mt-2.5 trunctuate`,
        font: ``,
        textSize: `text-sm`,
        bold: `font-medium`,
        italics: ``,
        underline: ``,
        alignment: ``,
        color: `text-gray-500`,
        bgColor: ``,
        marginT: `mt-2.5`,
        marginR: ``,
        marginB: `mb-2.5`,
        marginL: ``,
        paddingT: ``,
        paddingR: ``,
        paddingB: ``,
        paddingL: ``,
        border: ``,
    }, {
        text: `✓ Pro Feature Three`
    }, {
        tag: `</p>`
    }, {
        name: 'paragaraph',
        tag: `<p className="text-sm font-medium text-gray-500 mb-2.5 mt-2.5 trunctuate">`,
        className: `text-sm font-medium text-gray-500 mb-2.5 mt-2.5 trunctuate`,
        font: ``,
        textSize: `text-sm`,
        bold: `font-medium`,
        italics: ``,
        underline: ``,
        alignment: ``,
        color: `text-gray-500`,
        bgColor: ``,
        marginT: `mt-2.5`,
        marginR: ``,
        marginB: `mb-2.5`,
        marginL: ``,
        paddingT: ``,
        paddingR: ``,
        paddingB: ``,
        paddingL: ``,
        border: ``,
    }, {
        text: `✓ Pro Feature Four`
    }, {
        tag: `</p>`
    }, {
        name: 'paragaraph',
        tag: `<p className="text-sm font-medium text-gray-500 mb-2.5 mt-2.5 trunctuate">`,
        className: `text-sm font-medium text-gray-500 mb-2.5 mt-2.5 trunctuate`,
        font: ``,
        textSize: `text-sm`,
        bold: `font-medium`,
        italics: ``,
        underline: ``,
        alignment: ``,
        color: `text-gray-500`,
        bgColor: ``,
        marginT: `mt-2.5`,
        marginR: ``,
        marginB: `mb-2.5`,
        marginL: ``,
        paddingT: ``,
        paddingR: ``,
        paddingB: ``,
        paddingL: ``,
        border: ``,
    }, {
        text: `✓ Pro Feature Five`
    }, {
        tag: `</p>`
    }, {
        tag: `</div>`
    }, {
        type: 'container',
        name: `card container`,
        tag: `<div className="bg-white text-center pt-4 pr-4 pb-4 pl-4 rounded-md">`,
        className: `bg-white text-center pt-4 pr-4 pb-4 pl-4 rounded-md`,
        bgColor: `bg-white`,
        marginT: ``,
        marginR: ``,
        marginB: ``,
        marginL: ``,
        paddingT: `pt-4`,
        paddingR: `pr-4`,
        paddingB: `pb-4`,
        paddingL: `pl-4`,
        border: `rounded-md`,
        display: '',
        flexDirection: '',
        flexJustify: '',
        flexItems: '',
        hoverBorder: `hover:border-2 hover:border-blue-300 hover:cursor-grab`
    }, {
        name: 'h2 heading',
        tag: `<h2 className="text-2xl font-semibold">`,
        className: `text-2xl font-semibold`,
        font: ``,
        textSize: `text-2xl`,
        bold: `font-semibold`,
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
        text: `Enterprise`
    }, {
        tag: `</h2>`
    }, {
        name: 'h4 heading',
        tag: `<h4 className="text-4xl font-bold mt-3 mb-1">`,
        className: `text-4xl font-bold mt-3 mb-1`,
        font: ``,
        textSize: `text-4xl`,
        bold: `font-bold`,
        italics: ``,
        underline: ``,
        alignment: ``,
        color: ``,
        bgColor: ``,
        marginT: `mt-3`,
        marginR: ``,
        marginB: `mb-1`,
        marginL: ``,
        paddingT: ``,
        paddingR: ``,
        paddingB: ``,
        paddingL: ``,
        border: ``,
    }, {
        text: `£50`
    }, {
        tag: `</h4>`
    }, {
        name: 'paragaraph',
        tag: `<p className="mb-3">`,
        className: `mb-3`,
        font: ``,
        textSize: ``,
        bold: ``,
        italics: ``,
        underline: ``,
        alignment: ``,
        color: ``,
        bgColor: ``,
        marginT: ``,
        marginR: ``,
        marginB: `mb-3`,
        marginL: ``,
        paddingT: ``,
        paddingR: ``,
        paddingB: ``,
        paddingL: ``,
        border: ``,
    }, {
        text: `/month`
    }, {
        tag: `</p>`
    }, {
        name: 'paragaraph',
        tag: `<p className="text-sm font-medium text-gray-500 mb-2.5 mt-2.5 trunctuate">`,
        className: `text-sm font-medium text-gray-500 mb-2.5 mt-2.5 trunctuate`,
        font: ``,
        textSize: `text-sm`,
        bold: `font-medium`,
        italics: ``,
        underline: ``,
        alignment: ``,
        color: `text-gray-500`,
        bgColor: ``,
        marginT: `mt-2.5`,
        marginR: ``,
        marginB: `mb-2.5`,
        marginL: ``,
        paddingT: ``,
        paddingR: ``,
        paddingB: ``,
        paddingL: ``,
        border: ``,
    }, {
        text: `✓ Enterprise Feature One`
    }, {
        tag: `</p>`
    }, {
        name: 'paragaraph',
        tag: `<p className="text-sm font-medium text-gray-500 mb-2.5 mt-2.5 trunctuate">`,
        className: `text-sm font-medium text-gray-500 mb-2.5 mt-2.5 trunctuate`,
        font: ``,
        textSize: `text-sm`,
        bold: `font-medium`,
        italics: ``,
        underline: ``,
        alignment: ``,
        color: `text-gray-500`,
        bgColor: ``,
        marginT: `mt-2.5`,
        marginR: ``,
        marginB: `mb-2.5`,
        marginL: ``,
        paddingT: ``,
        paddingR: ``,
        paddingB: ``,
        paddingL: ``,
        border: ``,
    }, {
        text: `✓ Enterprise Feature Two`
    }, {
        tag: `</p>`
    }, {
        name: 'paragaraph',
        tag: `<p className="text-sm font-medium text-gray-500 mb-2.5 mt-2.5 trunctuate">`,
        className: `text-sm font-medium text-gray-500 mb-2.5 mt-2.5 trunctuate`,
        font: ``,
        textSize: `text-sm`,
        bold: `font-medium`,
        italics: ``,
        underline: ``,
        alignment: ``,
        color: `text-gray-500`,
        bgColor: ``,
        marginT: `mt-2.5`,
        marginR: ``,
        marginB: `mb-2.5`,
        marginL: ``,
        paddingT: ``,
        paddingR: ``,
        paddingB: ``,
        paddingL: ``,
        border: ``,
    }, {
        text: `✓ Enterprise Feature Three`
    }, {
        tag: `</p>`
    }, {
        name: 'paragaraph',
        tag: `<p className="text-sm font-medium text-gray-500 mb-2.5 mt-2.5 trunctuate">`,
        className: `text-sm font-medium text-gray-500 mb-2.5 mt-2.5 trunctuate`,
        font: ``,
        textSize: `text-sm`,
        bold: `font-medium`,
        italics: ``,
        underline: ``,
        alignment: ``,
        color: `text-gray-500`,
        bgColor: ``,
        marginT: `mt-2.5`,
        marginR: ``,
        marginB: `mb-2.5`,
        marginL: ``,
        paddingT: ``,
        paddingR: ``,
        paddingB: ``,
        paddingL: ``,
        border: ``,
    }, {
        text: `✓ Enterprise Feature Four`
    }, {
        tag: `</p>`
    }, {
        name: 'paragaraph',
        tag: `<p className="text-sm font-medium text-gray-500 mb-2.5 mt-2.5 trunctuate">`,
        className: `text-sm font-medium text-gray-500 mb-2.5 mt-2.5 trunctuate`,
        font: ``,
        textSize: `text-sm`,
        bold: `font-medium`,
        italics: ``,
        underline: ``,
        alignment: ``,
        color: `text-gray-500`,
        bgColor: ``,
        marginT: `mt-2.5`,
        marginR: ``,
        marginB: `mb-2.5`,
        marginL: ``,
        paddingT: ``,
        paddingR: ``,
        paddingB: ``,
        paddingL: ``,
        border: ``,
    }, {
        text: `✓ Enterprise Feature Five`
    }, {
        tag: `</p>`
    }, {
        tag: `</div>`
    }, {
        tag: `</div>`
    }],
    testimonialCards: [{
        type: 'gridContainer',
        name: `testimonial cards container`,
        tag: `<div className="grid grid-cols-2 gap-4 bg-gray-100 pt-6 pb-6 pr-8 pl-8 hover:border-2 hover:border-blue-300 hover:cursor-grab">`,
        className: `grid grid-cols-2 gap-4 bg-gray-100 pt-6 pb-6 pr-8 pl-8 hover:border-2 hover:border-blue-300 hover:cursor-grab`,
        bgColor: `bg-gray-100`,
        marginT: ``,
        marginR: ``,
        marginB: ``,
        marginL: ``,
        paddingT: `pt-6`,
        paddingR: `pr-8`,
        paddingB: `pb-6`,
        paddingL: `pl-8`,
        border: ``,
        display: 'grid',
        flexDirection: '',
        flexJustify: '',
        flexItems: '',
        gridCols: 'grid-cols-2',
        gridGap: 'gap-4',
        hoverBorder: `hover:border-2 hover:border-blue-300 hover:cursor-grab`
    }, {
        type: 'container',
        name: `card container`,
        tag: `<div className="bg-white text-center p-4 rounded-md flex items-center">`,
        className: `bg-white text-center p-4 rounded-md flex items-center`,
        bgColor: `bg-white`,
        marginT: ``,
        marginR: ``,
        marginB: ``,
        marginL: ``,
        paddingT: `pt-4`,
        paddingR: `pr-4`,
        paddingB: `pb-4`,
        paddingL: `pl-4`,
        border: `rounded-md`,
        display: '',
        flexDirection: '',
        flexJustify: '',
        flexItems: '',
        hoverBorder: `hover:border-2 hover:border-blue-300 hover:cursor-grab`
    }, {
        type: 'container',
        name: `image container`,
        tag: `<div className="flex flex-col w-1/4 items-center">`,
        className: `flex flex-col w-1/4 items-center`,
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
        display: 'flex',
        flexDirection: 'flex-col',
        flexJustify: '',
        flexItems: 'items-center',
        hoverBorder: ``
    }, {
        type: 'single',
        name: 'image',
        tag: `<img src="https://ui-avatars.com/api/?name=Alice+Smith" className="rounded-full h-[64px] w-[64px]" />`,
        className: `rounded-full h-[64px] w-[64px]`,
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
        hoverBorder: ``
    }, {
        name: 'h4 heading',
        tag: `<h4 className="text-xl font-medium text-gray-700 mt-2">`,
        className: `text-xl font-medium text-gray-700 mt-2`,
        font: ``,
        textSize: `text-xl`,
        bold: `font-medium`,
        italics: ``,
        underline: ``,
        alignment: ``,
        color: `text-gray-700`,
        bgColor: ``,
        marginT: `mt-2`,
        marginR: ``,
        marginB: ``,
        marginL: ``,
        paddingT: ``,
        paddingR: ``,
        paddingB: ``,
        paddingL: ``,
        border: ``,
    }, {
        text: `Alice Smith`
    }, {
        tag: `</h4>`
    }, {
        tag: `</div>`
    }, {
        type: 'container',
        name: `text container`,
        tag: `<div className="flex flex-col text-center w-full">`,
        className: `flex flex-col text-center w-full`,
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
        display: 'flex',
        flexDirection: 'flex-col',
        flexJustify: '',
        flexItems: '',
        hoverBorder: ``
    }, {
        name: 'pargaraph',
        tag: `<p className="font-medium text-gray-500 my-2.5 trunctuate p-3">`,
        className: `font-medium my-2.5 trunctuate p-3`,
        font: ``,
        textSize: ``,
        bold: `font-medium`,
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
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    }, {
        tag: `</p>`
    }, {
        tag: `</div>`
    }, {
        tag: `</div>`
    }, {
        type: 'container',
        name: `card container`,
        tag: `<div className="bg-white text-center p-4 rounded-md flex items-center">`,
        className: `bg-white text-center p-4 rounded-md flex items-center`,
        bgColor: `bg-white`,
        marginT: ``,
        marginR: ``,
        marginB: ``,
        marginL: ``,
        paddingT: `pt-4`,
        paddingR: `pr-4`,
        paddingB: `pb-4`,
        paddingL: `pl-4`,
        border: `rounded-md`,
        display: '',
        flexDirection: '',
        flexJustify: '',
        flexItems: '',
        hoverBorder: `hover:border-2 hover:border-blue-300 hover:cursor-grab`
    }, {
        type: 'container',
        name: `image container`,
        tag: `<div className="flex flex-col w-1/4 items-center">`,
        className: `flex flex-col w-1/4 items-center`,
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
        display: 'flex',
        flexDirection: 'flex-col',
        flexJustify: '',
        flexItems: 'items-center',
        hoverBorder: ``
    }, {
        type: 'single',
        name: 'image',
        tag: `<img src="https://ui-avatars.com/api/?name=Bob+Doe" className="rounded-full h-[64px] w-[64px]" />`,
        className: `rounded-full h-[64px] w-[64px]`,
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
        hoverBorder: ``
    }, {
        name: 'h4 heading',
        tag: `<h4 className="text-xl font-medium text-gray-700 mt-2">`,
        className: `text-xl font-medium text-gray-700 mt-2`,
        font: ``,
        textSize: `text-xl`,
        bold: `font-medium`,
        italics: ``,
        underline: ``,
        alignment: ``,
        color: `text-gray-700`,
        bgColor: ``,
        marginT: `mt-2`,
        marginR: ``,
        marginB: ``,
        marginL: ``,
        paddingT: ``,
        paddingR: ``,
        paddingB: ``,
        paddingL: ``,
        border: ``,
    }, {
        text: `Bob Doe`
    }, {
        tag: `</h4>`
    }, {
        tag: `</div>`
    }, {
        type: 'container',
        name: `text container`,
        tag: `<div className="flex flex-col text-center w-full">`,
        className: `flex flex-col text-center w-full`,
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
        display: 'flex',
        flexDirection: 'flex-col',
        flexJustify: '',
        flexItems: '',
        hoverBorder: ``
    }, {
        name: 'pargaraph',
        tag: `<p className="font-medium text-gray-500 my-2.5 trunctuate p-3">`,
        className: `font-medium my-2.5 trunctuate p-3`,
        font: ``,
        textSize: ``,
        bold: `font-medium`,
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
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    }, {
        tag: `</p>`
    }, {
        tag: `</div>`
    }, {
        tag: `</div>`
    }, {
        type: 'container',
        name: `card container`,
        tag: `<div className="bg-white text-center p-4 rounded-md flex items-center">`,
        className: `bg-white text-center p-4 rounded-md flex items-center`,
        bgColor: `bg-white`,
        marginT: ``,
        marginR: ``,
        marginB: ``,
        marginL: ``,
        paddingT: `pt-4`,
        paddingR: `pr-4`,
        paddingB: `pb-4`,
        paddingL: `pl-4`,
        border: `rounded-md`,
        display: '',
        flexDirection: '',
        flexJustify: '',
        flexItems: '',
        hoverBorder: `hover:border-2 hover:border-blue-300 hover:cursor-grab`
    }, {
        type: 'container',
        name: `image container`,
        tag: `<div className="flex flex-col w-1/4 items-center">`,
        className: `flex flex-col w-1/4 items-center`,
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
        display: 'flex',
        flexDirection: 'flex-col',
        flexJustify: '',
        flexItems: 'items-center',
        hoverBorder: ``
    }, {
        type: 'single',
        name: 'image',
        tag: `<img src="https://ui-avatars.com/api/?name=Carl+Cook" className="rounded-full h-[64px] w-[64px]" />`,
        className: `rounded-full h-[64px] w-[64px]`,
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
        hoverBorder: ``
    }, {
        name: 'h4 heading',
        tag: `<h4 className="text-xl font-medium text-gray-700 mt-2">`,
        className: `text-xl font-medium text-gray-700 mt-2`,
        font: ``,
        textSize: `text-xl`,
        bold: `font-medium`,
        italics: ``,
        underline: ``,
        alignment: ``,
        color: `text-gray-700`,
        bgColor: ``,
        marginT: `mt-2`,
        marginR: ``,
        marginB: ``,
        marginL: ``,
        paddingT: ``,
        paddingR: ``,
        paddingB: ``,
        paddingL: ``,
        border: ``,
    }, {
        text: `Carl Cook`
    }, {
        tag: `</h4>`
    }, {
        tag: `</div>`
    }, {
        type: 'container',
        name: `text container`,
        tag: `<div className="flex flex-col text-center w-full">`,
        className: `flex flex-col text-center w-full`,
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
        display: 'flex',
        flexDirection: 'flex-col',
        flexJustify: '',
        flexItems: '',
        hoverBorder: ``
    }, {
        name: 'pargaraph',
        tag: `<p className="font-medium text-gray-500 my-2.5 trunctuate p-3">`,
        className: `font-medium my-2.5 trunctuate p-3`,
        font: ``,
        textSize: ``,
        bold: `font-medium`,
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
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    }, {
        tag: `</p>`
    }, {
        tag: `</div>`
    }, {
        tag: `</div>`
    }, {
        type: 'container',
        name: `card container`,
        tag: `<div className="bg-white text-center p-4 rounded-md flex items-center">`,
        className: `bg-white text-center p-4 rounded-md flex items-center`,
        bgColor: `bg-white`,
        marginT: ``,
        marginR: ``,
        marginB: ``,
        marginL: ``,
        paddingT: `pt-4`,
        paddingR: `pr-4`,
        paddingB: `pb-4`,
        paddingL: `pl-4`,
        border: `rounded-md`,
        display: '',
        flexDirection: '',
        flexJustify: '',
        flexItems: '',
        hoverBorder: `hover:border-2 hover:border-blue-300 hover:cursor-grab`
    }, {
        type: 'container',
        name: `image container`,
        tag: `<div className="flex flex-col w-1/4 items-center">`,
        className: `flex flex-col w-1/4 items-center`,
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
        display: 'flex',
        flexDirection: 'flex-col',
        flexJustify: '',
        flexItems: 'items-center',
        hoverBorder: ``
    }, {
        type: 'single',
        name: 'image',
        tag: `<img src="https://ui-avatars.com/api/?name=Dan+Man" className="rounded-full h-[64px] w-[64px]" />`,
        className: `rounded-full h-[64px] w-[64px]`,
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
        hoverBorder: ``
    }, {
        name: 'h4 heading',
        tag: `<h4 className="text-xl font-medium text-gray-700 mt-2">`,
        className: `text-xl font-medium text-gray-700 mt-2`,
        font: ``,
        textSize: `text-xl`,
        bold: `font-medium`,
        italics: ``,
        underline: ``,
        alignment: ``,
        color: `text-gray-700`,
        bgColor: ``,
        marginT: `mt-2`,
        marginR: ``,
        marginB: ``,
        marginL: ``,
        paddingT: ``,
        paddingR: ``,
        paddingB: ``,
        paddingL: ``,
        border: ``,
    }, {
        text: `Dan Man`
    }, {
        tag: `</h4>`
    }, {
        tag: `</div>`
    }, {
        type: 'container',
        name: `text container`,
        tag: `<div className="flex flex-col text-center w-full">`,
        className: `flex flex-col text-center w-full`,
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
        display: 'flex',
        flexDirection: 'flex-col',
        flexJustify: '',
        flexItems: '',
        hoverBorder: ``
    }, {
        name: 'pargaraph',
        tag: `<p className="font-medium text-gray-500 my-2.5 trunctuate p-3">`,
        className: `font-medium my-2.5 trunctuate p-3`,
        font: ``,
        textSize: ``,
        bold: `font-medium`,
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
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    }, {
        tag: `</p>`
    }, {
        tag: `</div>`
    }, {
        tag: `</div>`
    }, {
        tag: `</div>`
    }],
    layout_2x1_1: [{
        type: 'gridContainer',
        name: `2x1 container`,
        tag: `<div className="grid grid-cols-2 gap-4 pt-6 pb-6 pr-8 pl-8 hover:border-2 hover:border-blue-300 hover:cursor-grab">`,
        className: `grid grid-cols-2 gap-4 pt-6 pb-6 pr-8 pl-8 hover:border-2 hover:border-blue-300 hover:cursor-grab`,
        bgColor: ``,
        marginT: ``,
        marginR: ``,
        marginB: ``,
        marginL: ``,
        paddingT: `pt-6`,
        paddingR: `pr-8`,
        paddingB: `pb-6`,
        paddingL: `pl-8`,
        border: ``,
        display: 'grid',
        flexDirection: '',
        flexJustify: '',
        flexItems: '',
        gridCols: 'grid-cols-2',
        gridGap: 'gap-4',
        hoverBorder: `hover:border-2 hover:border-blue-300 hover:cursor-grab`
    }, {
        type: 'single',
        name: 'image',
        tag: `<img src="/assets/zuck.webp" className="" />`,
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
        paddingL: ``,
        borderStyle: ``,
        borderColor: ``,
        borderWidth: ``,
        borderRadius: ``,
    }, {
        type: 'flexContainer',
        name: `text container`,
        tag: `<div className="bg-white text-center p-4 flex flex-col justify-center">`,
        className: `bg-white text-center p-4 flex flex-col justify-center`,
        bgColor: `bg-white`,
        marginT: ``,
        marginR: ``,
        marginB: ``,
        marginL: ``,
        paddingT: `pt-6`,
        paddingR: `pr-8`,
        paddingB: `pb-6`,
        paddingL: `pl-8`,
        border: ``,
        display: 'flex',
        flexDirection: 'flex-col',
        flexJustify: 'justify-center',
        flexItems: '',
        gridCols: '',
        gridGap: '',
        hoverBorder: ``
    }, { 
        type: 'element',
        name: 'h3 heading',
        tag: `<h3 className="font-semibold text-3xl p-2">`,
        className: `font-semibold text-3xl p-2`,
        font: ``,
        textSize: `text-3xl`,
        bold: `font-semibold`,
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
        text: `Mark Zuckerberg`
    }, {
        tag: `</h3>`
    }, { 
        type: 'element',
        name: 'paragraph',
        tag: `<p className="font-medium my-2.5 trunctuate p-2">`,
        className: `font-medium my-2.5 trunctuate p-2`,
        font: ``,
        textSize: ``,
        bold: `font-medium`,
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
        hoverBorder: ``
    }, {
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    }, {
        tag: `</p>`
    }, { 
        type: 'element',
        name: 'paragraph',
        tag: `<p className="font-medium my-2.5 trunctuate p-2">`,
        className: `font-medium my-2.5 trunctuate p-2`,
        font: ``,
        textSize: ``,
        bold: `font-medium`,
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
        hoverBorder: ``
    }, {
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    }, {
        tag: `</p>`
    }, {
        tag: `</div>`
    }, {
        tag: `</div>`
    }]
}

export default blockTemplates