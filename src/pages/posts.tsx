import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout, { Footer, Header, LayoutContent } from "../components/layout"
import SEO from "../components/seo"
import { Grid, Column } from "../components/grid"
import { IContent, useContents } from "../hooks/use-contents"
import projects from "./projects"

const Post = (props: { post: IContent }) => {
  const { slug, title, extract, image } = props.post
  return (
    <Column>
      <div className="card no-bg">
        <GatsbyImage image={image} alt={title} />
        <div className="card-body pt-2 pb-2 p-1">
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
  const posts = useContents("post")
  return (
    <Layout>
      <SEO title="Blog" />
      <Header />
      <LayoutContent>
        <Grid>
          {posts.map((item, index) => (
            <Post key={index} post={item} />
          ))}
        </Grid>
      </LayoutContent>
      <Footer />
    </Layout>
  )
}
export default PostsPage
