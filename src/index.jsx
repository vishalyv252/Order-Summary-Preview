import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const demo=ReactDOM.createRoot(document.getElementById('demo'));
demo.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)