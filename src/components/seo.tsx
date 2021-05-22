import React from "react"
import { Helmet } from "react-helmet"

import { useSiteMetadata } from "../hooks/use-site-metadata"

interface SEOProps {
  description: any
  lang: any
  meta: any
  title: any
  image: any
}

const SEO = (props: SEOProps) => {
  const { description, lang, meta, title, image } = props
  const site = useSiteMetadata()

  const metaDescription = description || site.description
  const defaultTitle = site.title
  const seoImage = `${process.env.GATSBY_DOMAIN}${image !== "" ? image.slice(1) : "images/OpenGraph.Opt.png"
    }`
  const seoTitle = `${title} | ${defaultTitle}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : ""}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: seoTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: seoImage,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.author || ``,
        },
        {
          name: `twitter:title`,
          content: seoTitle,
        },
        {
          name: `twitter:image`,
          content: seoImage,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <body className="text-light"></body>
    </Helmet>
  )
}

export default SEO
