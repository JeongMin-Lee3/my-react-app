import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>          // StrictMode는 개발 환경에서 컴포넌트의 중복 렌더링을 방지하는 기능
    <App />
  // </StrictMode>,
)
