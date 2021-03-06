import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import Layout from "../layouts/Layout"
import DefaultFooter from "../components/Footer"
import SEO from "../components/SEO"
import { CreateBadge, CreateLink } from "../components/Link"
import DefaultNavbar from "../components/Navbar"

interface DevToPost {
  id: number
  title: string
  description: string
  readable_publish_date: string
  canonical_url: string
  social_image: string
  tags: string
}

const fetchDevToPosts = async () => {
  const response = await fetch("https://dev.to/api/articles?username=angelxehg")
  if (response.status !== 200) {
    throw new Error("Couldn't fetch from dev.to")
  }
  const items: DevToPost[] = await response.json()
  return items
}

interface PostCardProps {
  item: DevToPost
}

const PostCard = (
  props: PostCardProps & { titleAs: "h2" | "h3" }
): JSX.Element => {
  const {
    title,
    description,
    canonical_url: href,
    social_image,
    tags,
  } = props.item
  return (
    <article className="card" style={{ height: "100%" }}>
      <img src={social_image} alt={description} className="card-img-top" />
      <div className="card-body">
        {props.titleAs === "h2" && (
          <h2 className="card-title h5">
            <CreateLink from="Dev.to" extend={{ title, href }} noIcon />
          </h2>
        )}
        {props.titleAs === "h3" && (
          <h3 className="card-title h5">
            <CreateLink from="Dev.to" extend={{ title, href }} noIcon />
          </h3>
        )}
        <p className="card-text m-0">{description}</p>
        <p className="card-text m-0">
          {tags.split(", ").map(tagName => (
            <CreateBadge
              key={tagName}
              from={tagName}
              extend={{
                title: tagName.charAt(0).toUpperCase() + tagName.slice(1),
                href: `https://dev.to/t/${tagName}`,
              }}
            />
          ))}
        </p>
      </div>
    </article>
  )
}

export const PostsSection = () => {
  const [posts, setPosts] = useState<DevToPost[]>([])
  useEffect(() => {
    fetchDevToPosts().then(posts => setPosts(posts.slice(0, 4)))
  }, [])
  return (
    <section id="posts">
      <h2>
        Últimas{" "}
        <CreateLink
          from="Dev.to"
          iconProps={{ size: "1.325rem" }}
          extend={{ title: "entradas", href: "/posts" }}
        />
        :
      </h2>
      <div className="row">
        {posts.map(item => (
          <div key={item.id} className="col-lg-6 p-sm-1 pb-3">
            <PostCard item={item} titleAs="h3" />
          </div>
        ))}
      </div>
      <CreateLink
        from="Dev.to"
        extend={{ title: "Ver todas las entradas >", href: "/posts" }}
      />
    </section>
  )
}

const PostsPage = (): JSX.Element => {
  const [posts, setPosts] = useState<DevToPost[]>([])
  useEffect(() => {
    fetchDevToPosts().then(posts => setPosts(posts.slice(0, 4)))
  }, [])
  return (
    <Layout>
      <SEO title="Entradas" lang="es" />
      <DefaultNavbar />
      <div className="hero">
        <div className="container-lg ps-sm-4 pe-sm-4 pt-3 pb-3">
          <Link to="/">{"< "}Volver a Portafolio</Link>
          <header className="mt-1">
            <h1>Todas mis entradas</h1>
            <p className="m-0">
              Estas son las entradas que he publicado en{" "}
              <CreateLink from="Dev.to" />
            </p>
          </header>
        </div>
      </div>
      <main className="container-lg ps-sm-4 pe-sm-4 pt-3 pb-3">
        <div className="row">
          {posts.map(item => (
            <div key={item.id} className="col-lg-6 p-sm-1 pb-3">
              <PostCard titleAs="h2" item={item} />
            </div>
          ))}
        </div>
      </main>
      <DefaultFooter />
    </Layout>
  )
}

export default PostsPage
