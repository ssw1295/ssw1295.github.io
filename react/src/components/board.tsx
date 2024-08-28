import _ from 'lodash'

import {
  Post,
} from 'types/post'


export default ({
  posts,
}: {
  posts: Post[]
}) => {
  return <>
    i am board
    <div className="board">
      {_.map(posts, post => {
        return <div
          className={ `depth-${post.depth}` }
        >
          <a

            href={ post.url }
          >
            { post.url }
          </a>
        </div>
      }
      )}
    </div>
  </>
}