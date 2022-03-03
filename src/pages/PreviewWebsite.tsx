import parse from 'html-react-parser'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function PreviewWebsite() {

  const code = useSelector((state: IReduxStore) => state.website.code)

  useEffect(() => {
    // need to fetch from database and display code as redux xstore gets deleted on reload
  }, [])

  return (
    <>
      { parse(code) }
    </>
  )
}