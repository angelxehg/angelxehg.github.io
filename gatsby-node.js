/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@layouts": path.resolve(__dirname, "src/layouts"),
        "@assets": path.resolve(__dirname, "src/assets"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@hooks": path.resolve(__dirname, "src/hooks"),
        "@css": path.resolve(__dirname, "src/css"),
      },
    },
  })
}
