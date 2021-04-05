import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

export const Version = () => (
  <p className="mt-2">
    angelxehg.com{" "}
    <a
      href="https://github.com/angelxehg/angelxehg.com"
      rel="noreferrer"
      target="_blank"
    >
      v1.1.2
    </a>
  </p>
)

import { useSiteMetadata } from "@hooks/use-site-metadata"

const SEO = props => {
  const { description, lang, meta, title } = props
  const site = useSiteMetadata()

  const metaDescription = description || site.description
  const defaultTitle = site.title

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
          content: title,
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
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
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
