import ReactDOM from 'react-dom/client'
import _ from 'lodash'

import PageWrapper from '@/components/PageWrapper'
import Main from './pages/Main'
import Entry from './pages/Entry'

import './index.scss'

import {
  Post,
} from '@/types/post'

import {
  ValidRouteBase,
} from '@/types/route'

const VALID_ROUTE_BASES: ValidRouteBase[] = [
  '',
  'entry',
]

// 초기 테마 설정
const initializeTheme = () => {
  const savedTheme = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  document.documentElement.setAttribute('data-theme', savedTheme)
}

initializeTheme()

const routeBase = _.split(window.location.pathname, '/')[1] as ValidRouteBase
if (!_.includes(VALID_ROUTE_BASES, routeBase)) {
  throw new Error('invalid route for render react app')
}

const rootEl = document.getElementById('root')
if (!rootEl) {
  throw new Error('no root element for render react app')
}


const entries = await fetch('/json/entries.json', {
  method: 'GET',
})
const jsonText = await entries.text()
const validJsonText = jsonText.replace(/“|”/g, '"')
const parsedEntriesJson: {url: string, createdDt: string}[] = JSON.parse(validJsonText)

const entryPosts: Post[] = _.map(parsedEntriesJson, json => {
  const url = decodeURIComponent(json.url)
  const createdDate =  new Date(json.createdDt)
  const urlParts = _.split(url, '/')
  urlParts.shift()

  const name = _.last(urlParts) as string

  return {
    name,
    url,
    date: createdDate,
  }
})

console.log({entryPosts})


const pageComponents: {
  [keys in ValidRouteBase]: () => JSX.Element
} = {
  '': () => {
    return (
      <Main
        entryPosts={entryPosts}
      />
    )
  },
  'entry': () => {
    const entryContentEl = rootEl.querySelector('#content')
    if (!entryContentEl) {
      throw new Error('no content element for entry page')
    }
    (entryContentEl as HTMLElement).removeAttribute('style')

    const entryPost = _.find(entryPosts, post => post.url === decodeURIComponent(window.location.pathname))
    if (!entryPost) {
      throw new Error('no post for entry page')
    }

    return (
      <Entry
        content={entryContentEl}
        post={entryPost}
      />
    )
  },
}

const PageComponent = pageComponents[routeBase]()


ReactDOM.createRoot(rootEl).render(
  <div id="app">
    <PageWrapper
      routeBase={routeBase}
    >
      {PageComponent}
    </PageWrapper>
  </div>
)