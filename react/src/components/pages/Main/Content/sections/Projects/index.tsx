import {
  useState,
} from 'react'
import _ from 'lodash'
import {
  motion,
  useDragControls,
} from 'framer-motion'

import './index.scss'

import {
  Skill,
} from '@/types/pages/main'

import xelfEditor1 from '@/assets/projects/xelf-editor/스크린샷 2025-07-21 150424.png'
import xelfEditor2 from '@/assets/projects/xelf-editor/스크린샷 2025-07-21 150502.png'

const COMPONENT_NAME = 'projects'

/**
 * 프로젝트 요소
 */

const PROJECT_LIST: {
  title: string,
  period: string,
  description: JSX.Element,
  // skills: Skill[],
  skills: string[],
  images: string[],
}[] = [
  {
    title: 'XELF 편집기',
    period: '2024.01 - 2024.03',
    description: (<div style={{ whiteSpace: 'pre-line' }}>{`
      안녕
      난 상원
      너는 누구야?
    `}</div>),
    skills: [],
    images: [
      xelfEditor1,
      xelfEditor2,
    ],
  },
]

export default ({
}: {
}) => {
  // 각 프로젝트 요소별 표시할 이미지 인덱스
  const [
    currentImageIndexes,
    setCurrentImageIndexes,
  ] = useState<(number | null)[]>(
    _.chain(PROJECT_LIST)
      .map((project) => {
        return !!project.images.length ? 0 : null
      })
      .value()
  )

  const handleClickMoveImage = (projectIndex: number, isPrev: boolean) => {
    const currentImageIndex = currentImageIndexes[projectIndex]
    const maxImageIndex = PROJECT_LIST[projectIndex].images.length - 1

    if (currentImageIndex === null) {
      return
    }

    const newImageIndex = isPrev
      ? currentImageIndex === 0
        ? maxImageIndex
        : currentImageIndex - 1
      : currentImageIndex === maxImageIndex
        ? 0
        : currentImageIndex + 1

    const newCurrentImageIndexes = _.map(currentImageIndexes, (imageIndex, imageIndexIndex) => {
      return (imageIndexIndex === projectIndex) ? newImageIndex : imageIndex
    })

    setCurrentImageIndexes(newCurrentImageIndexes)
  }


  const [
    selectedProjectIndexes,
    setSelectedProjectIndexes,
  ] = useState<number[]>([])

  const handleClickToggleProjectElement = (index: number) => {
    const isOpend = _.includes(selectedProjectIndexes, index)

    if (isOpend) {
      setSelectedProjectIndexes(
        _.filter(selectedProjectIndexes, (selectedIndex) => selectedIndex !== index)
      )
    }
    else {
      setSelectedProjectIndexes(_.uniq([...selectedProjectIndexes, index]))
    }
  }

  return <>
    <div className={COMPONENT_NAME} id={COMPONENT_NAME}>
      {_.map(PROJECT_LIST, (project, projectIndex) => {
        const {
          title,
          period,
          description,
          images,
        } = project

        return (
          <div
            className='project'
            key={projectIndex}
          >
            {/* 제목 */}
            <div
              className='title'
              onClick={() => handleClickToggleProjectElement(projectIndex)}
            >
              <span className='arrow'>{_.includes(selectedProjectIndexes, projectIndex) ? '▼' : '▶'} </span>
              <span>{title}</span>
            </div>

            {/* 토글되는 디테일 */}
            {_.includes(selectedProjectIndexes, projectIndex) && (
              <motion.div
                className='detail'
              >
                <div className='left-side'>
                  <div className='period'>{period}</div>
                  {description}
                </div>
                <div className='right-side'>
                  {/* 이미지 슬라이더 */}
                  <div>
                    {currentImageIndexes[projectIndex] !== null && <motion.div
                      key={currentImageIndexes[projectIndex]}
                      initial={{ opacity: 0, y: 0 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                      <img
                        src={images[currentImageIndexes[projectIndex]!]}
                      />
                    </motion.div>}
                  </div>
                  <div>
                    <button
                      onClick={() => handleClickMoveImage(projectIndex, true)}
                    >이전</button>
                    <button
                      onClick={() => handleClickMoveImage(projectIndex, false)}
                    >다음</button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        )
      })}
    </div>
  </>
}