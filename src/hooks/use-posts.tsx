import { graphql, useStaticQuery } from "gatsby"

interface PostNode {
  id: string
  slug: string
  excerpt: string
  frontmatter: {
    title: string
    type: string
  }
}

export interface IPost {
  id: string
  slug: string
  title: string
  extract: string
}

export const usePosts = (): IPost[] => {
  const { allMdx } = useStaticQuery(graphql`
    query AllPosts {
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
  const nodes: PostNode[] = allMdx.nodes;
  const posts: IPost[] = nodes.map(node => {
    return {
      id: node.id,
      slug: node.slug,
      title: node.frontmatter.title,
      extract: node.excerpt
    }
  });
  return posts
}
