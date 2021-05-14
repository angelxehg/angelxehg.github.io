import React from "react"

import DefaultFooter from "../components/footer"
import SEO from "../components/seo"
import { usePosts } from "../hooks/use-posts"
import { Link } from "gatsby"
import { PostsNavbar } from "../components/navbar"

const PostsPage = () => {
  const posts = usePosts()
  return (
    <div>
      <SEO title="Blog" lang="es" />
      <PostsNavbar />
      <div className="container-xl ps-md-4 pe-md-4 pt-3 pb-3">
        <h1 className="h3">Mi blog</h1>
        <p>
          Aqui escribo de vez en cuando, acerca de desarrollo web y otros temas.
          Visita mi <Link to="/">Portafolio</Link>.
        </p>
        <h2 className="h4">Últimas entradas</h2>
        <div className="row">
          {posts.map(item => {
            const { slug, title, excerpt, date } = item
            return (
              <div key={slug} className="col-xl-6 p-md-1 pb-2">
                <article className="card bg-dark">
                  <div className="card-body">
                    <Link to={`/${slug}`}>
                      <h3 className="h5 card-title">{title}</h3>
                    </Link>
                    <h4 className="h6 card-subtitle mb-2">{date}</h4>
                    <p className="card-text m-0">{excerpt}</p>
                  </div>
                </article>
              </div>
            )
          })}
        </div>
      </div>
      <DefaultFooter />
    </div>
  )
}

export default PostsPage
