import _ from 'lodash'

import './index.scss'

const COMPONENT_NAME = 'career'

const CAREER_LIST: {
  date: string,
  description: string,
}[] = [
  {
    date: '2020.03',
    description: '한국전자통신연구원 주관 C언어 교육 이수',
  },
  {
    date: '2020.06',
    description: '공주대학교 전기전자공학 학사 졸업',
  },
  {
    date: '2021.04',
    description: '큐리어드 입사',
  },
  {
    date: '2021.05',
    description: '자사 java 기반 웹 개발 팀',
  },
  {
    date: '2021.11',
    description: '자사 node 기반 게임 개발 팀',
  },
  {
    date: '2022.02',
    description: '서강대학교 SLP 사업 참여',
  },
  {
    date: '2022.08',
    description: '자사 node 개발, 클라우드 관리 전담',
  },
  {
    date: '2023.01',
    description: '한양대학교 마음챙김 앱 사업 개발 책임',
  },
  {
    date: '2023.06',
    description: '동아그룹 두클래스 캔버스 사업 개발 책임',
  },
  {
    date: '2024.01',
    description: '한라그룹 STARTIUM 사업 개발 책임',
  },
  {
    date: '2024.08',
    description: '자사 서비스 AI 기능 고도화 개발 책임',
  },
  {
    date: '2025.03',
    description: '자사 서비스 비상교육 이전 사업 개발 책임',
  },
  {
    date: 'NOW',
    description: '🔥',
  },
]

export default ({
}: {
}) => {
  return <>
    <div className={COMPONENT_NAME} id={COMPONENT_NAME}>
      <table>
        <tbody>
          {_.map([...CAREER_LIST].reverse(), (career, index) => {
            const {
              date,
              description,
            } = career

            return (
              <tr
                key={index}
              >
                <td>{date}</td>
                <td>|</td>
                <td>{description}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  </>
}