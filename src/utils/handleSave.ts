import React from 'react'

// const handleSave = (codeBlocks: ICodeBlock[]) => {
//     const flatCodeArray = codeBlocks.map(block => block.code).flat()
//     console.log(flatCodeArray)
//     const newFlatCodeArray = flatCodeArray.map(block => {
//         if (block.hasOwnProperty('hoverBorder')) {
//             const { name, tag, className, hoverBorder,  ...htmlProperties } = block
//             const htmlValues = Object.values(htmlProperties) 
//             const classNamesAsString = htmlValues.join(' ')
//             block.className = classNamesAsString
//             const openingTag = block.tag.split('className')[0]
//             block.tag = openingTag.concat(`className="${classNamesAsString}">`)
//             return block
//         } else {
//             return block
//         }
//     })
//     console.log(newFlatCodeArray)
//     const codeString =  newFlatCodeArray.map(block => block.tag || block.text).join('')
//     console.log(codeString)
//     return codeString
// }

// export default handleSave