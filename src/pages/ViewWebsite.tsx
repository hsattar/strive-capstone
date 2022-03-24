import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser'
import useAxios from '../hooks/useAxios'
import { Helmet } from 'react-helmet-async'

export default function ViewWebsite() {

    const axiosRequest = useAxios()
    const { websiteName, pageSelected } = useParams()

    const [code, setCode] = useState('')
    const [websiteTitle, setWebsiteTitle] = useState('')
    const [websiteDescription, setWebsiteDescription] = useState('')

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

    const fetchWebsiteDetails = async () => {
      try {
          const response = await axiosRequest(`/websites/${websiteName}/${pageSelected}/details`, 'GET')
          if (response.status === 200) {
              setWebsiteTitle(response.data.title)
              setWebsiteDescription(response.data.description)
          }
      } catch (error) {
          console.log(error)
      }
  }

    useEffect(() => {
        fetchWebsiteCode()
        fetchWebsiteDetails()
    }, [websiteName, pageSelected])

  return (
    <>
    <Helmet>
      <title>{websiteTitle}</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <meta name="robots" content="index, follow"></meta>
      <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
      <meta name="description" content={websiteDescription}></meta>
    </Helmet>
    <div className="overflow-y-scroll min-h-[100vh] max-h-[100vh]">
      { parse(code) }
    </div>
    </>
  )
}