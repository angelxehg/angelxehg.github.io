import { LinkMeta } from "../types"

const websites: LinkMeta[] = [
  {
    name: "Instagram",
    icon: {
      style: { color: "#F70038" },
      svgPath: "bootstrap-icons/instagram.svg",
    },
    href: "https://instagram.com/",
  },
  {
    name: "LinkedIn",
    icon: {
      style: {
        color: "#2563AC",
        backgroundColor: "white",
        borderRadius: "15%",
      },
      svgPath: "bootstrap-icons/linkedin.svg",
    },
    href: "https://www.linkedin.com/",
  },
  {
    name: "PayPal",
    icon: {
      style: { color: "#002E82" },
      svgPath: "seek-logo/paypal.svg",
    },
    href: "https://paypal.com/",
  },
  {
    name: "Twitter",
    icon: {
      style: { color: "#1C9CEA" },
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
