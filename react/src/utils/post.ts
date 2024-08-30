import _ from 'lodash'

import {
  Post,
} from '@/types/post'


export const generateBoardOrderedPosts = (posts: Post[]) => {
  // 악의적으로 순서 섞어봄
  posts = _.shuffle(posts)

  const nestedPosts = generateNestedPosts(posts)
  const POST_KEY = '_post'

  const result: string[] = []
  const extractUrl = (postsObj: NestedDepthPosts) => {
    const keys = _.keys(postsObj)

    if (_.includes(keys, POST_KEY)) {
      result.push((postsObj[POST_KEY] as Post).url)
    }

    const childKeys =_.without(keys, POST_KEY)
    _.forEach(childKeys, key => {
      extractUrl(postsObj[key] as NestedDepthPosts)
    })

    return result
  }

  return extractUrl(nestedPosts)
}


export interface DepthPosts {
  _post: Post
}
export interface NestedDepthPosts {
  [depth: string | '_post']: NestedDepthPosts | Post
}

const test: NestedDepthPosts = {
  '_post' : {
    url: 'a',
    parent: '',
    depth: 1,
  },
  'a': {
    'b': {
      '_post': {
        url: 'a/b',
        parent: 'a',
        depth: 2,
      },
    }
  }
}

export const generateNestedPosts = (posts: Post[]): NestedDepthPosts => {
  const res: NestedDepthPosts = _.reduce(posts, (nestingDepthPosts, post) => {
    const {
      depth,
      parent,
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