import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Grid, Column } from "../components/grid"
import { usePosts, IPost } from "../hooks/use-posts"

const Post = (props: { post: IPost }) => {
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

const PostsPage = () => {
  const posts = usePosts();
  return (
    <Layout>
      <SEO title="Blog" />
      <Grid>
        {posts.map((item, index) => (
          <Post key={index} post={item} />
        ))}
      </Grid>
    </Layout>
  )  
}
export default PostsPage
