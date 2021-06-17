import { IconMeta, LinkMeta } from "../types"

const ReactSVG = require("../../../assets/fontawesome/react-brands.svg")
const IonicSVG = require("../../../assets/ionicons/ionic.svg")
const AngularSVG = require("../../../assets/seek-logo/angular.svg")
const BootstrapSVG = require("../../../assets/seek-logo/bootstrap.svg")
const DjangoSVG = require("../../../assets/seek-logo/django.svg")
const GatsbySVG = require("../../../assets/seek-logo/gatsby.svg")

export const angular: LinkMeta = {
  name: "Angular",
  icon: {
    color: "#D6002F",
    svg: AngularSVG,
  },
  href: "https://angular.io/",
}

export const bootstrap: LinkMeta = {
  name: "Bootstrap",
  icon: {
    color: "#533B78",
    svg: BootstrapSVG,
  },
  href: "https://getbootstrap.com/docs/",
}

export const django: LinkMeta = {
  name: "Django",
  icon: {
    svg: DjangoSVG,
  },
  href: "https://www.djangoproject.com/",
}

export const gatsby: LinkMeta = {
  name: "Gatsby",
  icon: {
    color: "#E94E31",
    extraBc: "white",
    extraBcRad: "50%",
    svg: GatsbySVG,
  },
  href: "https://www.gatsbyjs.com/",
}

export const ionic: LinkMeta = {
  name: "Ionic",
  icon: {
    color: "#4886F1",
    svg: IonicSVG,
    fill: true,
  },
  href: "https://ionicframework.com/",
}

export const reactJs: LinkMeta = {
  name: "ReactJS",
  icon: {
    color: "#79D8F7",
    svg: ReactSVG,
  },
  href: "https://es.reactjs.org/",
}

export const reactNative: LinkMeta = {
  name: "React Native",
  icon: {
    color: "#79D8F7",
    svg: ReactSVG,
  },
  href: "https://reactnative.dev/",
}
