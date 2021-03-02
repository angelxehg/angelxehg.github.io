import { graphql, useStaticQuery } from "gatsby"

interface SiteMetadata {
  title: string
  subtitle: string
  description: string
  author: string
}

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          title
          subtitle
          description
          author
        }
      }
    }
  `)

  return site.siteMetadata as SiteMetadata
}
