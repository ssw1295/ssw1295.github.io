import React from 'react'
import ReactDOM from 'react-dom/client'
import _ from 'lodash'

import Main from './pages/Main/index'
import Entry from './pages/Entry/index'

import './index.css'

type ValidRouteBase = '' | 'entry'
const VALID_ROUTE_BASES: ValidRouteBase[] = [
  '',
  'entry',
]


const routeBase = _.split(window.location.pathname, '/')[1] as ValidRouteBase
if (!_.includes(VALID_ROUTE_BASES, routeBase)) {
  throw new Error('invalid route for render react app')
}

const rootEl = document.getElementById('root')
if (!rootEl) {
  throw new Error('no root element for render react app')
}


const jsxEls: {
  [keys in ValidRouteBase]: () => JSX.Element
} = {
  '': () => {
    return <Main />
  },
  'entry': () => {
    const entryContentEl = rootEl.querySelector('#content')
    if (!entryContentEl) {
      throw new Error('no content element for entry page')
    }

    return <Entry
      content={ entryContentEl }
    />
  },
}


const jsxEl = jsxEls[routeBase]()

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    { jsxEl }
  </React.StrictMode>
)