import './index.css'

import logo from './logo.svg'


export default ({
  content,
}: {
  content: Element | null
}) => {
  // 페이지 라우트 정보, 넘어온 props를 이용해 page에서 불러와 페이지 렌더링

  if (!!content) {
    content.setAttribute('id', 'content')
  }

  return (
    <div className="App">
      <>
        {
          !!content
            ? (
              <div
                dangerouslySetInnerHTML={{__html: content.outerHTML}}
              ></div>
            )
            : undefined
        }
      </>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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

