import {
  useState,
} from 'react'

import chaldduck from '@/assets/troll/chaldduck.jpg'

import './index.scss'

const COMPONENT_NAME = 'troll'

export default ({
}: {
}) => {
  return <>
    <div className={COMPONENT_NAME}>
      <img
        src={chaldduck}
      />
    </div>
  </>
}