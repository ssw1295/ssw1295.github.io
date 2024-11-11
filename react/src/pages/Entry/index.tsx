import {
  useState,
} from 'react'

import {
  Post,
} from '@/types/post'

import cat from './cat.png'

import './index.scss'


export default ({
  content,
  post,
}: {
  content: Element
  post: Post
}) => {
  const easeTime = 0.1
  const [rotation, setRotation] = useState(0)

  // 회전 각도를 증가시키는 함수
  const rotateImage = () => {
    setRotation(rotation + 30)
  }
  setTimeout(rotateImage, easeTime * 1000) // 1초마다 rotateImage 함수 실행

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