export interface Post {
  name: string
  url: string
}

export interface BoardPost extends Post {
  parents: string[]
}