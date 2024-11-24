import {
  useState,
} from 'react'

import {
  Post,
} from '@/types/post'

import './scss/index.scss'

const COMPONENT_NAME = 'entry'

export default ({
  content,
  post,
}: {
  content: Element
  post: Post
}) => {
  return <>
    <div className={COMPONENT_NAME}>
      <div>
        <h1>{ post.name }</h1>
        <div>{ post.date.toString() }</div>
      </div>

      <div
        dangerouslySetInnerHTML={{__html: content.outerHTML}}
      ></div>
    </div>
  </>
}