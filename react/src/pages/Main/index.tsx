import {
  generateNestedPosts,
  generateParentGroupedBoardPosts,
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
  // const nestedPosts = generateNestedPosts(entryPosts)
  // console.log({nestedPosts})

  // const boardOrderedPosts = generateParentGroupedBoardPosts(entryPosts)
  // console.log({boardOrderedPosts})

  return <>
    <div>
      hello main!!
    </div>

    <Board
      posts={ entryPosts }
    />
  </>
}