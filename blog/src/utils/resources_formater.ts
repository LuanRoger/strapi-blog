export function formatStrapiResource(resouceUrl: string): string {
    const strapiUrl = import.meta.env.STRAPI_URL
    return `${strapiUrl}${resouceUrl}`
}