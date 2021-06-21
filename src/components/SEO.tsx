import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import { useSiteMetadata } from "../hooks/use-site-metadata"
import { useTheme } from "./Theme"

interface SEOProps {
  description: any
  lang: any
  meta: any
  title: any
  image: any
}

const SEO = (props: SEOProps) => {
  const { theme } = useTheme()

  const { description, lang, meta, title, image } = props
  const site = useSiteMetadata()

  const metaDescription = description || site.description
  const defaultTitle = site.title
  const seoImage = `${site.siteUrl}/${
    image !== "" ? image.slice(1) : "images/OpenGraph.Opt.png"
  }`
  const seoTitle = `${title} | ${defaultTitle}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | Angel Hurtado` : ""}
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
          property: `og:site_name`,
          content: defaultTitle,
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
      <body className={theme.name}></body>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  image: "",
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
}

export default SEO
