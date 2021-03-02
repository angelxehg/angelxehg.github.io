import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Grid, Column } from "../components/grid"

interface PostInterface {
  title: string
  extract: string
  date: string
}

const posts: PostInterface[] = []
for (let i = 1; i < 10; i++) {
  posts.push({
    title: `Artículo ${i}`,
    extract: `Este es el artículo ${i}, el cual es un ejemplo`,
    date: `Fecha ${i}/${i}/${i}`,
  })
}

const Post = (props: { post: PostInterface }) => {
  return (
    <Column>
      <div className="card no-bg">
        <div className="card-body">
          <h2 className="card-title">{props.post.title}</h2>
          <p className="card-text">{props.post.extract}</p>
          <p className="card-text">{props.post.date}</p>
        </div>
      </div>
    </Column>
  )
}

const PostsPage = () => (
  <Layout>
    <SEO title="Blog" />
    <Grid>
      {posts.map((item, index) => (
        <Post key={index} post={item} />
      ))}
    </Grid>
  </Layout>
)

export default PostsPage
