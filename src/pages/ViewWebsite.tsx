import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser'
import useAxios from '../hooks/useAxios'
import { Helmet } from 'react-helmet-async'

export default function ViewWebsite() {

    const axiosRequest = useAxios()
    const { websiteName, pageSelected } = useParams()

    const [code, setCode] = useState('')

    const fetchWebsiteCode = async () => {
        try {
            const response = await axiosRequest(`/public/${websiteName}/${pageSelected}/production/code`, 'GET')
            if (response.status === 200) {
                setCode(response.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchWebsiteCode()
    }, [websiteName, pageSelected])

  return (
    <>
    <Helmet>
      <title>{websiteName}</title>
      <script src="https://cdn.tailwindcss.com"></script>
    </Helmet>
    <div className="overflow-y-scroll min-h-[100vh] max-h-[100vh]">
      { parse(code) }
    </div>
    </>
  )
}