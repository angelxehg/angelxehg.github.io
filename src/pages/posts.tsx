import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import DefaultFooter from "../components/footer"
import SEO from "../components/seo"
import { usePosts } from "../hooks/use-posts"
import DefaultNavbar from "../components/navbar"
import { Post } from "../meta/models"

export const PostCard = (props: {
  item: Post
  noImage?: boolean
}): JSX.Element => {
  const { slug, title, resume, date, image, caption } = props.item
  return (
    <article className="card bg-dark">
      <div className="row">
        {!props.noImage && <div className="col-xl-3 col-md-4">
          <GatsbyImage
            className="card-img-top img-200"
            image={image}
            alt={caption}
          />
        </div>}
        <div className="col-md">
          <div className="card-body">
            <Link to={`/${slug}`}>
              <h3 className="h5 card-title">{title}</h3>
            </Link>
            <h4 className="h6 card-subtitle mb-2">{date}</h4>
            <p className="card-text m-0">{resume}</p>
          </div>
        </div>
      </div>
    </article>
  )
}

const PostsPage = (): JSX.Element => {
  const posts = usePosts()
  return (
    <div>
      <SEO title="Blog" lang="es" />
      <DefaultNavbar />
      <div className="container-xl pt-3 pb-3">
        <h1 className="h3">Mi blog</h1>
        <p>
          Aqui escribo de vez en cuando, acerca de desarrollo web y otros temas.
        </p>
        <h2 className="h4">Últimas entradas</h2>
        <div className="row">
          {posts.map(item => (
            <div key={item.id} className="col-12 p-md-1 pb-2">
              <PostCard item={item} />
            </div>
          ))}
        </div>
      </div>
      <DefaultFooter />
    </div>
  )
}

export default PostsPage
