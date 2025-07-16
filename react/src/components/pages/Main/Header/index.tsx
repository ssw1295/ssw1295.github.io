import _ from 'lodash'

import HamburgerMenu from './HamburgerMenu/index'
import ThemeToggle from './ThemeToggle/index'

import './index.scss'

import {
  ValidRouteBase,
} from '@/types/route'

const COMPONENT_NAME = 'header'

export default function Header({
  // routeBase,
  isRaining,
  onChangeIsRaining,
}: {
  // routeBase: ValidRouteBase
  isRaining: boolean
  onChangeIsRaining: (isRaining: boolean) => void
}) {
  const handleClickScrollToTarget = (target: string) => {
    const targetElement = document.getElementById(target)

    if (!!targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return <>
    <div className={COMPONENT_NAME}>
      <div
        className="header-left"
      >
        <ThemeToggle />
        <div>
          <button
            onClick={() => onChangeIsRaining(!isRaining)}
          >{isRaining ? '☂️' : '🌂'}</button>
        </div>
      </div>
      <div
        className="header-right"
      >
        <button
          onClick={() => handleClickScrollToTarget('profile')}
        >profile/</button>
        <button
          onClick={() => handleClickScrollToTarget('skills')}
        >skills/</button>
        <button
          onClick={() => handleClickScrollToTarget('career')}
        >career/</button>
        <button
          onClick={() => handleClickScrollToTarget('projects')}
        >projects/</button>
        <button
          onClick={() => handleClickScrollToTarget('contact')}
        >contact/</button>
      </div>
    </div>
  </>
}