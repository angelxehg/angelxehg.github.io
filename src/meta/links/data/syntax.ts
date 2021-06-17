import { IconMeta, LinkMeta } from "../types"

const JavaScriptSVG = require("../../../assets/fontawesome/js-square-brands.svg")
const MarkdownSVG = require("../../../assets/fontawesome/markdown-brands.svg")
const HTML5SVG = require("../../../assets/seek-logo/html5.svg")
const PythonSVG = require("../../../assets/seek-logo/python.svg")
const TypeScriptSVG = require("../../../assets/seek-logo/typescript.svg")

export const html5: LinkMeta = {
  name: "HTML5",
  icon: {
    color: "#F64A1D",
    svg: HTML5SVG,
  },
  href: "https://developer.mozilla.org/es/docs/Web/Guide/HTML/HTML5",
}

export const javaScript: LinkMeta = {
  name: "JavaScript",
  icon: {
    color: "#F7DB00",
    svg: JavaScriptSVG,
  },
  href: "https://developer.mozilla.org/es/docs/Web/JavaScript",
}

export const markdown: LinkMeta = {
  name: "Markdown",
  icon: {
    svg: MarkdownSVG,
  },
  href: "https://www.markdownguide.org/",
}

export const python: LinkMeta = {
  name: "Python",
  icon: {
    svg: PythonSVG,
  },
  href: "https://www.python.org/",
}

export const typeScript: LinkMeta = {
  name: "TypeScript",
  icon: {
    color: "#356A97",
    svg: TypeScriptSVG,
  },
  href: "https://www.TypeScriptlang.org/",
}
