import { graphql, useStaticQuery } from "gatsby"

import { RAWPost, Post, sortByDate, toPost } from "../meta/models"

export const usePosts = (): Post[] => {
  const { allMdx } = useStaticQuery(graphql`
    query AllPosts {
      allMdx(filter: { frontmatter: { type: { eq: "post" } } }) {
        nodes {
          id
          slug
          excerpt(pruneLength: 100)
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
          }
        }
      }
    }
  `)
  const nodes: RAWPost[] = allMdx.nodes
  return nodes.map(toPost).sort(sortByDate)
}
