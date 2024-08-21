import './index.css'

import cat from './cat.png'
import cats from '~/'

export default ({
  content,
}: {
  content: Element
}) => {
  return (
    <div className="App">
      <>
        <div
          dangerouslySetInnerHTML={{__html: content.outerHTML}}
        ></div>
      </>
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
  )
}