import {
  useEffect,
  useState,
} from 'react'

import HamburgerMenu from './HamburgerMenu/index'
import ThemeToggle from './ThemeToggle/index'

import './index.scss'

const COMPONENT_NAME = 'main-header'

export default function Header() {
  return <>
    <div className={COMPONENT_NAME}>
      <HamburgerMenu />
      <ThemeToggle />
    </div>
  </>
}