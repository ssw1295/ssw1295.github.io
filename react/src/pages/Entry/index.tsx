import { useState } from 'react';
import cat from './cat.png'

export default ({
  content,
}: {
  content: Element
}) => {
  const easeTime = 0.1
  const [rotation, setRotation] = useState(0)

  // 회전 각도를 증가시키는 함수
  const rotateImage = () => {
    setRotation(rotation + 30)
  }
  setTimeout(rotateImage, easeTime * 1000) // 1초마다 rotateImage 함수 실행


  return <>
    <div
      dangerouslySetInnerHTML={{__html: content.outerHTML}}
    ></div>
  </>
}