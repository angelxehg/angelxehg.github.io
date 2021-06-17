import { IconMeta, LinkMeta } from "../types"

const NodeJSSVG = require("../../../assets/fontawesome/node-js-brands.svg")
const NPMSVG = require("../../../assets/fontawesome/npm-brands.svg")
const UbuntuSVG = require("../../../assets/fontawesome/ubuntu-brands.svg")
const FontAwesomeSVG = require("../../../assets/seek-logo/font-awesome.svg")
const GitSVG = require("../../../assets/seek-logo/git.svg")
const VSCodeSVG = require("../../../assets/seek-logo/vscode.svg")

export const fas: LinkMeta = {
  name: "Font Awesome",
  icon: {
    svg: FontAwesomeSVG,
    extraBc: "white",
    extraBcRad: "15%",
  },
  href: "https://fontawesome.com/license",
}

export const git: LinkMeta = {
  name: "Git",
  icon: {
    color: "#E94E31",
    svg: GitSVG,
  },
  href: "https://git-scm.com/",
}

export const nodeJs: LinkMeta = {
  name: "NodeJS",
  icon: {
    color: "#7FC728",
    svg: NodeJSSVG,
  },
  href: "https://nodejs.org/",
}

export const npm: LinkMeta = {
  name: "NPM",
  icon: {
    color: "#C53635",
    extraBc: "white",
    extraBcRad: "50%",
    svg: NPMSVG,
  },
  href: "https://www.npmjs.com/",
}

export const ubuntu: LinkMeta = {
  name: "Ubuntu",
  icon: {
    color: "#D74614",
    extraBc: "white",
    extraBcRad: "50%",
    svg: UbuntuSVG,
  },
  href: "https://ubuntu.com/",
}

export const vsCode: LinkMeta = {
  name: "VSCode",
  icon: {
    svg: VSCodeSVG,
  },
  href: "https://code.visualstudio.com/",
}
