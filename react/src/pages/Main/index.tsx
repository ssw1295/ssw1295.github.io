import {
  generateNestedPosts,
  generateParentGroupedBoardPosts,
} from '@/utils/post'

import Board from '@/components/board'

import {
  Post,
} from '@/types/post'

import './index.scss'

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
    <div
      className={ 'seo' }
    >
      hello main!!
    </div>

    <div
      id='main'
    >
      hohoho
    </div>

    <Board
      posts={ entryPosts }
    />
  </>
}