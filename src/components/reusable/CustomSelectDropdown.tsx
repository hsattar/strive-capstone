import { useState } from "react"

interface IProps {
    containerClass: string
    initialValue: string,
    listOfValues: string[]
    onClick: (value: string) => void
}

export default function CustomSelectDropdown({ containerClass, initialValue, listOfValues, onClick }: IProps) {

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
                                onClick(value)
                                setShowValues(false)
                            }} 
                            className="block w-full py-1 px-4 text-sm text-gray-700 hover:bg-gray-100 capitalize">
                            {value}
                        </button>
                    </li>
                    )) }
                </ul>
            </div>
        </div>
    )
}