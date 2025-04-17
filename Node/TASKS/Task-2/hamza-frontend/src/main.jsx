import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Rout from './Routes/Rout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Rout />
  </StrictMode>,
)
