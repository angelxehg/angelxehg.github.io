import { graphql, useStaticQuery } from "gatsby"

interface SiteMetadata {
  title: string
  description: string
}

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return site.siteMetadata as SiteMetadata
}
