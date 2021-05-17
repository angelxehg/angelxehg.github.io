import { IGatsbyImageData } from "gatsby-plugin-image"

export interface SiteMetadata {
  title: string
  description: string
  author: string
  keywords: string
}

export interface RAWPost {
  id: string
  slug: string
  excerpt: string
  frontmatter: {
    title: string
    date: string
    image: { childImageSharp: { gatsbyImageData: IGatsbyImageData } }
    caption: string
    stack: string
  }
}

export interface Post {
  id: string
  slug: string
  date: string
  title: string
  excerpt: string
  image: IGatsbyImageData
  caption: string
}

export const toPost = (item: RAWPost): Post => {
  return {
    id: item.id,
    slug: item.slug,
    date: item.frontmatter.date,
    title: item.frontmatter.title,
    excerpt: item.excerpt,
    image: item.frontmatter.image.childImageSharp.gatsbyImageData,
    caption: item.frontmatter.caption,
  }
}

export interface Project extends Post {
  stack: string
}

export const toProject = (item: RAWPost): Project => {
  const { id, slug, date, title, excerpt, image, caption } = toPost(item)
  return {
    id,
    slug,
    date,
    title,
    excerpt,
    image,
    caption,
    stack: item.frontmatter.stack,
  }
}

export const sortByDate = (a: Post, b: Post) => {
  if (a.date < b.date) {
    return 1
  }
  if (a.date > b.date) {
    return -1
  }
  return 0
}
