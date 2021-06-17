import { LinkMeta } from "../types"

const android: LinkMeta = {
  name: "Android",
  icon: {
    color: "#3DD985",
    svgPath: "fontawesome/android-brands.svg",
  },
  href: "https://www.android.com/intl/es_es/",
}

const aws: LinkMeta = {
  name: "AWS",
  icon: {
    color: "#F79400",
    svgPath: "fontawesome/aws-brands.svg",
  },
  href: "https://aws.amazon.com/es/",
}

const capacitor: LinkMeta = {
  name: "Capacitor",
  icon: {
    svgPath: "iconify/capacitorjs.svg",
  },
  href: "https://capacitorjs.com/",
}

const digitalOcean: LinkMeta = {
  name: "DigitalOcean",
  icon: {
    color: "#007CF7",
    svgPath: "fontawesome/digital-ocean-brands.svg",
  },
  href: "https://www.digitalocean.com/",
}

const firebase: LinkMeta = {
  name: "Firebase",
  icon: {
    svgPath: "seek-logo/firebase.svg",
  },
  href: "https://firebase.google.com/",
}

const gitHub: LinkMeta = {
  name: "GitHub",
  icon: {
    svgPath: "bootstrap-icons/github.svg",
  },
  href: "https://github.com/",
}

const gitHubPages: LinkMeta = {
  name: "GitHub Pages",
  icon: {
    svgPath: "bootstrap-icons/github.svg",
  },
  href: "https://pages.github.com/",
}

const gitLab: LinkMeta = {
  name: "GitLab",
  icon: {
    color: "#F46A25",
    svgPath: "seek-logo/gitlab.svg",
  },
  href: "https://gitlab.com/",
}

const heroku: LinkMeta = {
  name: "Heroku",
  icon: {
    svgPath: "iconify/heroku.svg",
    extraBc: "white",
    extraBcRad: "15%",
  },
  href: "https://dashboard.heroku.com/",
}

const netlify: LinkMeta = {
  name: "Netlify",
  icon: {
    svgPath: "seek-logo/netlify.svg",
  },
  href: "https://www.netlify.com/",
}

const platforms = [
  android,
  aws,
  capacitor,
  digitalOcean,
  firebase,
  gitHub,
  gitHubPages,
  gitLab,
  heroku,
  netlify,
]

export default platforms
