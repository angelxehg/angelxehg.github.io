import React from "react"
import { Link } from "gatsby"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { ProfileImage } from "../components/social"

const DefaultHeader = () => {
  const site = useSiteMetadata()
  return (
    <div className="text-center mt-1">
      <ProfileImage />
      <header className="mt-2">
        <h1 className="h3">{site.title}</h1>
        <p>{site.description}</p>
      </header>
      <nav>
        <Link to="/#projects">
          Proyectos
        </Link>, <Link to="/#skills" >
          Habilidades
        </Link>, <Link to="/#about">
          Acerca de
        </Link>
      </nav>
    </div>
  )
}

export default DefaultHeader
