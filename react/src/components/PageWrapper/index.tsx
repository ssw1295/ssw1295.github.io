import ThemeToggle from '@/components/ThemeToggle'

import './index.scss'

export default ({
  children,
}: {
  children: JSX.Element
}) => {

  return <>
    <ThemeToggle />

    {children}

    <div className="page-wrapper-footer">
      <span>Copyright 2024. seo all rights reserved.</span>
    </div>
  </>
}