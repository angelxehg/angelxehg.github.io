import { graphql, useStaticQuery } from "gatsby"

import { Page, RAWPage, sortByDate, toPage } from "../models"

export const usePages = (): Page[] => {
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
  const nodes: RAWPage[] = allMdx.nodes
  return nodes
    .map(toPage)
    .sort(sortByDate)
    .filter(i => i.published === true)
}
