import Strapi from "strapi-sdk-js"
import type { MinimalPost } from "./interfaces/minimal_post"
import type { Post } from "./interfaces/post"

const strapi = new Strapi({
    url: import.meta.env.STRAPI_URL,
    axiosOptions: {
        headers: {
            Authorization: `Bearer ${import.meta.env.STRAPI_KEY}`
        }
    }
})

export async function getPostsMinimal(): Promise<MinimalPost[]> {
    const response = await strapi.find<MinimalPost[]>("posts", {
        fields: ["title"],
        populate: ["cover"]
    })
    
    return response.data
}

export async function getFullPost(id: number): Promise<Post> {
    const response = await strapi.findOne<Post>("posts", id, {
        populate: ["cover"]
    })
    
    return response.data
}