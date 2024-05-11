require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const siteUrl =
  process.env.DEPLOY_PRIME_URL || process.env.URL || `https://angelxehg.com`

const { NODE_ENV, CONTEXT, NETLIFY } = process.env

module.exports = {
  siteMetadata: {
    title: `Angel Hurtado`,
    description: `¡Hola mundo! Hago web development con Angular, TypeScript y React`,
    author: `@angelxehg`,
    siteUrl: siteUrl,
  },
  flags: {
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
  },
  plugins: [
    `gatsby-plugin-webpack-bundle-analyser-v2`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
        }
      `,
        excludes: [`/404`, `/about`, `/skills`, "/projects", "/posts"],
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({ allSitePage: { nodes: allPages } }) => {
          return allPages
        },
        serialize: ({ path }) => {
          return { url: path }
        },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://angelxehg.com",
        resolveEnv: () => {
          if (NETLIFY) {
            return `${CONTEXT}@netlify`
          }
          return "production"
        },
        env: {
          production: {
            policy: [
              {
                userAgent: "*",
                allow: "/",
                disallow: ["/404"],
              },
            ],
            sitemap: "https://angelxehg.com/sitemap-index.xml",
          },
          "production@netlify": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "branch-deploy@netlify": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview@netlify": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        purgeCSSOptions: {},
      },
    },
  ],
}
