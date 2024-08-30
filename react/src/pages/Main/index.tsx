import {
  generateNestedPosts,
  generateBoardOrderedPosts,
} from '@/utils/post'

import Board from '@/components/board'

import {
  Post,
} from '@/types/post'


export default ({
  entryPosts = [],
}: {
  entryPosts: Post[]
}) => {
  const nestedPosts = generateNestedPosts(entryPosts)
  console.log({nestedPosts})

  const boardOrderedPosts = generateBoardOrderedPosts(entryPosts)
  console.log({boardOrderedPosts})

  return <>
    <div>
      hello main!!
    </div>

    <Board
      posts={ entryPosts }
    />
  </>
}