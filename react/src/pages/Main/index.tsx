import Board from './Board/index'

import {
  Post,
} from '@/types/post'

import myImage from '@/assets/images/seo.png'

import './index.scss'

const COMPONENT_NAME = 'main'

export default ({
  entryPosts = [],
}: {
  entryPosts: Post[]
}) => {
  return <>
    <div className={COMPONENT_NAME}>
      {/* <h1
        className="title"
      >
        sangwon's dev log
      </h1> */}

      <section
        className="profile-card"
      >
        {/* <h2>profile</h2> */}
        <h2>
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
        </h2>
        <ul>
          <li>
            <span className="label">이름:</span>
            서상원
          </li>
          <li>
            <span className="label">직무:</span>
            웹 백엔드/프론트엔드 엔지니어
          </li>
          <li>
            <span className="label">학력:</span>
            국립공주대학교 전자공학 (학사)
          </li>
          <li>
            <span className="label">직장:</span>
            <a href="https://www.coupang.com" target="_blank" rel="noopener noreferrer">큐리어드</a>
          </li>
          <li>
            <span className="label">거주:</span>
            서울특별시 동작구 신대방동
          </li>
          <li>
            <span className="label">이메일:</span>
            <a href="mailto:sangwon.seo@coupang.com">sangwon.seo@coupang.com</a>
          </li>
          <li>
            <span className="label">GitHub:</span>
            <a href="https://github.com/SangwonSeo" target="_blank" rel="noopener noreferrer">@SangwonSeo</a>
          </li>
          <li>
            <span className="label">Powered by:</span>
            Jekyll, React
          </li>
        </ul>
      </section>

      <section>
        <h2>thoughts</h2>
        <ul>
          {entryPosts.map(post => (
            <li key={post.url}>
              <span className="date">
                {new Date(post.date).toISOString().split('T')[0]}
              </span>
              <a href={post.url}>{post.name}</a>
            </li>
          ))}
        </ul>
      </section>

      <Board posts={entryPosts} />
    </div>
  </>
}