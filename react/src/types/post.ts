export interface Post {
  name: string
  url: string
  date: Date
}

export interface BoardPost extends Post {
  parents: string[]
}