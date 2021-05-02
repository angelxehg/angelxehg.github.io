import React from 'react'

import { useSiteMetadata } from "@hooks/use-site-metadata"

const AboutSection = () => {
  const site = useSiteMetadata()
  return (
    <section id="about">
      <h2>Acerca de</h2>
      <p>{site.description}</p>
    </section>
  )
}

export default AboutSection
