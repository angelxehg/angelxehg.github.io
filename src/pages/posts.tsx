import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Grid, Column } from "../components/grid"
import { usePosts, IPost } from "../hooks/use-posts"
import { Link } from "gatsby"

const Post = (props: { post: IPost }) => {
  const { slug, title, extract } = props.post;
  return (
    <Column>
      <div className="card no-bg">
        <div className="card-body">
          <Link to={"/" + slug}>
            <h2 className="card-title">{title}</h2>
          </Link>
          <p className="card-text">{extract}</p>
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
