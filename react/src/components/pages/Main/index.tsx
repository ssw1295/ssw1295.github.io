import Header from './Header/index'
import Content from './Content/index'
import Footer from './Footer/index'

import Rain from '@/components/drafts/weathers/Rain/index'

import myImage from '@/assets/images/seo.png'
import githubImage from '@/assets/images/github.png'

import './index.scss'

const COMPONENT_NAME = 'main'

export default ({
}: {
}) => {
  return <>
    <div className={COMPONENT_NAME}>
      <Rain />

      <Header />
      <Content />
      <Footer />
    </div>
  </>
}