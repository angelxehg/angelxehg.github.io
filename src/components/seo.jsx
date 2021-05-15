import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import { useSiteMetadata } from "../hooks/use-site-metadata"

const SEO = props => {
  const { description, lang, meta, title } = props
  const site = useSiteMetadata()

  const metaDescription = description || site.description
  const defaultTitle = site.title
  const seoImage = `${process.env.GATSBY_DOMAIN}images/OpenGraph.Opt.png`
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

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
