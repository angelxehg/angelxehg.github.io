import { LinkMeta } from "../types"

const tools: LinkMeta[] = [
  {
    name: "Font Awesome",
    icon: {
      svgPath: "seek-logo/font-awesome.svg",
      extraBc: "white",
      extraBcRad: "15%",
    },
    href: "https://fontawesome.com/license",
  },
  {
    name: "Git",
    icon: {
      color: "#E94E31",
      svgPath: "seek-logo/git.svg",
    },
    href: "https://git-scm.com/",
  },
  {
    name: "NodeJS",
    icon: {
      color: "#7FC728",
      svgPath: "fontawesome/node-js-brands.svg",
    },
    href: "https://nodejs.org/",
  },
  {
    name: "NPM",
    icon: {
      color: "#C53635",
      extraBc: "white",
      extraBcRad: "50%",
      svgPath: "fontawesome/npm-brands.svg",
    },
    href: "https://www.npmjs.com/",
  },
  {
    name: "Ubuntu",
    icon: {
      color: "#D74614",
      extraBc: "white",
      extraBcRad: "50%",
      svgPath: "fontawesome/ubuntu-brands.svg",
    },
    href: "https://ubuntu.com/",
  },
  {
    name: "VSCode",
    icon: {
      svgPath: "seek-logo/vscode.svg",
    },
    href: "https://code.visualstudio.com/",
  },
]

export default tools
