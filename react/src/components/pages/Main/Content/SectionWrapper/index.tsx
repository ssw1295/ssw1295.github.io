import _ from 'lodash'

import './index.scss'

const COMPONENT_NAME = 'section-wrapper'

export default ({
  children,
  title,
}: {
  title: string,
  children: JSX.Element,
}) => {
  return <>
    <div className={COMPONENT_NAME}>
      {title && (
        <div
          className="title"
        >
          <span>{title}</span>
        </div>
      )}

      <div
        className="content"
      >
        {children}
      </div>
    </div>
  </>
}