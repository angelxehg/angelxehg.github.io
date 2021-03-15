import React from "react"
import PropTypes from "prop-types"

import { LinkExternal, socialLinks } from "./social"
import { Icon } from "./icons"

export const Footer = () => (
  <footer>
    <nav className="navbar navbar-dark pg-bg divr">
      <div className="row ps-3" style={{ width: "100%" }}>
        <div className="col-lg-auto text-lg-end text-start order-lg-last">
          {socialLinks.map(({ title, to, icon }) => (
            <LinkExternal key={to} to={to} title={title}>
              <Icon name={icon} />
            </LinkExternal>
          ))}
          <br />
          <LinkExternal to="mailto:contact@angelxehg.com" title="Email">
            <Icon name="Email" className="me-1" />
            contact@angelxehg.com
          </LinkExternal>
        </div>
        <div className="col-lg mt-lg-0 mt-2">
          <p className="m-0">
            <b>
              © {new Date().getFullYear()}, Angel Hurtado. Versión del sitio:
              v1.0.0
            </b>
            <br />
            Las marcas y logos pertenecen a sus respectivos dueños. Iconos
            obtenidos desde{" "}
            <LinkExternal to="https://fontawesome.com/license">
              FontAwesome
            </LinkExternal>
            {", "}
            <LinkExternal to="https://icons.getbootstrap.com/">
              Bootstrap Icons
            </LinkExternal>
            {", "}
            <LinkExternal to="https://seeklogo.com/">SeekLogo</LinkExternal>
            {", "}
            <LinkExternal to="https://ionicons.com/">Ionicons</LinkExternal>
          </p>
        </div>
      </div>
    </nav>
  </footer>
)

const Layout = props => {
  return (
    <div className="container-sm mt-3 mb-3 text-white font-monospace">
      {props.children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export const LayoutContent = props => {
  return <main className="container-fluid pt-3 pb-3">{props.children}</main>
}

LayoutContent.propTypes = {
  children: PropTypes.node.isRequired,
}

export const CentralLayout = props => (
  <div className="row text-center justify-content-center full-h text-white font-monospace">
    <div className="col align-self-center fill-sm">{props.children}</div>
  </div>
)

CentralLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
