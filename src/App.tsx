import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import EditWebsite from './pages/EditWebsite'
import NotFound from './pages/NotFound'
import PreviewWebsite from './pages/PreviewWebsite'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/ws-edit/:websiteName/:pageSelected" element={ <EditWebsite /> } />
        <Route path="/ws-preview/:websiteName/:pageSelected" element={ <PreviewWebsite /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </Router>
  )
}