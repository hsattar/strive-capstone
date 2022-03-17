import { useState } from "react"

type selectMenuOptions = 'font' | 'textSize' | 'color' | 'bgColor' | 'marginT' | 'marginR' | 'marginB' | 'marginL' | 'paddingT' | 'paddingR' | 'paddingB' | 'paddingL'
 
interface IProps {
    type: selectMenuOptions
    containerClass: string
    initialValue: string,
    listOfValues: string[]
    onClick: (value: string, type: elementToEditOptions) => void
}

export default function CustomSelectMenu({ containerClass, initialValue, listOfValues, type, onClick }: IProps) {

    const [showValues, setShowValues] = useState(false)

    return (
        <div className={containerClass}>
            <button onClick={() => setShowValues(prev => !prev)} className="transition duration-200 border capitalize mx-0 px-3 py-1 my-1 cursor-pointer font-normal text-md rounded-md w-full text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset text-center">
                {initialValue}
            </button>
            <div className={`${!showValues && 'hidden'} absolute z-20 max-h-[350px] overflow-y-scroll my-0 text-base list-none bg-white rounded divide-y divide-gray-100 shadow w-full`}>
                <ul className="py-1">
                    { listOfValues.map((value, index) => (
                    <li key={index}>
                        <button 
                            onClick={() => {
                                onClick(value, type)
                                setShowValues(false)
                            }} 
                            className={ 
                                type === 'font' ? `block w-full py-1 px-4 text-sm text-gray-700 hover:bg-gray-100 capitalize font-${value}` : 
                                type === 'color' ? `block w-full py-1 px-4 text-sm ${value} hover:bg-gray-100 capitalize` :
                                type === 'bgColor' ? `block w-full py-1 px-4 text-sm text-white ${value} hover:bg-gray-100 capitalize` :
                                'block w-full py-1 px-4 text-sm text-gray-700 hover:bg-gray-100 capitalize'
                            }
                        >
                            {value}
                        </button>
                    </li>
                    )) }
                </ul>
            </div>
        </div>
    )
}