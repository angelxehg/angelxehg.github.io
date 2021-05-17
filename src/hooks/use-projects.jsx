import { graphql, useStaticQuery } from "gatsby"

export const useProjects = type => {
  const { allMdx } = useStaticQuery(graphql`
    query AllProjects {
      allMdx (filter: { frontmatter: {type: { eq: "project" }} }) {
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
            stack
            github
            demo
          }
        }
      }
    }
  `)
  const nodes = allMdx.nodes
  const projects = nodes
    .filter(i => i.frontmatter.type === type)
    .map(node => {
      return {
        id: node.id,
        slug: node.slug,
        date: node.frontmatter.date,
        title: node.frontmatter.title,
        excerpt: node.excerpt,
        stack: node.frontmatter.stack,
        github: node.frontmatter.github,
        demo: node.frontmatter.demo,
        image: node.frontmatter.image.childImageSharp.gatsbyImageData,
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
  return projects
}
