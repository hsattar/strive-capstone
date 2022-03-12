import { Link } from 'react-router-dom'
import useAxios from '../hooks/useAxios'

interface IProps {
    website: IWesbite
    handleDeleteWebsite: (websiteName: string, websiteId: string) => void
}

export default function SingleWebsite({ website, handleDeleteWebsite }: IProps) {
    return (
        <div className="flex justify-between py-6 border-b-[1px] border-gray-200">
            <a href={`/ws-preview/${website.name}/home`} target="_blank" className="text-2xl">{website.name}</a>
            <div className="flex items-center">
                <Link to={`/ws-edit/${website.name}/home`} className="bg-green-500 hover:bg-green-600 py-1 px-5 mr-3 rounded-md text-white select-none">Edit</Link>
                <button onClick={() => handleDeleteWebsite(website.name, website._id)} className="bg-red-500 hover:bg-red-600 py-1 px-5 mr-3 rounded-md text-white select-none">Delete</button>
            </div>
        </div>
    )
}