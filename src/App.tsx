import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import EditWebsite from './pages/EditWebsite'
import NotFound from './pages/NotFound'

export default function App() {

  const isLoggedIn = useSelector((state: IReduxStore) => state.user.isLoggedIn)

  return (
    <Router>
      { isLoggedIn && <Navbar /> }
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/ws-edit/:websiteId" element={ <EditWebsite /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </Router>
  )
}