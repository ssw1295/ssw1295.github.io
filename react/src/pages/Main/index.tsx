import Board from '@/components/board'

import {
  Post,
} from 'types/post'

export default ({
  entryPosts,
}: {
  entryPosts: Post[]
}) => {
  return <>
    <div>
      hello main!!
    </div>

    <Board
      posts={ [] }
    />
  </>
}