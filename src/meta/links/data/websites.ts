import { LinkMeta } from "../types"

const instagram: LinkMeta = {
  name: "Instagram",
  icon: {
    color: "#F70038",
    svgPath: "bootstrap-icons/instagram.svg",
  },
  href: "https://instagram.com/",
}

const linkedIn: LinkMeta = {
  name: "LinkedIn",
  icon: {
    color: "#2563AC",
    extraBc: "white",
    extraBcRad: "15%",
    svgPath: "bootstrap-icons/linkedin.svg",
  },
  href: "https://www.linkedin.com/",
}

const payPal: LinkMeta = {
  name: "PayPal",
  icon: {
    color: "#002E82",
    svgPath: "seek-logo/paypal.svg",
  },
  href: "https://paypal.com/",
}

const twitter: LinkMeta = {
  name: "Twitter",
  icon: {
    color: "#1C9CEA",
    svgPath: "bootstrap-icons/twitter.svg",
  },
  href: "https://www.twitter.com/",
}

const devto: LinkMeta = {
  name: "Dev.to",
  icon: {
    fill: true,
    svgPath: "iconify/devto.svg",
  },
  href: "https://dev.to/",
}

const websites = [
  instagram,
  linkedIn,
  payPal,
  twitter,
  devto,
]

export default websites
