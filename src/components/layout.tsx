/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"

const Layout = (props: { children: any }) => {

  return (
    <div className="container-sm mt-3 mb-3 text-white font-monospace">
      <Header/>
      <div>
        <main>{props.children}</main>
        <footer>
          © {new Date().getFullYear()}, Angel Hurtado
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
