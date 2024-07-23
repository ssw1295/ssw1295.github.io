import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './pages/App/index'

import './index.css'


const rootDiv = document.getElementById('root')
if (!rootDiv) {
  throw new Error('no root element')
}
const childDiv = rootDiv.firstElementChild
// sd

const root = ReactDOM.createRoot(rootDiv)

root.render(
  <React.StrictMode>
    <App
      children={
        childDiv
      }
    >
    </App>
  </React.StrictMode>
)