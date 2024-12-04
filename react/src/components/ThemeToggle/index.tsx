import {
  useEffect,
  useState,
} from 'react'

import './index.scss'

const COMPONENT_NAME = 'theme-toggle'

export default function ThemeToggle() {
  // 시스템에 설정된 테마 가져오기
  const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const systemTheme = isSystemDark ? 'dark' : 'light'
  const localTheme = localStorage.getItem('theme')

  const [brightness, setBrightness] = useState(localTheme || systemTheme)
  document.documentElement.setAttribute('data-theme', brightness)

  const toggleTheme = () => {
    const newTheme = (brightness === 'light') ? 'dark' : 'light'
    localStorage.setItem('theme', newTheme)

    console.log({
      localStorage,
      newTheme,
    })

    document.documentElement.setAttribute('data-theme', newTheme)
    setBrightness(newTheme)
  }

  return <>
    <button
      className={COMPONENT_NAME}
      onClick={toggleTheme}
      aria-label="테마 변경"
    >
      {brightness === 'light' ? '🌞' : '🌙'}
    </button>
  </>
}