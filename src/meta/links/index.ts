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
import { html5, javaScript, markdown, python, typeScript } from "./syntax"
import { IconMeta } from "./types"
import { instagram, linkedIn, payPal, twitter } from "./websites"

const GitHubSVG = require("../../assets/bootstrap-icons/github.svg")

const AndroidSVG = require("../../assets/fontawesome/android-brands.svg")
const AWSSVG = require("../../assets/fontawesome/aws-brands.svg")
const DigitalOceanSVG = require("../../assets/fontawesome/digital-ocean-brands.svg")
const NodeJSSVG = require("../../assets/fontawesome/node-js-brands.svg")
const NPMSVG = require("../../assets/fontawesome/npm-brands.svg")
const UbuntuSVG = require("../../assets/fontawesome/ubuntu-brands.svg")

const DevToSVG = require("../../assets/iconify/devto.svg")
const CapacitorSVG = require("../../assets/iconify/capacitorjs.svg")
const HerokuSVG = require("../../assets/iconify/heroku.svg")

const FontAwesomeSVG = require("../../assets/seek-logo/font-awesome.svg")
const GitLabSVG = require("../../assets/seek-logo/gitlab.svg")
const GitSVG = require("../../assets/seek-logo/git.svg")
const FirebaseSVG = require("../../assets/seek-logo/firebase.svg")
const NetlifySVG = require("../../assets/seek-logo/netlify.svg")
const VSCodeSVG = require("../../assets/seek-logo/vscode.svg")

export interface LinkMeta {
  name: string
  icon: IconMeta
  href: string
}

export const gitHubIconMeta: IconMeta = {
  svg: GitHubSVG,
}

export const gitHubPagesIconMeta: IconMeta = {
  svg: GitHubSVG,
}

export const androidIconMeta: IconMeta = {
  color: "#3DD985",
  svg: AndroidSVG,
}

export const awsIconMeta: IconMeta = {
  color: "#F79400",
  svg: AWSSVG,
}

export const digitalOceanIconMeta: IconMeta = {
  color: "#007CF7",
  svg: DigitalOceanSVG,
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

export const capacitorIconMeta: IconMeta = {
  svg: CapacitorSVG,
}

export const devtoIconMeta: IconMeta = {
  fill: true,
  svg: DevToSVG,
}

export const herokuIconMeta: IconMeta = {
  svg: HerokuSVG,
  extraBc: "white",
  extraBcRad: "15%",
}

export const firebaseIconMeta: IconMeta = {
  svg: FirebaseSVG,
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

export const gitLabIconMeta: IconMeta = {
  color: "#F46A25",
  svg: GitLabSVG,
}

export const netlifyIconMeta: IconMeta = {
  svg: NetlifySVG,
}

export const vsCodeIconMeta: IconMeta = {
  svg: VSCodeSVG,
}

const android: LinkMeta = {
  name: "Android",
  icon: androidIconMeta,
  href: "https://www.android.com/intl/es_es/",
}

const aws: LinkMeta = {
  name: "AWS",
  icon: awsIconMeta,
  href: "https://aws.amazon.com/es/",
}

const capacitor: LinkMeta = {
  name: "Capacitor",
  icon: capacitorIconMeta,
  href: "https://capacitorjs.com/",
}

const devto: LinkMeta = {
  name: "Dev.to",
  icon: devtoIconMeta,
  href: "https://dev.to/",
}

const digitalOcean: LinkMeta = {
  name: "DigitalOcean",
  icon: digitalOceanIconMeta,
  href: "https://www.digitalocean.com/",
}

const firebase: LinkMeta = {
  name: "Firebase",
  icon: firebaseIconMeta,
  href: "https://firebase.google.com/",
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

const gitHub: LinkMeta = {
  name: "GitHub",
  icon: gitHubIconMeta,
  href: "https://github.com/",
}

const gitHubPages: LinkMeta = {
  name: "GitHub Pages",
  icon: gitHubPagesIconMeta,
  href: "https://pages.github.com/",
}

const gitLab: LinkMeta = {
  name: "GitLab",
  icon: gitLabIconMeta,
  href: "https://gitlab.com/",
}

const heroku: LinkMeta = {
  name: "Heroku",
  icon: herokuIconMeta,
  href: "https://dashboard.heroku.com/",
}

const netlify: LinkMeta = {
  name: "Netlify",
  icon: netlifyIconMeta,
  href: "https://www.netlify.com/",
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
  // websites
  instagram,
  linkedIn,
  payPal,
  twitter,
  // rest
  android,
  aws,
  capacitor,
  devto,
  digitalOcean,
  firebase,
  fas,
  git,
  gitHub,
  gitHubPages,
  gitLab,
  heroku,
  netlify,
  nodeJs,
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
