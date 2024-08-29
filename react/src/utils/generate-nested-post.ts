import _ from 'lodash'

import {
  Post,
} from '@/types/post'

export interface DepthPosts {
  _posts: Post[]
}
export interface NestedDepthPosts {
  [depth: string]: DepthPosts | NestedDepthPosts
}

export default (posts: Post[]): NestedDepthPosts => {
  console.log('hi!!')

  /**
   * post들을 돌면서, nested한 객체를 만들어야 한다.
   * 한 post의 url을 /로 나눠 그것을 차례로 순환하며,
   * nested 객체를 채워줘야 한다.
   * 한 post의 마지막일때 해당 key의 posts들에 push해줘야 한다.
   * posts
   */

  const res: NestedDepthPosts = _.reduce(posts, (nestedDepthPosts, post) => {
    const {
      depth,
      parent,
      url,
    } = post

    const depths = url.split('/')
    depths.shift()

    const postRef: any = _.reduce(depths, (ref, depth, index) => {
      return (ref[depth] ??= {_posts: []}) as NestedDepthPosts
    }, nestedDepthPosts as NestedDepthPosts)

    Object.assign(postRef, {url: `/${1}`})

    return nestedDepthPosts
  }, {})

  return res
}