import { LinkMeta } from "../types"

const websites: LinkMeta[] = [
  {
    name: "Instagram",
    icon: {
      color: "#F70038",
      svgPath: "bootstrap-icons/instagram.svg",
    },
    href: "https://instagram.com/",
  },
  {
    name: "LinkedIn",
    icon: {
      color: "#2563AC",
      extraBc: "white",
      extraBcRad: "15%",
      svgPath: "bootstrap-icons/linkedin.svg",
    },
    href: "https://www.linkedin.com/",
  },
  {
    name: "PayPal",
    icon: {
      color: "#002E82",
      svgPath: "seek-logo/paypal.svg",
    },
    href: "https://paypal.com/",
  },
  {
    name: "Twitter",
    icon: {
      color: "#1C9CEA",
      svgPath: "bootstrap-icons/twitter.svg",
    },
    href: "https://www.twitter.com/",
  },
  {
    name: "Dev.to",
    icon: {
      fill: true,
      svgPath: "iconify/devto.svg",
    },
    href: "https://dev.to/",
  },
]

export default websites
