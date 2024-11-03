import _ from 'lodash'

import {
  generateParentGroupedBoardPosts,
} from '@/utils/post'

import {
  Post,
  BoardPost,
} from '@/types/post'


export default ({
  posts,
}: {
  posts: Post[]
}) => {
  const boardPosts = generateParentGroupedBoardPosts(posts)

  return (
    <section className="board">
      <h2>boards</h2>
      <ul>
        {boardPosts.map((boardPost, idx) => (
          <li key={idx} style={{ marginLeft: `${boardPost.parents.length * 1}rem` }}>
            {/* 카테고리 제목 */}
            <div className="category">
              {boardPost.parents[boardPost.parents.length - 1]}
            </div>

            {/* 해당 카테고리의 게시글들 */}
            <ul>
              {boardPost.posts.map((post, postIdx) => (
                <li key={postIdx}>
                  <a href={post.url}>{post.name}</a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}