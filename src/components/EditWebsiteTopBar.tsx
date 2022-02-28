export default function EditWebsiteTopBar() {
    return (
        <nav className="bg-white px-2 sm:px-4 py-1">
            <div className="flex flex-wrap justify-between items-center mx-auto">
                <div>
                    <button className="text-center border-blue-500 hover:bg-blue-100 py-1 px-4 mr-3 rounded-md text-blue-500">Undo</button>
                    <button className="text-center border-blue-500 hover:bg-blue-100 py-1 px-4 mr-3 rounded-md text-blue-500">Redo</button>
                </div>
                <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" stroke-width="1" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" stroke-width="1" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" stroke-width="1" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                </div>
                <div>
                    <button className="text-center border-blue-500 hover:bg-blue-100 py-1 px-4 mr-3 rounded-md text-blue-500">Save</button>
                    <button className="text-center border-blue-500 hover:bg-blue-100 py-1 px-4 mr-0 rounded-md text-blue-500">Publish</button>
                </div>
            </div>
        </nav>
    )
}