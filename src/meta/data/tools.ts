import { LinkMeta } from "../types"

const tools: LinkMeta[] = [
  {
    name: "Cordova",
    icon: {
      svgPath: "seek-logo/cordova.svg",
      style: {
        backgroundColor: "white",
        borderRadius: "15%",
        padding: "0.05rem"
      },
    },
    href: "https://fontawesome.com/license",
  },
  {
    name: "FontAwesome",
    displayName: "Font Awesome",
    icon: {
      svgPath: "seek-logo/font-awesome.svg",
      style: {
        backgroundColor: "white",
        borderRadius: "15%",
      },
    },
    href: "https://fontawesome.com/license",
  },
  {
    name: "Git",
    icon: {
      style: { color: "#E94E31" },
      svgPath: "seek-logo/git.svg",
    },
    href: "https://git-scm.com/",
  },
  {
    name: "NodeJS",
    displayName: "Node.js",
    icon: {
      style: {
        color: "#7FC728",
        backgroundColor: "#333",
        borderRadius: "50%",
        padding: "0.05rem",
      },
      svgPath: "fontawesome/node-js-brands.svg",
    },
    href: "https://nodejs.org/",
  },
  {
    name: "NPM",
    icon: {
      style: {
        color: "white",
        backgroundColor: "#C53635",
        borderRadius: "50%",
        padding: "0.05rem",
      },
      svgPath: "fontawesome/npm-brands.svg",
    },
    href: "https://www.npmjs.com/",
  },
  {
    name: "Ubuntu",
    icon: {
      style: {
        color: "#D74614",
        backgroundColor: "white",
        borderRadius: "50%",
      },
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
