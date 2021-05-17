import { graphql, useStaticQuery } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image"

interface RawNode {
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

interface PostNode {
  id: string
  slug: string
  date: string
  title: string
  excerpt: string
  image: IGatsbyImageData
  caption: string
}

export const usePosts = (): PostNode[] => {
  const { allMdx } = useStaticQuery(graphql`
    query AllPosts {
      allMdx(filter: { frontmatter: { type: { eq: "post" } } }) {
        nodes {
          id
          slug
          excerpt(pruneLength: 100)
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
            caption
          }
        }
      }
    }
  `)
  const nodes: RawNode[] = allMdx.nodes
  const posts = nodes
    .map(node => {
      const formated: PostNode = {
        id: node.id,
        slug: node.slug,
        date: node.frontmatter.date,
        title: node.frontmatter.title,
        excerpt: node.excerpt,
        image: node.frontmatter.image.childImageSharp.gatsbyImageData,
        caption: node.frontmatter.caption,
      }
      return formated
    })
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1
      }
      if (a.date > b.date) {
        return -1
      }
      return 0
    })
  return posts
}
