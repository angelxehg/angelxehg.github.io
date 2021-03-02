import React from "react"
import PropTypes from "prop-types"

export const Grid = (props: { children: any }) => (
  <div className="row ps-2 pe-2 mt-1">{props.children}</div>
)

Grid.propTypes = {
  children: PropTypes.node.isRequired,
}

export const Column = (props: { children: any }) => (
  <div className="col-xl-4 col-md-6 p-1">{props.children}</div>
)

Column.propTypes = {
  children: PropTypes.node.isRequired,
}
