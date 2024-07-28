import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './pages/App/index'

import './index.css'


const rootEl = document.getElementById('root')
if (!rootEl) {
  throw new Error('no root element')
}

const rootInnerContentEl = rootEl.firstElementChild

const root = ReactDOM.createRoot(rootEl)

root.render(
  <React.StrictMode>
    <App
      content={
        rootInnerContentEl
      }
    >
    </App>
  </React.StrictMode>
)