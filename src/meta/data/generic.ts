import { LinkMeta } from "../types"

export const genericWebLink: LinkMeta = {
  name: "Web",
  icon: {
    svgPath: "bootstrap-icons/globe2.svg",
  },
  href: "https://xehg.me/",
}

const generics: LinkMeta[] = [
  {
    name: "Day",
    icon: {
      svgPath: "bootstrap-icons/sun.svg",
    },
    href: "https://xehg.me/",
  },
  {
    name: "Night",
    icon: {
      svgPath: "bootstrap-icons/moon.svg",
    },
    href: "https://xehg.me/",
  },
  {
    name: "File",
    icon: {
      svgPath: "bootstrap-icons/file-earmark-text-fill.svg",
    },
    href: "https://xehg.me/",
  },
  {
    name: "Email",
    icon: {
      svgPath: "bootstrap-icons/envelope-fill.svg",
    },
    href: "https://xehg.me/",
  },
  genericWebLink,
]

export default generics
