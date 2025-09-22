import _ from 'lodash'

import {
  motion,
  useDragControls,
} from 'framer-motion'

import './index.scss'

import {
  Skill,
} from '@/types/skill'

const SKILLS_WITH_MENTIONED: Record<Skill, boolean> = {
  nuxt2: true,
  javascript: true,
  java: true,
  spring: true,
  mysql: true,
  thymeleaf: true,
  nuxt3: true,
  nestjs: true,
  typescript: true,
  typeorm: true,
  'socket.io': true,
  express: true,
  openai: true,
  webpack: true,
  docker: true,
  azure: true,
  aws: true,
  oauth: true,
  cron: true,
}

const mentionedSkills = _.compact(_.map(SKILLS_WITH_MENTIONED, (value, key) => {
  return value ? key : null
}))

const COMPONENT_NAME = 'skills'

export default ({
}: {
}) => {
  return <>
    <div className={COMPONENT_NAME} id={COMPONENT_NAME}>
      <div
        className='skills-container'
        style={{ display: 'flex' }}
      >
        <motion.div
          className='skills-container-inner'
          style={{ display: 'flex', gap: '1rem' }}
          animate={{
            x: ['-50%', 0],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {_.map(mentionedSkills, (skill) => (
            <span key={skill}>#{skill}</span>
          ))}
          {_.map(mentionedSkills, (skill) => (
            <span key={`${skill}-duplicate`}>#{skill}</span>
          ))}
        </motion.div>
      </div>

      <div
        className='skills-reaction'
      >
        🙏
      </div>
    </div>
  </>
}