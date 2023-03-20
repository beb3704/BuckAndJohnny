export interface Blog {
    id: number
    licenseId: number
    title: string
    slug: string
    selectedPublishOption: string
    publishDate: string
    excerpt: string
    currentStatus: any
    imgSrc: string
    imgSrcAltText: string
    tags: Tag[]
    body: string
}

export interface Tag {
    name: string
}
