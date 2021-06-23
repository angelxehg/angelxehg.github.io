import { LinkMeta } from "../types"

export const genericWebLink: LinkMeta = {
  name: "Web",
  icon: {
    svgPath: "bootstrap-icons/globe2.svg",
  },
  href: "https://angelxehg.com/",
}

const generics: LinkMeta[] = [
  {
    name: "Day",
    icon: {
      svgPath: "bootstrap-icons/sun.svg",
    },
    href: "https://angelxehg.com/",
  },
  {
    name: "Night",
    icon: {
      svgPath: "bootstrap-icons/moon.svg",
    },
    href: "https://angelxehg.com/",
  },
  {
    name: "File",
    icon: {
      svgPath: "bootstrap-icons/file-earmark-text-fill.svg",
    },
    href: "https://angelxehg.com/",
  },
  {
    name: "Email",
    icon: {
      svgPath: "bootstrap-icons/envelope-fill.svg",
    },
    href: "https://angelxehg.com/",
  },
  genericWebLink,
]

export default generics
