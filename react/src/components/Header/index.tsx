import _ from 'lodash'

import HamburgerMenu from './HamburgerMenu/index'
import ThemeToggle from './ThemeToggle/index'

import './index.scss'

import {
  ValidRouteBase,
} from '@/types/route'

const COMPONENT_NAME = 'main-header'

export default function Header({
  routeBase,
}: {
  routeBase: ValidRouteBase
}) {
  return <>
    <div className={COMPONENT_NAME}>
      <div
        className="header-left"
      >
        <button
          className={routeBase === '' ? 'active' : ''}
          onClick={() => {
            window.location.href = '/'
          }}
        >Profile😊</button>
        <button
          // className={routeBase === '' ? 'active' : ''}
          onClick={() => {
            window.location.href = '/career'
          }}
        >Career💼</button>
        <button
          className={_.includes(['entries', 'entry'], routeBase) ? 'active' : ''}
          onClick={() => {
            window.location.href = '/entries'
          }}
        >Posts📝</button>
      </div>
      <div
        className="header-right"
      >
        <ThemeToggle />
      </div>
    </div>
  </>
}