import { LinkMeta } from "../types"

const frameworks: LinkMeta[] = [
  {
    name: "Angular",
    icon: {
      style: { color: "#D6002F" },
      svgPath: "seek-logo/angular.svg",
    },
    href: "https://angular.io/",
  },
  {
    name: "Bootstrap",
    icon: {
      svgPath: "seek-logo/bootstrap.svg",
      style: {
        color: "#533B78",
      },
    },
    href: "https://getbootstrap.com/docs/",
  },
  {
    name: "Django",
    icon: {
      svgPath: "seek-logo/django.svg",
    },
    href: "https://www.djangoproject.com/",
  },
  {
    name: "GatsbyJS",
    displayName: "Gatsby",
    icon: {
      style: {
        color: "#E94E31",
        backgroundColor: "white",
        borderRadius: "50%",
      },
      svgPath: "seek-logo/gatsby.svg",
    },
    href: "https://www.gatsbyjs.com/",
  },
  {
    name: "Ionic",
    displayName: "Ionic Framework",
    icon: {
      style: {
        fill: "#4886F1",
        backgroundColor: "#e6f0ff",
        borderRadius: "50%",
        padding: "0.05rem",
      },
      svgPath: "ionicons/ionic.svg",
    },
    href: "https://ionicframework.com/",
  },
  {
    name: "React",
    displayName: "React",
    icon: {
      style: {
        color: "#79D8F7",
        backgroundColor: "#20232a",
        borderRadius: "50%",
        padding: "0.05rem",
      },
      svgPath: "fontawesome/react-brands.svg",
    },
    href: "https://es.reactjs.org/",
  },
  {
    name: "ReactNative",
    displayName: "React Native",
    icon: {
      style: {
        color: "#79D8F7",
        backgroundColor: "#20232a",
        borderRadius: "50%",
        padding: "0.05rem",
      },
      svgPath: "fontawesome/react-brands.svg",
    },
    href: "https://reactnative.dev/",
  },
]

export default frameworks
