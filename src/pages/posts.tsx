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
  const { slug, title, excerpt, date, image, caption } = props.item
  return (
    <article className="card bg-dark">
      {!props.noImage && (
        <GatsbyImage
          className="card-img-top img-200"
          image={image}
          alt={caption}
        />
      )}
      <div className="card-body">
        <Link to={`/${slug}`}>
          <h3 className="h5 card-title">{title}</h3>
        </Link>
        <h4 className="h6 card-subtitle mb-2">{date}</h4>
        <p className="card-text m-0">{excerpt}</p>
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
      <div className="container-xl ps-md-4 pe-md-4 pt-3 pb-3">
        <h1 className="h3">Mi blog</h1>
        <p>
          Aqui escribo de vez en cuando, acerca de desarrollo web y otros temas.
        </p>
        <h2 className="h4">Últimas entradas</h2>
        <div className="row">
          {posts.map(item => (
            <div key={item.id} className="col-xl-4 col-md-6 p-md-1 pb-2">
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