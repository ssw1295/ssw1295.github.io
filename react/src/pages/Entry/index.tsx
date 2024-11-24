import {
  useState,
} from 'react'

import {
  Post,
} from '@/types/post'

import './index.scss'


export default ({
  content,
  post,
}: {
  content: Element
  post: Post
}) => {
  return <>
    <div id="entry">
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