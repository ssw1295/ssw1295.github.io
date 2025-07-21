import {
  useState,
} from 'react'
import _ from 'lodash'

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
    skills: [''],
    images: [
      xelfEditor1,
      xelfEditor2,
    ],
  },
]

export default ({
}: {
}) => {
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
      {_.map(PROJECT_LIST, (project, index) => {
        const {
          title,
          period,
          description,
          images,
        } = project

        return (
          <div
            className='project'
            key={index}
          >
            {/* 제목 */}
            <div
              className='title'
              onClick={() => handleClickToggleProjectElement(index)}
            >
              <span className='arrow'>{_.includes(selectedProjectIndexes, index) ? '▼' : '▶'} </span>
              <span>{title}</span>
            </div>

            {/* 토글되는 디테일 */}
            {_.includes(selectedProjectIndexes, index) && (
              <div className='detail'>
                <div className='left-side'>
                  <div className='period'>{period}</div>
                  {description}
                </div>
                <div className='right-side'>
                  {_.map(images, (image, imageIndex) => (
                    <img
                      key={imageIndex}
                      src={image}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  </>
}