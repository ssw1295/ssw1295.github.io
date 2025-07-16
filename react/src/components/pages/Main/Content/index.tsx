import Profile from './sections/Profile/index'
import Skills from './sections/Skills/index'
import Career from './sections/Career/index'
import Projects from './sections/Projects/index'
import Contact from './sections/Contact/index'

import './index.scss'

const COMPONENT_NAME = 'content'

export default ({
}: {
}) => {
  return <>
    <div className={COMPONENT_NAME}>
      <Profile />
      <Skills />
      <Career />
      <Projects />
      <Contact />
    </div>
  </>
}