import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

import './global.css'
import './components/WidgetButton/WidgetButton.css'
import './components/WidgetForm/WidgetForm.css'
import './components/WidgetForm/Steps/Steps.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
