import {
  useEffect,
  useState,
} from 'react'

import './index.scss'

const COMPONENT_NAME = 'hamburger-menu'

export default function HamburgerMenu() {
  return <>
    <div className={COMPONENT_NAME}>
      <button>🍔</button>
    </div>
  </>
}