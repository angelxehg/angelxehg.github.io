import { graphql, useStaticQuery } from "gatsby"

export interface IPost {
  title: string
  extract: string
  date: string
}

export const usePosts = (): IPost[] => {
  const { nodes } = useStaticQuery(graphql`
    query AllPosts {
      allMdx {
        nodes {
          slug
          frontmatter {
            title
            date
            type
            published
          }
          id
        }
      }
    }
  `).allMdx;
  console.log(nodes);
  const posts: IPost[] = []
  for (let i = 1; i < 10; i++) {
    posts.push({
      title: `Artículo ${i}`,
      extract: `Este es el artículo ${i}, el cual es un ejemplo`,
      date: `Fecha ${i}/${i}/${i}`,
    })
  }
  return posts
}
