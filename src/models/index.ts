import { IGatsbyImageData } from "gatsby-plugin-image"

export interface SiteMetadata {
  title: string
  description: string
  author: string
  siteUrl: string
}

export interface RAWPage {
  id: string
  slug: string
  excerpt: string
  frontmatter: {
    title: string
    resume: string
    date: string
    image: { childImageSharp: { gatsbyImageData: IGatsbyImageData } }
    caption: string
    stack: string
    published: boolean
  }
}

export interface Page {
  id: string
  slug: string
  date: string
  title: string
  resume: string
  excerpt: string
  image: IGatsbyImageData
  caption: string
  published: boolean
  stack: string
}

export const toPage = (item: RAWPage): Page => {
  return {
    id: item.id,
    slug: item.slug,
    date: item.frontmatter.date,
    title: item.frontmatter.title,
    resume: item.frontmatter.resume,
    excerpt: item.excerpt,
    image: item.frontmatter.image.childImageSharp.gatsbyImageData,
    caption: item.frontmatter.caption,
    published: item.frontmatter.published,
    stack: item.frontmatter.stack,
  }
}

export const sortByDate = (a: Page, b: Page) => {
  if (a.date < b.date) {
    return 1
  }
  if (a.date > b.date) {
    return -1
  }
  return 0
}
