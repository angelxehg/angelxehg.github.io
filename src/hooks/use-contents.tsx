import { graphql, useStaticQuery } from "gatsby"

interface ContentNode {
  id: string
  slug: string
  excerpt: string
  frontmatter: {
    title: string
    date: string
    type: string
    stack: string
    github: string
    demo: string
    featuredImage: any
  }
}

export interface IContent {
  id: string
  slug: string
  date: string
  title: string
  extract: string
  stack: string 
  github: string
  demo: string
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
  `);
  const nodes: ContentNode[] = allMdx.nodes;
  const posts: IContent[] = nodes
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
        image: node.frontmatter.featuredImage.childImageSharp.gatsbyImageData
      }
    }).sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      }
      if (a.date > b.date) {
        return -1;
      }
      return 0;
    })
  return posts
}
