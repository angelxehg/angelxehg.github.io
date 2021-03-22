import React from 'react'
import PropTypes from 'prop-types'

export const BaseLayout = props => (
  <div className="container-sm mt-3 mb-3 text-white font-monospace">
    {props.children}
  </div>
)

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

const FluidLayout = props => (
  <main className="container-fluid pt-3 pb-3">{props.children}</main>
)

FluidLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FluidLayout
