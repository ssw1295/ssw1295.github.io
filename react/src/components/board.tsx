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

  return <>
    <h3>i am board</h3>
    <div className="board">
      {
        boardPosts.map((boardPost) => {
          return <>
            {/* 제목 */}
            <div>
              <span>
                {_.map(boardPost.parents, () => <><span>ㄴ</span></>)}
              </span>
              <span>
                {boardPost.parents[boardPost.parents.length - 1]}
              </span>
            </div>
            {/* 게시글들 */}
            <div>
              {
                _.map(boardPost.posts, (post) => {
                  return <div>
                    {/* 게시글 */}
                    {_.map(post.parents, () => <><span>ㅡ</span></>)}
                    {<>
                      <a
                        href={post.url}
                      >{post.name}</a>
                    </>}
                  </div>
                })
              }
            </div>
          </>
        })
      }
    </div>
  </>
}