import React from "react"
import {
  angular,
  bootstrap,
  django,
  gatsby,
  ionic,
  reactJs,
  reactNative,
} from "./data/frameworks"
import { file, email, web } from "./data/generic"
import {
  android,
  aws,
  capacitor,
  digitalOcean,
  firebase,
  gitHub,
  gitHubPages,
  gitLab,
  heroku,
  netlify,
} from "./data/platforms"
import { html5, javaScript, markdown, python, typeScript } from "./data/syntax"
import { fas, git, npm, ubuntu, vsCode } from "./data/tools"
import { instagram, linkedIn, payPal, twitter, devto } from "./data/websites"

const allLinks = [
  // generic
  file,
  email,
  web,
  // frameworks
  angular,
  bootstrap,
  django,
  gatsby,
  ionic,
  reactJs,
  reactNative,
  // syntax
  html5,
  javaScript,
  markdown,
  python,
  typeScript,
  // platforms
  android,
  aws,
  capacitor,
  digitalOcean,
  firebase,
  gitHub,
  gitHubPages,
  gitLab,
  heroku,
  netlify,
  // websites
  instagram,
  linkedIn,
  payPal,
  twitter,
  devto,
  // tools
  fas,
  git,
  npm,
  ubuntu,
  vsCode,
]

export const getLinkMeta = (linkName: string) => {
  const link = allLinks.find(i => i.name === linkName)
  if (!link) {
    throw new Error(`Base link '${linkName}' not found`)
  }
  return link
}

export default allLinks
