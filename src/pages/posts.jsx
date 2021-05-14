import React from "react"

import DefaultFooter from "../components/footer"
import SEO from "../components/seo"
import { usePosts } from "../hooks/use-posts"
import { Link } from "gatsby"
import { PostsNavbar } from "../components/navbar"

const PostsPage = () => {
  const posts = usePosts().slice(0, 3);
  return (
    <div>
      <SEO title="Blog" lang="es" />
      <PostsNavbar />
      <div className="container-lg p-md-4 pt-4 pb-3">
        <h1 className="h4">Últimas entradas</h1>
        <div className="row">
          {posts.map(item => {
            const { slug, title, excerpt } = item
            return (
              <div key={slug} className="col-xl-6 p-md-1 pb-2">
                <article className="card bg-dark">
                  <div className="card-body">
                    <Link to={`/${slug}`}>
                      <h2 className="h5 card-title">{title}</h2>
                    </Link>
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
