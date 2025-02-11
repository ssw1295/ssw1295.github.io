import Header from '@/components/Header'

import './index.scss'

import {
  ValidRouteBase,
} from '@/types/route'

const COMPONENT_NAME = 'page-wrapper'

export default ({
  children,
  routeBase,
}: {
  children: JSX.Element
  routeBase: ValidRouteBase
}) => {
  return <>
    <div className={COMPONENT_NAME}>
      <Header
        routeBase={routeBase}
      />

      {children}

      <div className="page-wrapper-footer">
        <span>Copyright 2024. seo all rights reserved.</span>
      </div>
    </div>
  </>
}