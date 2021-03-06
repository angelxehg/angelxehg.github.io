require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const {
  NODE_ENV,
  DEFAULT_URL,
  URL: NETLIFY_SITE_URL = DEFAULT_URL || "https://angelxehg.com",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env

module.exports = {
  siteMetadata: {
    title: `Angel Hurtado`,
    description: `¡Hola mundo! Soy un Web Developer, y trabajo principalmente con Angular, React y TypeScript. Ingeniero en TIC`,
    author: `@angelxehg`,
    siteUrl: NETLIFY_DEPLOY_URL,
  },
  flags: {
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PRESERVE_WEBPACK_CACHE: true,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        exclude: [`/404`, `/about`, `/skills`],
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
  ],
}
