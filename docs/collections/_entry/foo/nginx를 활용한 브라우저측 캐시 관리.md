---
---
# 대충 멋진 부제목
## 대충 멋진 소제목
### 대충 멋진 소소제목
#### 대충 멋진 소소소제목

![alt text](<_assets/nginx를 활용한 브라우저측 캐시 관리/sang.webp>)
![alt text](<_assets/nginx를 활용한 브라우저측 캐시 관리/20230515014548_1.jpg>)
![alt text](<_assets/nginx를 활용한 브라우저측 캐시 관리/20190504_215453.jpg>)
![alt text](<_assets/nginx를 활용한 브라우저측 캐시 관리/한글이미지.jpg>)

Paragraphs are separated by a blank line.  
한칸 더 ?  

한 줄을 띄어쓰는 것은 어쩌면 불편하다.  
이렇게 한단계 더 내려야 하기 때문인데,  
어쩌면 이게 더 이쁠 수도?

안녕 또다른 p야  
이렇게 나눠버려?

look like:

- 목록1
  - 목록1.1
    1. 오더1
    2. 오더2
      - zzz
      - zz
    4. 오더3
- 목록2

_휘어쓰기_,
__굵게 쓰기__,
___굵고 휘어쓰기___,
__굵게, _굵고 휘어쓰기___

> 블록 인용은 이렇게 쓰인다.  
> 여러 문단을 걸쳐 쓸 수 있다.  
> 이렇게 쓰인다.

유니코드는 지원된다. ☺

An h2 header
---

~~~javascript
import ReactDOM from 'react-dom/client'
import _ from 'lodash'

import PageWrapper from '@/components/PageWrapper'
import Main from './pages/Main'
import Entry from './pages/Entry'

import {
  Post,
} from '@/types/post'

import './index.scss'


type ValidRouteBase = '' | 'entry'
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
    <PageWrapper>
      {PageComponent}
    </PageWrapper>
  </div>
)
~~~



Here's a link to [a website](http://foo.bar), to a [local
doc](local-doc.html), and to a [section heading in the current
doc](#an-h2-header). Here's a footnote [^1].

[^2]: Footnote text goes here.

Tables can look like this:

size  material      color
----  ------------  ------------
9     leather       brown
10    hemp canvas   natural
11    glass         transparent

Table: Shoes, their sizes, and what they're made of

(The above is the caption for the table.) Pandoc also supports
multi-line tables:

--------  -----------------------
keyword   text
--------  -----------------------
red       Sunsets, apples, and
          other red or reddish
          things.

green     Leaves, grass, frogs
          and other things it's
          not easy being.
--------  -----------------------

A horizontal rule follows.
***