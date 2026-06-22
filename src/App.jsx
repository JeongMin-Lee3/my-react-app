import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import LifeCyclePage from './pages/LifeCyclePage'
import FetchPage from './pages/FetchPage'
import AxiosPage from './pages/AxiosPage'
import TodoPage from './pages/TodoPage'
import './global.css'
import PlusPage from './pages/PlusPage'
import MinusPage from './pages/MinusPage'
function App() {

  return (
    <BrowserRouter>
      <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/lifecycle" element={<LifeCyclePage />} />
          <Route path="/fetch" element={<FetchPage />} />
          <Route path="/axios" element={<AxiosPage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/plus" element={<PlusPage />} />
          <Route path="/minus" element={<MinusPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
