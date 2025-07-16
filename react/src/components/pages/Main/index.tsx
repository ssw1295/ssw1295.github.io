import {
  useState,
} from 'react'

import Header from './Header/index'
import Content from './Content/index'
import Footer from './Footer/index'

import Rain from '@/components/drafts/weathers/Rain/index'

import './index.scss'

const COMPONENT_NAME = 'main'

export default ({
}: {
}) => {
  const [isRaining, setIsRaining] = useState(false)

  return <>
    <div className={COMPONENT_NAME}>
      <Rain
        isRaining={isRaining}
      />

      <Header
        isRaining={isRaining}
        onChangeIsRaining={setIsRaining}
      />
      <Content />
      <Footer />
    </div>
  </>
}