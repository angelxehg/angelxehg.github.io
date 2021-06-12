import React from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

interface CenterLayoutProps {
  children: React.ReactNode | React.ReactNode[]
}

const CenterLayout = (props: CenterLayoutProps): JSX.Element => (
  <Row className="text-center justify-content-center full-h">
    <Col as="main" className="align-self-center fill-sm">
      {props.children}
    </Col>
  </Row>
)

export default CenterLayout
