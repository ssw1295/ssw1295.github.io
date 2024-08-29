export interface Post {
  url: string
  parent: string | null
  depth: number
}