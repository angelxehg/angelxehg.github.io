import { graphql, useStaticQuery } from "gatsby"

interface ContentNode {
  id: string
  slug: string
  excerpt: string
  frontmatter: {
    title: string
    type: string
  }
}

export interface IContent {
  id: string
  slug: string
  title: string
  extract: string
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
        extract: node.excerpt
      }
    });
  return posts
}
