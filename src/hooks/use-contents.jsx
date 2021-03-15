import { graphql, useStaticQuery } from "gatsby"

export const useContents = (type) => {
  const { allMdx } = useStaticQuery(graphql`
    query AllContents {
      allMdx {
        nodes {
          id
          slug
          excerpt(pruneLength: 100)
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            type
            stack
            github
            demo
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  `)
  const nodes = allMdx.nodes
  const posts = nodes
    .filter(i => i.frontmatter.type === type)
    .map(node => {
      return {
        id: node.id,
        slug: node.slug,
        date: node.frontmatter.date,
        title: node.frontmatter.title,
        extract: node.excerpt,
        stack: node.frontmatter.stack,
        github: node.frontmatter.github,
        demo: node.frontmatter.demo,
        image: node.frontmatter.featuredImage.childImageSharp.gatsbyImageData,
      }
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
