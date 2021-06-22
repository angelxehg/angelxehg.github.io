import { LinkMeta } from "../types"

const syntaxs: LinkMeta[] = [
  {
    name: "HTML5",
    icon: {
      color: "#F64A1D",
      svgPath: "seek-logo/html5.svg",
    },
    href: "https://developer.mozilla.org/es/docs/Web/Guide/HTML/HTML5",
  },
  {
    name: "JavaScript",
    icon: {
      color: "#F7DB00",
      extraStyles: {
        backgroundColor: "black",
      borderRadius: "15%",
      },
      svgPath: "fontawesome/js-square-brands.svg",
    },
    href: "https://developer.mozilla.org/es/docs/Web/JavaScript",
  },
  {
    name: "Markdown",
    icon: {
      svgPath: "fontawesome/markdown-brands.svg",
    },
    href: "https://www.markdownguide.org/",
  },
  {
    name: "Python",
    icon: {
      svgPath: "seek-logo/python.svg",
    },
    href: "https://www.python.org/",
  },
  {
    name: "TypeScript",
    icon: {
      color: "#356A97",
      svgPath: "seek-logo/typescript.svg",
    },
    href: "https://www.TypeScriptlang.org/",
  },
]

export default syntaxs
