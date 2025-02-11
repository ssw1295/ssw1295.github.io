import myImage from '@/assets/images/seo.png'

import githubImage from '@/assets/images/github.png'

import './index.scss'

const COMPONENT_NAME = 'main'

export default ({
}: {
}) => {
  return <>
    <div className={COMPONENT_NAME}>
      <div className="left-side">
        <div className="profile-area">
          <img
            src={myImage}
            alt="my-image"
            width={240}
            style={{
              borderRadius: '50%',  // 완전한 원형
              objectFit: 'cover',   // 이미지 비율 유지
              aspectRatio: '1/1',   // 정사각형 비율 강제
            }}
          />
        </div>
        <div className="info-area">
          <table>
            <tr>
              <td>이름:</td>
              <td>서상원</td>
            </tr>
            <tr>
              <td>학력:</td>
              <td>국립공주대학교 전자공학</td>
            </tr>
            <tr>
              <td>직무:</td>
              <td>웹 백엔드/프론트엔드 엔지니어</td>
            </tr>
            <tr>
              <td>현직장:</td>
              <td><a href="http://www.curioud.com/home" target="_blank" rel="noopener noreferrer">큐리어드</a></td>
            </tr>
            <tr>
              <td>거주:</td>
              <td>서울특별시 동작구</td>
            </tr>
            <tr>
              <td>이메일:</td>
              <td><a href="mailto:sw_1295@naver.com">sw_1295@naver.com</a></td>
            </tr>
            <tr>
              <td>GitHub:</td>
              <td><a href="https://github.com/ssw1295" target="_blank" rel="noopener noreferrer">@ssw1295</a></td>
            </tr>
          </table>
        </div>
      </div>

      <div className="right-side">
        <div
          className="introduce-area"
        >
          프론트엔드, 백엔드, 클라우드 등 <br />
          여러 기술을 사용해 웹 서비스를 개발해왔습니다. <br />
          현재는 큐리어드에서 웹 엔지니어로 일하고 있습니다.
        </div>
      </div>
    </div>
  </>
}