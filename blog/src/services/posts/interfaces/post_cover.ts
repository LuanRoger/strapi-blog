export interface PostCover {
    data: {
        id: number
        attributes: {
            name: string
            hash: string
            url: string
            caption?: string
        }
    }
}