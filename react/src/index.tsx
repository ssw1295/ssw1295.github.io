import React from 'react'
import ReactDOM from 'react-dom/client'
import _ from 'lodash'

import Main from './pages/Main/index'
import Post from './pages/Post/index'

import './index.css'

type ValidRouteBase = '' | 'post'


const routeBase = _.split(window.location.pathname, '/')[1] as ValidRouteBase
if (!_.includes([
  '',
  'post',
] as ValidRouteBase[], routeBase)) {
  throw new Error('invalid route for render react app')
}

const rootEl = document.getElementById('root')
if (!rootEl) {
  throw new Error('no root element for render react app')
}


const jsxEls: {
  [routeBase: string]: () => JSX.Element
} = {
  '': () => {
    return <Main />
  },
  'post': () => {
    const rootInnerContentEl = rootEl.firstElementChild
    if (!rootInnerContentEl) {
      throw new Error('no content element for post page')
    }

    return <Post
      content={ rootInnerContentEl }
    />
  },
}


const jsxEl = jsxEls[routeBase]()

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    { jsxEl }
  </React.StrictMode>
)