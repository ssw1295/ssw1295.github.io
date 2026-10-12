import {
  useState,
} from 'react'

import './index.scss'

import Content from './Content'

const COMPONENT_NAME = 'daangn-tracker'

export default ({
}: {
}) => {
  return <>
    <div className={COMPONENT_NAME}>
      <Content />
    </div>
  </>
}