import { LinkMeta } from "../types"

export const genericWebLink: LinkMeta = {
  name: "Web",
  icon: {
    svgPath: "bootstrap-icons/globe2.svg",
  },
  href: "https://angelxehg.github.io/",
}

const generics: LinkMeta[] = [
  {
    name: "Day",
    icon: {
      svgPath: "bootstrap-icons/sun.svg",
    },
    href: "https://angelxehg.github.io/",
  },
  {
    name: "Night",
    icon: {
      svgPath: "bootstrap-icons/moon.svg",
    },
    href: "https://angelxehg.github.io/",
  },
  {
    name: "File",
    icon: {
      svgPath: "bootstrap-icons/file-earmark-text-fill.svg",
    },
    href: "https://angelxehg.github.io/",
  },
  {
    name: "Email",
    icon: {
      svgPath: "bootstrap-icons/envelope-fill.svg",
    },
    href: "https://angelxehg.github.io/",
  },
  genericWebLink,
]

export default generics
