import generateNestedPost from '@/utils/generate-nested-post'

import Board from '@/components/board'

import {
  Post,
} from '@/types/post'


export default ({
  entryPosts = [],
}: {
  entryPosts: Post[]
}) => {
  const nestedPosts = generateNestedPost(entryPosts)
  console.log({nestedPosts})

  return <>
    <div>
      hello main!!
    </div>

    <Board
      posts={ entryPosts }
    />
  </>
}