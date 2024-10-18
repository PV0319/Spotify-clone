import React from 'react'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import PlayercontextProvider from './context/PlayerContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <PlayercontextProvider> 
      <App />
    </PlayercontextProvider> 
    </BrowserRouter>
  </React.StrictMode>,
)
