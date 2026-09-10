import './style.css'
import React from 'react'
import ReactDom from 'react-dom/client'

import "./i18n";

import App from './App'

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

