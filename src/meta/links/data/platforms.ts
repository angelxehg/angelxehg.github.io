import { IconMeta, LinkMeta } from "../types"

const GitHubSVG = require("../../../assets/bootstrap-icons/github.svg")

const AndroidSVG = require("../../../assets/fontawesome/android-brands.svg")
const AWSSVG = require("../../../assets/fontawesome/aws-brands.svg")
const DigitalOceanSVG = require("../../../assets/fontawesome/digital-ocean-brands.svg")
const CapacitorSVG = require("../../../assets/iconify/capacitorjs.svg")
const HerokuSVG = require("../../../assets/iconify/heroku.svg")
const GitLabSVG = require("../../../assets/seek-logo/gitlab.svg")
const FirebaseSVG = require("../../../assets/seek-logo/firebase.svg")
const NetlifySVG = require("../../../assets/seek-logo/netlify.svg")

export const android: LinkMeta = {
  name: "Android",
  icon: {
    color: "#3DD985",
    svg: AndroidSVG,
  },
  href: "https://www.android.com/intl/es_es/",
}

export const aws: LinkMeta = {
  name: "AWS",
  icon: {
    color: "#F79400",
    svg: AWSSVG,
  },
  href: "https://aws.amazon.com/es/",
}

export const capacitor: LinkMeta = {
  name: "Capacitor",
  icon: {
    svg: CapacitorSVG,
  },
  href: "https://capacitorjs.com/",
}

export const digitalOcean: LinkMeta = {
  name: "DigitalOcean",
  icon: {
    color: "#007CF7",
    svg: DigitalOceanSVG,
  },
  href: "https://www.digitalocean.com/",
}

export const firebase: LinkMeta = {
  name: "Firebase",
  icon: {
    svg: FirebaseSVG,
  },
  href: "https://firebase.google.com/",
}

export const gitHub: LinkMeta = {
  name: "GitHub",
  icon: {
    svg: GitHubSVG,
  },
  href: "https://github.com/",
}

export const gitHubPages: LinkMeta = {
  name: "GitHub Pages",
  icon: {
    svg: GitHubSVG,
  },
  href: "https://pages.github.com/",
}

export const gitLab: LinkMeta = {
  name: "GitLab",
  icon: {
    color: "#F46A25",
    svg: GitLabSVG,
  },
  href: "https://gitlab.com/",
}

export const heroku: LinkMeta = {
  name: "Heroku",
  icon: {
    svg: HerokuSVG,
    extraBc: "white",
    extraBcRad: "15%",
  },
  href: "https://dashboard.heroku.com/",
}

export const netlify: LinkMeta = {
  name: "Netlify",
  icon: {
    svg: NetlifySVG,
  },
  href: "https://www.netlify.com/",
}
