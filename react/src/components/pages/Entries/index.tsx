import {
  Post,
} from '@/types/post'

import Board from './Board/index'

import './index.scss'

const COMPONENT_NAME = 'entries'

export default ({
  entryPosts,
}: {
  entryPosts: Post[]
}) => {
  return (
    <div
      className={COMPONENT_NAME}
    >
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
  )
}