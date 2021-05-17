import { graphql, useStaticQuery } from "gatsby"

interface SiteMetadata {
  title: string
  description: string
  author: string
  keywords: string
}

export const useSiteMetadata = (): SiteMetadata => {
  const { site } = useStaticQuery(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          title
          description
          author
          keywords
        }
      }
    }
  `)
  return site.siteMetadata
}
