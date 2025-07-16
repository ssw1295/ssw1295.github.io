import './index.scss'

const COMPONENT_NAME = 'rain'

export default ({
}: {
}) => {
  // 빗방울 생성 함수
  const createRaindrops = () => {
    const drops: JSX.Element[] = []
    const characters = ['|', '᎐', '|', '.']  // 빗방울로 사용할 문자들

    Array.from({length: 50}).forEach((_, i) => {  // 50개의 빗방울 생성
      const randomChar = characters[Math.floor(Math.random() * characters.length)]
      drops.push(
        <div
          key={i}
          className="rain-drop"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 2 + 1}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        >
          {randomChar}
        </div>
      )
    })
    return drops
  }

  return <>
    <div className={COMPONENT_NAME}>
      <div className="rain-container" style={{ top: '-100px' }}>
        {createRaindrops()}
      </div>
    </div>
  </>
}