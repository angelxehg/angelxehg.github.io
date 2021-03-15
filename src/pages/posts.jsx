import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout, { Footer, LayoutContent } from "../components/layout"
import SEO from "../components/seo"
import { Grid, Column } from "../components/grid"
import { useContents } from "../hooks/use-contents"
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarItem,
  NavbarToggler,
} from "../components/navbar"

const Post = props => {
  const { slug, title, extract, image } = props
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

Post.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
  extract: PropTypes.string,
  image: PropTypes.object,
}

const PostsPage = () => {
  const posts = useContents("post")
  return (
    <Layout>
      <SEO title="Blog" lang="es" />
      <Navbar>
        <NavbarBrand title="Mi Blog" to="/posts" />
        <NavbarToggler />
        <NavbarCollapse>
          <NavbarItem title="Resumen" to="/" />
          <NavbarItem title="Proyectos" to="/projects" />
          <NavbarItem title="Trayectoria" to="/about" />
        </NavbarCollapse>
      </Navbar>
      <LayoutContent>
        <Grid>
          {posts.map(({ slug, title, extract, image }) => (
            <Post key={slug} title={title} extract={extract} image={image} />
          ))}
        </Grid>
      </LayoutContent>
      <Footer />
    </Layout>
  )
}
export default PostsPage
