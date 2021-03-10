import { graphql, useStaticQuery } from "gatsby"

interface ContentNode {
  id: string
  slug: string
  excerpt: string
  frontmatter: {
    title: string
    type: string
    featuredImage: any
  }
}

export interface IContent {
  id: string
  slug: string
  title: string
  extract: string
  image: any
}

export const useContents = (type: string): IContent[] => {
  const { allMdx } = useStaticQuery(graphql`
    query AllContents {
      allMdx {
        nodes {
          id
          slug
          excerpt(pruneLength: 100)
          frontmatter {
            title
            type
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  `);
  const nodes: ContentNode[] = allMdx.nodes;
  const posts: IContent[] = nodes
    .filter(i => i.frontmatter.type === type)
    .map(node => {
      return {
        id: node.id,
        slug: node.slug,
        title: node.frontmatter.title,
        extract: node.excerpt,
        image: node.frontmatter.featuredImage.childImageSharp.gatsbyImageData
      }
    });
  return posts
}
