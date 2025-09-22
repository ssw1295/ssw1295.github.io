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
} from '@/types/skill'

// 구 셀프
import oldXelf1 from '@/assets/projects/구셀프/구셀프 (1).png'
import oldXelf2 from '@/assets/projects/구셀프/구셀프 (2).png'
import oldXelf3 from '@/assets/projects/구셀프/구셀프 (3).png'
import oldXelf4 from '@/assets/projects/구셀프/구셀프 (4).png'
import oldXelf5 from '@/assets/projects/구셀프/구셀프 (5).png'
import oldXelf6 from '@/assets/projects/구셀프/구셀프 (6).png'

// 유클래스 웹
import uClassWeb1 from '@/assets/projects/유클래스 웹/유클래스 웹 (1).png'
import uClassWeb2 from '@/assets/projects/유클래스 웹/유클래스 웹 (2).png'
import uClassWeb3 from '@/assets/projects/유클래스 웹/유클래스 웹 (3).png'
import uClassWeb4 from '@/assets/projects/유클래스 웹/유클래스 웹 (4).png'
import uClassWeb5 from '@/assets/projects/유클래스 웹/유클래스 웹 (5).png'

// 라포 의회
import rapoSquare1 from '@/assets/projects/라포 의회/라포 의회 (1).png'
import rapoSquare2 from '@/assets/projects/라포 의회/라포 의회 (2).png'
import rapoSquare3 from '@/assets/projects/라포 의회/라포 의회 (3).png'
import rapoSquare4 from '@/assets/projects/라포 의회/라포 의회 (4).png'
import rapoSquare5 from '@/assets/projects/라포 의회/라포 의회 (5).png'
import rapoSquare6 from '@/assets/projects/라포 의회/라포 의회 (6).png'
import rapoSquare7 from '@/assets/projects/라포 의회/라포 의회 (7).png'

// 라포 지피티
import rapoGpt1 from '@/assets/projects/라포 지피티/라포 지피티 (1).png'
import rapoGpt2 from '@/assets/projects/라포 지피티/라포 지피티 (2).png'
import rapoGpt3 from '@/assets/projects/라포 지피티/라포 지피티 (3).png'

// 마음챙김
import mindHealth1 from '@/assets/projects/마음챙김/마음챙김 (1).png'
import mindHealth2 from '@/assets/projects/마음챙김/마음챙김 (2).png'
import mindHealth3 from '@/assets/projects/마음챙김/마음챙김 (3).png'
import mindHealth4 from '@/assets/projects/마음챙김/마음챙김 (4).png'
import mindHealth5 from '@/assets/projects/마음챙김/마음챙김 (5).png'
import mindHealth6 from '@/assets/projects/마음챙김/마음챙김 (6).png'
import mindHealth7 from '@/assets/projects/마음챙김/마음챙김 (7).png'

// 캔버스
import canvas1 from '@/assets/projects/캔버스/캔버스 (1).png'
import canvas2 from '@/assets/projects/캔버스/캔버스 (2).png'
import canvas3 from '@/assets/projects/캔버스/캔버스 (3).png'
import canvas4 from '@/assets/projects/캔버스/캔버스 (4).png'
import canvas5 from '@/assets/projects/캔버스/캔버스 (5).png'
import canvas6 from '@/assets/projects/캔버스/캔버스 (6).png'
import canvas7 from '@/assets/projects/캔버스/캔버스 (7).png'
import canvas8 from '@/assets/projects/캔버스/캔버스 (8).png'

// 한라 스타티움
import hlStartium1 from '@/assets/projects/한라 스타티움/한라 스타티움 (1).png'
import hlStartium2 from '@/assets/projects/한라 스타티움/한라 스타티움 (2).png'
import hlStartium3 from '@/assets/projects/한라 스타티움/한라 스타티움 (3).png'
import hlStartium4 from '@/assets/projects/한라 스타티움/한라 스타티움 (4).png'
import hlStartium5 from '@/assets/projects/한라 스타티움/한라 스타티움 (5).png'
import hlStartium6 from '@/assets/projects/한라 스타티움/한라 스타티움 (6).png'
import hlStartium7 from '@/assets/projects/한라 스타티움/한라 스타티움 (7).png'
import hlStartium8 from '@/assets/projects/한라 스타티움/한라 스타티움 (8).png'
import hlStartium9 from '@/assets/projects/한라 스타티움/한라 스타티움 (9).png'
import hlStartium10 from '@/assets/projects/한라 스타티움/한라 스타티움 (10).png'

// 라포 게임
import rapoGame1 from '@/assets/projects/라포 게임/라포 게임 (1).png'
import rapoGame2 from '@/assets/projects/라포 게임/라포 게임 (2).png'
import rapoGame3 from '@/assets/projects/라포 게임/라포 게임 (3).png'
import rapoGame4 from '@/assets/projects/라포 게임/라포 게임 (4).png'
import rapoGame5 from '@/assets/projects/라포 게임/라포 게임 (5).png'
import rapoGame6 from '@/assets/projects/라포 게임/라포 게임 (6).png'
import rapoGame7 from '@/assets/projects/라포 게임/라포 게임 (7).png'
import rapoGame8 from '@/assets/projects/라포 게임/라포 게임 (8).png'
import rapoGame9 from '@/assets/projects/라포 게임/라포 게임 (9).png'
import rapoGame10 from '@/assets/projects/라포 게임/라포 게임 (10).png'
import rapoGame11 from '@/assets/projects/라포 게임/라포 게임 (11).png'
import rapoGame12 from '@/assets/projects/라포 게임/라포 게임 (12).png'
import rapoGame13 from '@/assets/projects/라포 게임/라포 게임 (13).png'
import rapoGame14 from '@/assets/projects/라포 게임/라포 게임 (14).png'
import rapoGame15 from '@/assets/projects/라포 게임/라포 게임 (15).png'
import rapoGame16 from '@/assets/projects/라포 게임/라포 게임 (16).png'
import rapoGame17 from '@/assets/projects/라포 게임/라포 게임 (17).png'
import rapoGame18 from '@/assets/projects/라포 게임/라포 게임 (18).png'
import rapoGame19 from '@/assets/projects/라포 게임/라포 게임 (19).png'
import rapoGame20 from '@/assets/projects/라포 게임/라포 게임 (20).png'
import rapoGame21 from '@/assets/projects/라포 게임/라포 게임 (21).png'
import rapoGame22 from '@/assets/projects/라포 게임/라포 게임 (22).png'
import rapoGame23 from '@/assets/projects/라포 게임/라포 게임 (23).png'

const COMPONENT_NAME = 'projects'

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
    title: 'XELF 에디터',
    period: '2024.01 - 2024.03',
    description: (<div style={{ whiteSpace: 'pre-line' }}>{`
      웹으로 파워포인트처럼 콘텐츠를 만들고,
      사람들끼리 공유할 수 있는 에디터 툴입니다.

      에디터의 추가적인 기능 개발,
      각종 디버깅을 수행했습니다.
    `}</div>),
    skills: ['nuxt2', 'javascript'],
    images: [
      oldXelf1,
      oldXelf2,
      oldXelf3,
      oldXelf4,
      oldXelf5,
      oldXelf6,
    ],
  },
  {
    title: '유클래스 웹',
    period: '2024.01 - 2024.03',
    description: (<div style={{ whiteSpace: 'pre-line' }}>{`
      셀프 에디터를 리뉴얼 했으며,
      개념을 좀 더 확장하여 개인, 그리고 기관 관점에서
      따로 콘텐츠들을 관리하고,
      그로 하여금 커뮤니케이션 능율을 증대시킨 웹 서비스입니다.

      웹 개발 파트에 팀원으로 참여하였습니다.
    `}</div>),
    skills: ['java', 'spring', 'mysql', 'thymeleaf'],
    images: [
      uClassWeb1,
      uClassWeb2,
      uClassWeb3,
      uClassWeb4,
      uClassWeb5,
    ],
  },
  {
    title: '라포라포 스퀘어',
    period: '2024.01 - 2024.03',
    description: (<div style={{ whiteSpace: 'pre-line' }}>{`
      학생들끼리 온라인으로 참여하여
      함께 특정 주제에 대하여 자유롭게 토론할 수 있는
      각종 콘텐츠를 제공하는 웹 서비스입니다.

      투표, 마이크 사용 발언 등 여러 기능이 제공됩니다.

      웹, 콘텐츠 개발에 팀원으로 참여하였습니다.
    `}</div>),
    skills: ['nuxt3', 'nestjs', 'typescript', 'typeorm', 'socket.io'],
    images: [
      rapoSquare1,
      rapoSquare2,
      rapoSquare3,
      rapoSquare4,
      rapoSquare5,
      rapoSquare6,
      rapoSquare7,
    ],
  },
  {
    title: '라포라포 지피티 고도화',
    period: '2024.01 - 2024.03',
    description: (<div style={{ whiteSpace: 'pre-line' }}>{`
      기존 선생님이 직접 문제를 만들던 방식에 더하여,
      정규화된 형식의 문제를 생성하는 챗봇을 개발하여
      AI 기반의 문제를 생성할 수 있도록 하였습니다.

      초, 중, 고의 각종 기출 문제 데이터 등으로 파인튜닝 했고,
      gpt thread를 사용자별로 구분할 수 있게 하여
      대화 컨텍스트를 유지할 수 있도록 했습니다.

      전용 gpt 서버 개발 및 api 운영 전담하였습니다.
    `}</div>),
    skills: ['express', 'openai', 'webpack', 'typescript'],
    images: [
      rapoGpt1,
      rapoGpt2,
      rapoGpt3,
    ],
  },
  {
    title: '한양대학교 마음챙김 앱',
    period: '2024.01 - 2024.03',
    description: (<div style={{ whiteSpace: 'pre-line' }}>{`
      국군장병을 대상으로 하는 한양 대학교의
      마음챙김 앱은 그들을 위해 여러
      정신 건강을 위한 콘텐츠들을 앱으로 제공합니다.

      전용 api 서버 조율,
      앱과 콘텐츠들의 연결,
      약속된 방식으로의 배포 등
      협력사들 끼리의 커뮤니케이션이 유기적으로 이루어졌습니다.

      콘텐츠 개발 및 커뮤니케이션 전담하였습니다.
    `}</div>),
    skills: ['docker', 'azure', 'typescript', 'nuxt3'],
    images: [
      mindHealth1,
      mindHealth2,
      mindHealth3,
      mindHealth4,
      mindHealth5,
      mindHealth6,
      mindHealth7,
    ],
  },
  {
    title: '동아그룹 두클래스 캔버스',
    period: '2024.01 - 2024.03',
    description: (<div style={{ whiteSpace: 'pre-line' }}>{`
      동아그룹에서 자사의 유클래스 웹 서비스와 유사한 방식의 서비스인
      두클래스 캔버스 서비스를 오픈하였습니다.

      기존 유클래스 웹 서비스의 aws 클라우드의
      전반적인 요소들의 이전 및 구축을 전담하였고,
      두클래스의 타 서비스들 간의 로그인 방식을 연동시켰습니다.

      또한 추가적인 게임 콘텐츠 개발을 위한
      전용 개발 환경 및 가이드라인을 다른 개발자들에게 제공했습니다.
    `}</div>),
    skills: ['aws', 'spring', 'oauth'],
    images: [
      canvas1,
      canvas2,
      canvas3,
      canvas4,
      canvas5,
      canvas6,
      canvas7,
      canvas8,
    ],
  },
  {
    title: '한라그룹 스타티움 웹',
    period: '2024.01 - 2024.03',
    description: (<div style={{ whiteSpace: 'pre-line' }}>{`
      한라그룹에서 자사 셀프 에디터를 활용한 콘텐츠들을 활용하여
      사내 교육용으로 신입들에게 제공해주는 웹 서비스인
      한라 스타티움 웹 서비스를 오픈하였습니다.

      셀프 에디터 콘텐츠가 그대로 들어가지 않고
      따로 추가적인 가공이 강제되었기에,
      이에 대해 유연하게 대처할 수 있게끔 개발했습니다.

      또한 한라 그룹 신입사원 데이터와의 유기적인 연동을 위한
      스케줄러 프로세스 개발 또한 진행했습니다.
    `}</div>),
    skills: ['nuxt3', 'typescript', 'typeorm', 'aws', 'mysql', 'cron'],
    images: [
      hlStartium1,
      hlStartium2,
      hlStartium3,
      hlStartium4,
      hlStartium5,
      hlStartium6,
      hlStartium7,
      hlStartium8,
      hlStartium9,
      hlStartium10,
    ],
  },
  {
    title: '라포라포 게임',
    period: '2024.01 - 2024.03',
    description: (<div style={{ whiteSpace: 'pre-line' }}>{`
      온라인으로 참여하여
      선생님이 직접 만든 문제들을
      학생들이 게임을 통해 학습할 수 있게 하는 웹 서비스입니다.

      최대한 빨리 qr을 찍어 문제를 풀어야 하는 qr 방탈출 게임,
      자신의 아바타를 직접 이동시켜 문제를 푸는 ox 게임,
      팀원들끼리 문제를 풀어 주사위를 굴려 완주하는 뱀 주사위 게임,
      주어진 키워드들로 빙고판을 구성해 최대한 빨리 빙고를 만드는 빙고게임,
      문제를 풀고 카드들을 모아 야구 게임을 진행하는 야구 게임 등

      소켓 통신 기반의 웹 게임들을 개발 중입니다.
    `}</div>),
    skills: ['socket.io', 'javascript', 'nuxt2'],
    images: [
      rapoGame1,
      rapoGame2,
      rapoGame3,
      rapoGame4,
      rapoGame5,
      rapoGame6,
      rapoGame7,
      rapoGame8,
      rapoGame9,
      rapoGame10,
      rapoGame11,
      rapoGame12,
      rapoGame13,
      rapoGame14,
      rapoGame15,
      rapoGame16,
      rapoGame17,
      rapoGame18,
      rapoGame19,
      rapoGame20,
      rapoGame21,
      rapoGame22,
      rapoGame23,
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