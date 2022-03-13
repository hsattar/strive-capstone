import { useParams, Navigate } from 'react-router-dom'

export default function ViewWebsiteRedirect() {

    const { websiteName } = useParams()

    return <Navigate to={`/ws/${websiteName}/home`} />
}
