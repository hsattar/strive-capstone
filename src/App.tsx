import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import EditWebsite from './pages/EditWebsite'
import NotFound from './pages/NotFound'
import PreviewWebsite from './pages/PreviewWebsite'
import PrivateRoute from './pages/PrivateRoute'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <PrivateRoute><Home /></PrivateRoute> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/ws-edit/:websiteName/:pageSelected" element={ <PrivateRoute><EditWebsite /></PrivateRoute> } />
        <Route path="/ws-preview/:websiteName/:pageSelected" element={ <PrivateRoute><PreviewWebsite /></PrivateRoute> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </Router>
  )
}