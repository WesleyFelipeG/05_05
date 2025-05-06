import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home/Header'
import Header from './pages/home/Header'
//import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
  </StrictMode>,
)
