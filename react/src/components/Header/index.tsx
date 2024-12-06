import {
  useEffect,
  useState,
} from 'react'

import './index.scss'

const COMPONENT_NAME = 'main-header'

export default function Header() {

  return <>
    <div className={COMPONENT_NAME}>
      <h1>Header</h1>
    </div>
  </>
}