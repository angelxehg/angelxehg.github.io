import { IconMeta } from "./types"

const LinkedInSVG = require("../../assets/bootstrap-icons/linkedin.svg")
const InstagramSVG = require("../../assets/bootstrap-icons/instagram.svg")
const TwitterSVG = require("../../assets/bootstrap-icons/twitter.svg")
const PayPalSVG = require("../../assets/seek-logo/paypal.svg")

interface LinkMeta {
  name: WebsiteIN
  icon: IconMeta
  href: string
}

export type WebsiteIN = "Instagram" | "LinkedIn" | "PayPal" | "Twitter"

export const instagram: LinkMeta = {
  name: "Instagram",
  icon: {
    color: "#F70038",
    svg: InstagramSVG,
  },
  href: "https://instagram.com/",
}

export const linkedIn: LinkMeta = {
  name: "LinkedIn",
  icon: {
    color: "#2563AC",
    extraBc: "white",
    extraBcRad: "15%",
    svg: LinkedInSVG,
  },
  href: "https://www.linkedin.com/",
}

export const payPal: LinkMeta = {
  name: "PayPal",
  icon: {
    color: "#002E82",
    svg: PayPalSVG,
  },
  href: "https://paypal.com/",
}

export const twitter: LinkMeta = {
  name: "Twitter",
  icon: {
    color: "#1C9CEA",
    svg: TwitterSVG,
  },
  href: "https://www.twitter.com/",
}
