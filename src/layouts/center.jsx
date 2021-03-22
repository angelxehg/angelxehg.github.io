import React from 'react'
import PropTypes from 'prop-types'

const CenterLayout = props => (
  <div className="row text-center justify-content-center full-h text-white font-monospace">
    <main className="col align-self-center fill-sm">{props.children}</main>
  </div>
)

CenterLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CenterLayout
