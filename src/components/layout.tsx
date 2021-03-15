import React from "react"
import PropTypes from "prop-types"

import { LinkExternal } from "./social"
import {
  EmailIcon,
  GitHubIcon,
  GitlabIcon,
  InstagramIcon,
  LinkedInIcon,
  PayPalIcon,
  TwitterIcon,
} from "./icons"
import { Navbar, NavbarBrand, NavbarCollapse, NavbarItem, NavbarToggler } from "./navbar"

export const Footer = () => (
  <footer>
    <nav className="navbar navbar-dark pg-bg divr">
      <div className="row ps-3" style={{ width: "100%" }}>
        <div className="col-lg-auto text-lg-end text-start order-lg-last">
          <LinkExternal
            to="https://www.linkedin.com/in/angelxehg"
            title="LinkedIn (/in/angelxehg)"
          >
            <LinkedInIcon />
          </LinkExternal>
          <LinkExternal
            to="https://www.paypal.me/angelxehg"
            title="PayPal (@angelxehg)"
          >
            <PayPalIcon />
          </LinkExternal>
          <LinkExternal
            to="https://github.com/angelxehg"
            title="GitHub (@angelxehg)"
          >
            <GitHubIcon />
          </LinkExternal>
          <LinkExternal
            to="https://gitlab.com/angelxehg"
            title="GitLab (@angelxehg)"
          >
            <GitlabIcon />
          </LinkExternal>
          <LinkExternal
            to="https://www.twitter.com/angelxehg"
            title="Twitter (@angelxehg)"
          >
            <TwitterIcon />
          </LinkExternal>
          <LinkExternal
            to="https://www.instagram.com/angelxehg"
            title="Instagram (@angelxehg)"
          >
            <InstagramIcon />
          </LinkExternal>
          <br />
          <LinkExternal to="mailto:contact@angelxehg.com" title="Email">
            <EmailIcon className="me-1" />
            contact@angelxehg.com
          </LinkExternal>
        </div>
        <div className="col-lg mt-lg-0 mt-2">
          <p className="m-0">
            <b>© {new Date().getFullYear()}, Angel Hurtado. Versión del sitio: v1.0.0</b>
            <br />
            Las marcas y logos pertenecen a sus respectivos dueños. Iconos obtenidos desde{" "}
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

const Layout = (props: { children: any }) => {
  return (
    <div className="container-sm mt-3 mb-3 text-white font-monospace">
      {props.children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export const LayoutContent = (props: { children: any }) => {
  return (
    <main className="container-fluid pt-3 pb-3">
      {props.children}
    </main>
  )
}

LayoutContent.propTypes = {
  children: PropTypes.node.isRequired,
}

export const CentralLayout = (props: { children: any }) => (
  <div className="row text-center justify-content-center full-h text-white font-monospace">
    <div className="col align-self-center fill-sm">{props.children}</div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
