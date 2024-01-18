import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './style2.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './Contexts/CustomHooks.tsx'
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_RIGHT,
  timeout: 6000,
  offset: '50px',
  // you can also just use 'scale'
  transition: transitions.SCALE,
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <AlertProvider template={AlertTemplate} {...options}>
    <App />
    </AlertProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
