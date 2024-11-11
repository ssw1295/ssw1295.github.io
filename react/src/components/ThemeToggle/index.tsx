import {
  useEffect,
  useState,
} from 'react'

import './index.scss'


export default function ThemeToggle() {
  // 시스템에 설정된 테마 가져오기
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

  const [brightness, setBrightness] = useState(systemTheme)
  document.documentElement.setAttribute('data-theme', brightness)

  const toggleTheme = () => {
    const newTheme = (brightness === 'light') ? 'dark' : 'light'

    document.documentElement.setAttribute('data-theme', newTheme)
    setBrightness(newTheme)
  }

  return <>
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="테마 변경"
    >
      {brightness === 'light' ? '🌞' : '🌙'}
    </button>
  </>
}