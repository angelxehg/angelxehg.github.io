import { graphql, useStaticQuery } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image"

export interface RAWPage {
  id: string
  fields: {
    slug: string
  }
  excerpt: string
  frontmatter: {
    title: string
    date: string
    image: { childImageSharp: { gatsbyImageData: IGatsbyImageData } }
    caption: string
    stack: string[]
    published: boolean
  }
}

export interface Page {
  id: string
  slug: string
  date: string
  title: string
  excerpt: string
  image: IGatsbyImageData
  caption: string
  stack: string[]
  published: boolean
}

export const toPage = (item: RAWPage): Page => {
  const { id, fields, excerpt } = item
  const { date, title, caption, stack, published } = item.frontmatter
  return {
    id,
    slug: fields.slug,
    date,
    title,
    excerpt,
    caption,
    stack,
    published,
    image: item.frontmatter.image.childImageSharp.gatsbyImageData,
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

export const usePages = (): Page[] => {
  const { allMdx } = useStaticQuery(graphql`
    query AllProjects {
      allMdx {
        nodes {
          id
          fields {
            slug
          }
          excerpt(pruneLength: 35)
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
            caption
            stack
            published
          }
        }
      }
    }
  `)
  const nodes: RAWPage[] = allMdx.nodes
  return nodes
    .map(toPage)
    .sort(sortByDate)
    .filter(i => i.published === true)
}
