import { graphql, useStaticQuery } from "gatsby"

import { SiteMetadata } from "../models"

export const useSiteMetadata = (): SiteMetadata => {
  const { site } = useStaticQuery(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
    }
  `)
  return site.siteMetadata
}
