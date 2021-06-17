import React from "react"
import {
  angular,
  bootstrap,
  django,
  gatsby,
  ionic,
  reactJs,
  reactNative,
} from "./frameworks"
import { file, email, web } from "./generic"
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
} from "./platforms"
import { html5, javaScript, markdown, python, typeScript } from "./syntax"
import { IconMeta } from "./types"
import { instagram, linkedIn, payPal, twitter, devto } from "./websites"

const NodeJSSVG = require("../../assets/fontawesome/node-js-brands.svg")
const NPMSVG = require("../../assets/fontawesome/npm-brands.svg")
const UbuntuSVG = require("../../assets/fontawesome/ubuntu-brands.svg")
const FontAwesomeSVG = require("../../assets/seek-logo/font-awesome.svg")
const GitSVG = require("../../assets/seek-logo/git.svg")
const VSCodeSVG = require("../../assets/seek-logo/vscode.svg")

export interface LinkMeta {
  name: string
  icon: IconMeta
  href: string
}

export const nodeJsIconMeta: IconMeta = {
  color: "#7FC728",
  svg: NodeJSSVG,
}

export const npmIconMeta: IconMeta = {
  color: "#C53635",
  extraBc: "white",
  extraBcRad: "50%",
  svg: NPMSVG,
}

export const ubuntuIconMeta: IconMeta = {
  color: "#D74614",
  extraBc: "white",
  extraBcRad: "50%",
  svg: UbuntuSVG,
}

export const fasIconMeta: IconMeta = {
  svg: FontAwesomeSVG,
  extraBc: "white",
  extraBcRad: "15%",
}

export const gitIconMeta: IconMeta = {
  color: "#E94E31",
  svg: GitSVG,
}

export const vsCodeIconMeta: IconMeta = {
  svg: VSCodeSVG,
}

const fas: LinkMeta = {
  name: "Font Awesome",
  icon: fasIconMeta,
  href: "https://fontawesome.com/license",
}

const git: LinkMeta = {
  name: "Git",
  icon: gitIconMeta,
  href: "https://git-scm.com/",
}

const nodeJs: LinkMeta = {
  name: "NodeJS",
  icon: nodeJsIconMeta,
  href: "https://nodejs.org/",
}

const npm: LinkMeta = {
  name: "NPM",
  icon: npmIconMeta,
  href: "https://www.npmjs.com/",
}

const ubuntu: LinkMeta = {
  name: "Ubuntu",
  icon: ubuntuIconMeta,
  href: "https://ubuntu.com/",
}

const vsCode: LinkMeta = {
  name: "VSCode",
  icon: vsCodeIconMeta,
  href: "https://code.visualstudio.com/",
}

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
  // rest
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
