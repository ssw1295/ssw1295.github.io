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
      {children}
    </div>
  </>
}