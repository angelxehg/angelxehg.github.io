require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const siteUrl =
  process.env.NETLIFY_SITE_URL ||
  process.env.DEFAULT_URL ||
  `https://angelxehg.com`

const { NODE_ENV, CONTEXT: NETLIFY_ENV = NODE_ENV } = process.env

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
          allMdx {
            nodes {
              id
              fields {
                slug
              }
              frontmatter {
                date
              }
            }
          }
        }
      `,
        excludes: [`/404`, `/about`, `/skills`],
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({
          allSitePage: { nodes: allPages },
          allMdx: { nodes: allMdx },
        }) => {
          const mdxNodeMap = allMdx.reduce((acc, node) => {
            const uri = node.fields.slug
            acc[uri] = node
            return acc
          }, {})

          return allPages.map(page => {
            return { ...page, ...mdxNodeMap[page.path] }
          })
        },
        serialize: ({ path, frontmatter }) => {
          var returned = { url: path }
          if (frontmatter != null && frontmatter.date != null) {
            returned = {
              url: path,
              lastmod: frontmatter.date,
            }
          }
          return returned
        },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://angelxehg.com",
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [
              {
                userAgent: "*",
                allow: "/",
                disallow: ["/404", "/about", "/skills"],
              },
            ],
            sitemap: "https://angelxehg.com/sitemap.xml",
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
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
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#f6f6f6`,
        theme_color: `#f6f6f6`,
        display: `minimal-ui`,
        icon: `static/images/Avataaars.Opt.Sqr.png`, // This path is relative to the root of the site.
      },
    },
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
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        purgeCSSOptions: {},
      },
    },
    `gatsby-plugin-dark-mode`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Open Sans",
              variants: ["300", "400", "500"],
            },
          ],
        },
      },
    },
  ],
}
