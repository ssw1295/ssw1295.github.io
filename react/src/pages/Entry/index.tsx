import {
  useState,
} from 'react'

import {
  Post,
} from '@/types/post'

import './scss/index.scss'

const COMPONENT_NAME = 'entry'

const formatDate = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return `${year}년 ${month}월 ${day}일`
}

export default ({
  content,
  post,
}: {
  content: Element
  post: Post
}) => {
  return <>
    <div className={ COMPONENT_NAME }>
      <div
        className="header"
      >
        <h1 className="title">{ post.name }</h1>
        <div className="date">{ formatDate(post.date) }</div>
      </div>

      <div
        dangerouslySetInnerHTML={ {__html: content.outerHTML} }
      ></div>
    </div>
  </>
}