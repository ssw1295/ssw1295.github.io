import ThemeToggle from '@/components/ThemeToggle'

import './index.scss'

const COMPONENT_NAME = 'page-wrapper'

export default ({
  children,
}: {
  children: JSX.Element
}) => {
  return <>
    <div className={COMPONENT_NAME}>
      <ThemeToggle />

      {children}

      <div className="page-wrapper-footer">
        <span>Copyright 2024. seo all rights reserved.</span>
      </div>
    </div>
  </>
}