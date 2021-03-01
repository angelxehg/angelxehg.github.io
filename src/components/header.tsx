import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = (props: { siteTitle: string }) => (
  <header>
    <div>
      <h1 >
        <Link to="/">
          {props.siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
