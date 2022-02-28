import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { useSelector } from 'react-redux'

export default function App() {

  const isLoggedIn = useSelector((state: IReduxStore) => state.user.isLoggedIn)

  return (
    <Router>
      { isLoggedIn && <Navbar /> }
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
      </Routes>
    </Router>
  )
}