import Profile from './sections/Profile/index'
import Skills from './sections/Skills/index'
import Career from './sections/Career/index'
import WorkProjects from './sections/WorkProjects/index'
import SideProjects from './sections/SideProjects/index'
import Contact from './sections/Contact/index'

import SectionWrapper from './SectionWrapper/index'

import './index.scss'

const COMPONENT_NAME = 'content'

export default ({
}: {
}) => {
  return <>
    <div className={COMPONENT_NAME}>
      <SectionWrapper title="Profile">
        <Profile />
      </SectionWrapper>
      <SectionWrapper title="Career">
        <Career />
      </SectionWrapper>
      <SectionWrapper title="Work Projects">
        <WorkProjects />
      </SectionWrapper>
      <SectionWrapper title="Side Projects">
        <SideProjects />
      </SectionWrapper>
      <SectionWrapper title="Skills">
        <Skills />
      </SectionWrapper>
      {/* <SectionWrapper title="Contact">
        <Contact />
      </SectionWrapper> */}
    </div>
  </>
}