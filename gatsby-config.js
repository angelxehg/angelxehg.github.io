module.exports = {
  siteMetadata: {
    title: `Angel Hurtado`,
    subtitle: `Desarrollador Web`,
    description: `Desarrollador Web. Estudiante de Ingeniería en Tecnologías de la Información y Comunicación. Trabajo con Javascript, Typescript y Python.`,
    author: `@angelxehg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#335599`,
        theme_color: `#335599`,
        display: `minimal-ui`,
        icon: `src/images/avataaars.png`, // This path is relative to the root of the site.
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
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
