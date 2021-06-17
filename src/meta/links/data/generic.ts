import { IconMeta, LinkMeta } from "../types"

const DocumentSVG = require("../../../assets/bootstrap-icons/file-earmark-text-fill.svg")
const EmailSVG = require("../../../assets/bootstrap-icons/envelope-fill.svg")
const WebSVG = require("../../../assets/bootstrap-icons/globe2.svg")

export const file: LinkMeta = {
  name: "File",
  icon: {
    svg: DocumentSVG,
  },
  href: "https://angelxehg.com/",
}

export const email: LinkMeta = {
  name: "Email",
  icon: {
    svg: EmailSVG,
  },
  href: "https://angelxehg.com/",
}

export const web: LinkMeta = {
  name: "Web",
  icon: {
    svg: WebSVG,
  },
  href: "https://angelxehg.com/",
}
