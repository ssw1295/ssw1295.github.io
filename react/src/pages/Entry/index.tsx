import './index.css'
import cat from './cat.png'

import {
  Post,
} from '@/types/post'

export default ({
  content,
  post,
}: {
  content: Element
  post: Post
}) => {
  return <>
    <div className="App">
      <div>
        <h1>{ post.name }</h1>
        <div>{ post.date.toString() }</div>
      </div>

      <div
        dangerouslySetInnerHTML={{__html: content.outerHTML}}
      ></div>

      <header className="App-header">
        <img src={ cat }/>
        <p>
          Edit <code>src/App.js</code> and save to reload. This is a test.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  </>
}