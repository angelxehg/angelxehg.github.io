import { LinkMeta } from "../types"

const platforms: LinkMeta[] = [
  {
    name: "Android",
    icon: {
      color: "#3DD985",
      svgPath: "fontawesome/android-brands.svg",
    },
    href: "https://www.android.com/intl/es_es/",
  },
  {
    name: "AWS",
    icon: {
      color: "#F79400",
      svgPath: "fontawesome/aws-brands.svg",
    },
    href: "https://aws.amazon.com/es/",
  },
  {
    name: "Capacitor",
    icon: {
      svgPath: "iconify/capacitorjs.svg",
    },
    href: "https://capacitorjs.com/",
  },
  {
    name: "DigitalOcean",
    icon: {
      color: "#007CF7",
      svgPath: "fontawesome/digital-ocean-brands.svg",
    },
    href: "https://www.digitalocean.com/",
  },
  {
    name: "Firebase",
    icon: {
      svgPath: "seek-logo/firebase.svg",
    },
    href: "https://firebase.google.com/",
  },
  {
    name: "GitHub",
    icon: {
      svgPath: "bootstrap-icons/github.svg",
    },
    href: "https://github.com/",
  },
  {
    name: "GitHub Pages",
    icon: {
      svgPath: "bootstrap-icons/github.svg",
    },
    href: "https://pages.github.com/",
  },
  {
    name: "GitLab",
    icon: {
      color: "#F46A25",
      svgPath: "seek-logo/gitlab.svg",
    },
    href: "https://gitlab.com/",
  },
  {
    name: "Heroku",
    icon: {
      svgPath: "iconify/heroku.svg",
      extraBc: "white",
      extraBcRad: "15%",
    },
    href: "https://dashboard.heroku.com/",
  },
  {
    name: "Netlify",
    icon: {
      svgPath: "seek-logo/netlify.svg",
    },
    href: "https://www.netlify.com/",
  },
]

export default platforms
