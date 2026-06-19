import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import './global.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          
      </Routes>
  </BrowserRouter>
  )
}

export default App
