import React from "react"

import { LinkExternal, socialLinks } from "@components/social"
import { Icon } from "@components/icons"

const Footer = () => (
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
              v1.1.0
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

export default Footer
