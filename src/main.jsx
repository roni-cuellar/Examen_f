import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'

import './index.css'
import App from './App.jsx'

// React muestra la aplicación en el elemento con id root.
createRoot(document.getElementById('root')).render(

  <StrictMode>
      {/* BrowserRouter permite cambiar de página y actualizar la URL. */}
      <BrowserRouter>
      <App />
      </BrowserRouter>
  </StrictMode>

)
