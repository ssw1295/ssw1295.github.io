import React from 'react'
import ReactDOM from 'react-dom/client'
import _ from 'lodash'

import Main from './pages/Main/index'
import Entry from './pages/Entry/index'

import {
  Post,
} from '@/types/post'

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


const entries = await fetch('/entries.json', {
  method: 'GET',
})
const jsonText = await entries.text()
const validJsonText = jsonText.replace(/“|”/g, '"')
const parsedEntriesJson: {url: string}[] = JSON.parse(validJsonText)

const entryPosts: Post[] = _.map(parsedEntriesJson, json => {
  const url = decodeURIComponent(json.url)
  const urlParts = _.split(url, '/')
  urlParts.shift()

  const name = _.last(urlParts) as string

  return {
    name,
    url,
  }
})

console.log({entryPosts})


const jsxEls: {
  [keys in ValidRouteBase]: () => JSX.Element
} = {
  '': () => {
    return <Main
      entryPosts={ entryPosts }
    />
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

// 메인 공통 레퍼 생성 후 감싸서 리턴?

const jsxEl = jsxEls[routeBase]()

ReactDOM.createRoot(rootEl).render(
  <>
    { jsxEl }
  </>
)