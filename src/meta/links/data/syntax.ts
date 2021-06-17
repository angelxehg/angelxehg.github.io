import { LinkMeta } from "../types"

const html5: LinkMeta = {
  name: "HTML5",
  icon: {
    color: "#F64A1D",
    svgPath: "seek-logo/html5.svg",
  },
  href: "https://developer.mozilla.org/es/docs/Web/Guide/HTML/HTML5",
}

const javaScript: LinkMeta = {
  name: "JavaScript",
  icon: {
    color: "#F7DB00",
    svgPath: "fontawesome/js-square-brands.svg",
  },
  href: "https://developer.mozilla.org/es/docs/Web/JavaScript",
}

const markdown: LinkMeta = {
  name: "Markdown",
  icon: {
    svgPath: "fontawesome/markdown-brands.svg",
  },
  href: "https://www.markdownguide.org/",
}

const python: LinkMeta = {
  name: "Python",
  icon: {
    svgPath: "seek-logo/python.svg",
  },
  href: "https://www.python.org/",
}

const typeScript: LinkMeta = {
  name: "TypeScript",
  icon: {
    color: "#356A97",
    svgPath: "seek-logo/typescript.svg",
  },
  href: "https://www.TypeScriptlang.org/",
}

const syntaxs = [
  html5,
  javaScript,
  markdown,
  python,
  typeScript,
]

export default syntaxs
