import React from "react"

import Layout, { Content, Header } from "../components/layout"
import SEO from "../components/seo"

const PostsPage = () => (
  <Layout>
    <SEO title="Blog" />
    <Header title="Blog" description="Este es mi blog"/>
    <Content>
      Hola mundo
    </Content>
  </Layout>
)

export default PostsPage
