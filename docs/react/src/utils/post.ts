import _ from 'lodash'

import {
  Post,
  BoardPost,
} from '@/types/post'


export interface ParentGroupedBoardPost {
  parents: string[]
  posts: BoardPost[]
}

export const generateParentGroupedBoardPosts= (posts: Post[]): ParentGroupedBoardPost[] => {
  // 악의적으로 순서 섞어봄
  posts = _.shuffle(posts)

  const nestedPosts = generateNestedPosts(posts)
  const POST_KEY = '_post'

  const boardPosts: BoardPost[] = []
  const extractUrl = (postsObj: NestedDepthPosts) => {
    const keys = _.keys(postsObj)

    if (_.includes(keys, POST_KEY)) {
      const {
        name,
        url,
        date,
      }: Post = postsObj[POST_KEY] as Post
      const parts = url.split('/')
      parts.shift()
      parts.shift()
      parts.pop()
      const parents = parts

      const boardPost: BoardPost = {
        name,
        url,
        date,
        parents,
      }
      boardPosts.push(boardPost)
    }

    const childKeys =_.without(keys, POST_KEY)
    _.forEach(childKeys, key => {
      extractUrl(postsObj[key] as NestedDepthPosts)
    })
  }

  extractUrl(nestedPosts)

  const result: ParentGroupedBoardPost[] = []

  const parentUrlBoardPostsObj = _.groupBy(boardPosts, (boardPost) => {
    return `${_.join(boardPost.parents, '/')}`
  })
  _.forEach(_.keys(parentUrlBoardPostsObj).sort(), (parentUrl) => {
    const boardPosts = _.sortBy(parentUrlBoardPostsObj[parentUrl], boardPost => {
      return boardPost.name
    })
    result.push({
      parents: parentUrl.split('/'),
      posts: boardPosts,
    })
  })

  return result
}


export interface DepthPosts {
  _post: Post
}
export interface NestedDepthPosts {
  [depth: string | '_post']: NestedDepthPosts | Post
}

export const generateNestedPosts = (posts: Post[]): NestedDepthPosts => {
  const res: NestedDepthPosts = _.reduce(posts, (nestingDepthPosts, post) => {
    const {
      url,
    } = post

    const depths = url.split('/')
    depths.shift()

    const postRef = _.reduce(depths, (ref, depth, index) => {
      return (ref[depth] ?? (ref[depth] = {})) as NestedDepthPosts
    }, nestingDepthPosts)

    postRef._post = post

    return nestingDepthPosts
  }, {} as NestedDepthPosts)

  return res
}