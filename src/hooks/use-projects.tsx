import { graphql, useStaticQuery } from "gatsby"

import { Project, RAWPost, sortByDate, toProject } from "../meta/models"

export const useProjects = (): Project[] => {
  const { allMdx } = useStaticQuery(graphql`
    query AllProjects {
      allMdx(filter: { frontmatter: { type: { eq: "project" } } }) {
        nodes {
          id
          slug
          excerpt(pruneLength: 35)
          frontmatter {
            title
            resume
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
  const nodes: RAWPost[] = allMdx.nodes
  return nodes.map(toProject).sort(sortByDate).filter(i => i.published === true);
}
