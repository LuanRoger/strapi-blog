import type { PostCover } from "./post_cover"

export interface Post {
    id: number
    attributes: PostAttributes
}

export interface PostAttributes {
    title: string
    body: string
    cover: PostCover
}