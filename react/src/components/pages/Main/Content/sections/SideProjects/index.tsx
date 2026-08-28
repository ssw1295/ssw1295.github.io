import {
  useState,
  useEffect,
} from 'react'
import _ from 'lodash'
import {
  motion,
  useDragControls,
} from 'framer-motion'

import './index.scss'

import {
  Skill,
} from '@/types/skill'

// 다음 뉴스기사 크롤러
import daumNewsCrawler1 from '@/assets/projects/다음 뉴스기사 크롤러/다음 뉴스기사 크롤러 (1).png'
import daumNewsCrawler2 from '@/assets/projects/다음 뉴스기사 크롤러/다음 뉴스기사 크롤러 (2).png'

// 디시 게시글 작성 매크로
import dcPostingMacro1 from '@/assets/projects/디시 게시글 작성 매크로/디시 게시글 작성 매크로 (1).png'
import dcPostingMacro2 from '@/assets/projects/디시 게시글 작성 매크로/디시 게시글 작성 매크로 (2).png'
import dcPostingMacro3 from '@/assets/projects/디시 게시글 작성 매크로/디시 게시글 작성 매크로 (3).png'

// 올리브영 상품 크롤러
import oliveYoung1 from '@/assets/projects/올리브영 상품 크롤러/올리브영 상품 크롤러 (1).png'
import oliveYoung2 from '@/assets/projects/올리브영 상품 크롤러/올리브영 상품 크롤러 (2).png'

// 페이스북 리소스 크롤러
import facebookResourcesCrawler1 from '@/assets/projects/페이스북 리소스 크롤러/페이스북 리소스 크롤러 (1).png'
import facebookResourcesCrawler2 from '@/assets/projects/페이스북 리소스 크롤러/페이스북 리소스 크롤러 (2).png'

const COMPONENT_NAME = 'side-projects'

/**
 * 프로젝트 요소
 */

const PROJECT_LIST: {
  title: string,
  period: string,
  description: JSX.Element,
  // skills: Skill[],
  skills: Skill[],
  images: string[],
}[] = [
  {
    title: '각종 크롤러, 매크로 프로그램',
    period: '2024.01 - 2024.03',
    description: (<div style={{ whiteSpace: 'pre-line' }}>{`
      페이스북 광고 라이브러리의 각종 필터값을 적용하여
      검색 및 결과 리소스들을 일괄 다운로드 해주는 크롤러,

      카테고리를 조회 및 선택하여
      올리브영의 상품들 정보를 추출하고
      엑셀 파일로 저장해주는 크롤러,

      디시인사이드의 각종 갤러리들을 선택하고
      직접 작성한 글을 자동으로 등록해주는 매크로,

      다음 스포츠의 종류별 인기 기사 20개의 요약본과
      반응 데이터 등을 수집해주는 크롤러 입니다.
    `}</div>),
    skills: ['python', 'selenium', 'tkinter'],
    images: [
      facebookResourcesCrawler1,
      facebookResourcesCrawler2,
      oliveYoung1,
      oliveYoung2,
      dcPostingMacro1,
      dcPostingMacro2,
      dcPostingMacro3,
      daumNewsCrawler1,
      daumNewsCrawler2,
    ],
  },
]
_.reverse(PROJECT_LIST)

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

  // useEffect(() => {
  //   setSelectedProjectIndexes(_.map(PROJECT_LIST, (project, projectIndex) => {
  //     return projectIndex
  //   }))
  // }, [])

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
          skills,
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
                  <div className='description'>{description}</div>
                  <br />
                  <div className='skills'>{
                    _.map(skills, (skill, skillIndex) => {
                      return <span className='skill' key={skillIndex}>#{skill}</span>
                    })
                  }</div>
                </div>
                <div className='right-side'>
                  {/* 이미지 슬라이더 */}
                  <div
                    className='image-slider'
                  >
                    <div
                      className='image-slider-image'
                    >
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
                    <div
                      className='image-slider-buttons'
                    >
                      <button
                        className='image-slider-button-prev'
                        onClick={() => handleClickMoveImage(projectIndex, true)}
                      >◀</button>
                      <button
                        className='image-slider-button-next'
                        onClick={() => handleClickMoveImage(projectIndex, false)}
                      >▶</button>
                    </div>
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