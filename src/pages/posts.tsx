import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import IconLink from "../components/Link"
import Redirect from "../components/Redirect"
import { devtoIconMeta } from "../meta/icons/iconify"

interface DevToPost {
  id: number
  title: string
  description: string
  readable_publish_date: string
  canonical_url: string
  social_image: string
  tags: string[]
}

const fetchDevToPosts = async () => {
  const response = await fetch("https://dev.to/api/articles?username=angelxehg&per_page=5")
  if (response.status !== 200) {
    throw new Error('Couldn\'t fetch from dev.to');

  }
  const items: DevToPost[] = await response.json();
  return items
}

interface PostCardProps {
  item: DevToPost
}

const PostCard = (
  props: PostCardProps & { titleAs?: "h2" | "h3" }
): JSX.Element => {
  const { title, description, canonical_url, social_image } = props.item
  const linkMeta = {
    name: title,
    icon: devtoIconMeta,
    href: canonical_url
  }
  return (
    <article className="card bg-dark text-light">
      <img src={social_image} alt={description} className="card-img-top" />
      <div className="card-body">
        {props.titleAs === "h2" && (
          <h2 className="card-title h5">
            <IconLink meta={linkMeta} iconProps={{ size: "1.25rem" }} />
          </h2>
        )}
        {props.titleAs === "h3" && (
          <h3 className="card-title h5">
            <IconLink meta={linkMeta} iconProps={{ size: "1.25rem" }} />
          </h3>
        )}
        <p className="card-text m-0">{description}</p>
      </div>
    </article>
  )
}

export const PostsSection = () => {
  const [posts, setPosts] = useState<DevToPost[]>([]);
  useEffect(() => {
    fetchDevToPosts().then(posts => setPosts(posts.slice(0, 4)))
  }, [])
  return (
    <section id="posts">
      <h2>
        Últimas <Link to="/posts">entradas</Link>:
      </h2>
      <div className="row">
        {posts.map(item => (
          <div key={item.id} className="col-lg-6 p-sm-1 pb-2">
            <PostCard item={item} titleAs="h3" />
          </div>
        ))}
      </div>
      <Link to="/posts">Ver todas las entradas {">"}</Link>
    </section>
  )
}

const PostsPage = (): JSX.Element => (
  <Redirect title="dev.to" url="https://dev.to/angelxehg" />
)

export default PostsPage
