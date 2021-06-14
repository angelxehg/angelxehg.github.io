import useMediaQuery from "@material-ui/core/useMediaQuery"
import React from "react"

const LinkedInSVG = require("../assets/bootstrap-icons/linkedin.svg")
const DocumentSVG = require("../assets/bootstrap-icons/file-earmark-text-fill.svg")
const EmailSVG = require("../assets/bootstrap-icons/envelope-fill.svg")
const WebSVG = require("../assets/bootstrap-icons/globe2.svg")
const DevToSVG = require("../assets/iconify/devto.svg")
const GitHubSVG = require("../assets/bootstrap-icons/github.svg")
const GitLabSVG = require("../assets/seek-logo/gitlab.svg")
const InstagramSVG = require("../assets/bootstrap-icons/instagram.svg")
const TwitterSVG = require("../assets/bootstrap-icons/twitter.svg")
const PayPalSVG = require("../assets/seek-logo/paypal.svg")
const AndroidSVG = require("../assets/fontawesome/android-brands.svg")
const AngularSVG = require("../assets/seek-logo/angular.svg")
const AWSSVG = require("../assets/fontawesome/aws-brands.svg")
const BootstrapSVG = require("../assets/seek-logo/bootstrap.svg")
const CapacitorSVG = require("../assets/iconify/capacitorjs.svg")
const DigitalOceanSVG = require("../assets/fontawesome/digital-ocean-brands.svg")
const DjangoSVG = require("../assets/seek-logo/django.svg")
const GitSVG = require("../assets/seek-logo/git.svg")
const GatsbySVG = require("../assets/seek-logo/gatsby.svg")
const FirebaseSVG = require("../assets/seek-logo/firebase.svg")
const HTML5SVG = require("../assets/seek-logo/html5.svg")
const IonicSVG = require("../assets/ionicons/ionic.svg")
const JavaScriptSVG = require("../assets/fontawesome/js-square-brands.svg")
const MarkdownSVG = require("../assets/fontawesome/markdown-brands.svg")
const NetlifySVG = require("../assets/seek-logo/netlify.svg")
const NodeJSSVG = require("../assets/fontawesome/node-js-brands.svg")
const NPMSVG = require("../assets/fontawesome/npm-brands.svg")
const PythonSVG = require("../assets/seek-logo/python.svg")
const ReactSVG = require("../assets/fontawesome/react-brands.svg")
const TypeScriptSVG = require("../assets/seek-logo/typescript.svg")
const UbuntuSVG = require("../assets/fontawesome/ubuntu-brands.svg")
const VSCodeSVG = require("../assets/seek-logo/vscode.svg")

const iconsSource = [
  {
    name: "Android",
    color: "#3DD985",
    svg: AndroidSVG,
    docs: "https://www.android.com/intl/es_es/",
  },
  {
    name: "Angular",
    color: "#D6002F",
    svg: AngularSVG,
    docs: "https://angular.io/",
  },
  {
    name: "AWS",
    color: "#F79400",
    svg: AWSSVG,
    docs: "https://aws.amazon.com/es/",
  },
  {
    name: "Bootstrap",
    color: "#533B78",
    svg: BootstrapSVG,
    docs: "https://getbootstrap.com/docs/",
  },
  {
    name: "Capacitor",
    svg: CapacitorSVG,
    docs: "https://capacitorjs.com/",
  },
  {
    name: "Dev.to",
    fill: true,
    svg: DevToSVG,
    docs: "https://dev.to/",
  },
  {
    name: "DigitalOcean",
    color: "#007CF7",
    svg: DigitalOceanSVG,
    docs: "https://www.digitalocean.com/",
  },
  {
    name: "Django",
    svg: DjangoSVG,
    docs: "https://www.djangoproject.com/",
  },
  {
    name: "Document",
    svg: DocumentSVG,
    docs: "https://angelxehg.com/",
  },
  {
    name: "Email",
    svg: EmailSVG,
    docs: "https://angelxehg.com/",
  },
  {
    name: "Firebase",
    svg: FirebaseSVG,
    docs: "https://firebase.google.com/",
  },
  {
    name: "Gatsby",
    color: "#E94E31",
    svg: GatsbySVG,
    docs: "https://www.gatsbyjs.com/",
  },
  {
    name: "Git",
    color: "#E94E31",
    svg: GitSVG,
    docs: "https://git-scm.com/",
  },
  {
    name: "GitHub",
    svg: GitHubSVG,
    docs: "https://github.com/",
  },
  {
    name: "GitHub Pages",
    svg: GitHubSVG,
    docs: "https://pages.github.com/",
  },
  {
    name: "GitLab",
    color: "#F46A25",
    svg: GitLabSVG,
    docs: "https://gitlab.com/",
  },
  {
    name: "HTML5",
    color: "#F64A1D",
    svg: HTML5SVG,
    docs: "https://developer.mozilla.org/es/docs/Web/Guide/HTML/HTML5",
  },
  {
    name: "Instagram",
    color: "#F70038",
    svg: InstagramSVG,
    docs: "https://instagram.com/",
  },
  {
    name: "Ionic",
    color: "#4886F1",
    svg: IonicSVG,
    fill: true,
    docs: "https://ionicframework.com/",
  },
  {
    name: "JavaScript",
    color: "#F7DB00",
    svg: JavaScriptSVG,
    docs: "https://developer.mozilla.org/es/docs/Web/JavaScript",
  },
  {
    name: "LinkedIn",
    color: "#2563AC",
    svg: LinkedInSVG,
    docs: "https://www.linkedin.com/",
  },
  {
    name: "Markdown",
    svg: MarkdownSVG,
    docs: "https://www.markdownguide.org/",
  },
  {
    name: "Netlify",
    svg: NetlifySVG,
    docs: "https://www.netlify.com/",
  },
  {
    name: "NodeJS",
    color: "#7FC728",
    svg: NodeJSSVG,
    docs: "https://nodejs.org/",
  },
  {
    name: "NPM",
    color: "#C53635",
    svg: NPMSVG,
    docs: "https://www.npmjs.com/",
  },
  {
    name: "PayPal",
    color: "#002E82",
    svg: PayPalSVG,
    docs: "https://paypal.com/",
  },
  {
    name: "Python",
    svg: PythonSVG,
    docs: "https://www.python.org/",
  },
  {
    name: "React",
    color: "#79D8F7",
    svg: ReactSVG,
    docs: "https://es.reactjs.org/",
  },
  {
    name: "Twitter",
    color: "#1C9CEA",
    svg: TwitterSVG,
    docs: "https://www.twitter.com/",
  },
  {
    name: "TypeScript",
    color: "#356A97",
    svg: TypeScriptSVG,
    docs: "https://www.TypeScriptlang.org/",
  },
  {
    name: "Ubuntu",
    color: "#D74614",
    svg: UbuntuSVG,
    docs: "https://ubuntu.com/",
  },
  {
    name: "VSCode",
    svg: VSCodeSVG,
    docs: "https://code.visualstudio.com/",
  },
  {
    name: "Web",
    svg: WebSVG,
    docs: "https://angelxehg.com/",
  },
]

export const availableIcons = iconsSource.map(i => i.name)

interface IconProps {
  name: string
  size?: string
  className?: string
}

const useStyles = (props: IconProps, defaultColor: string) => {
  const { size } = props
  return {
    width: size || "1rem",
    height: size || "1rem",
    color: defaultColor || "white",
  }
}

const fillNColor = (defaultColor: string, colorProp: string | undefined, fillProp: boolean | undefined) => {
  const finalColor = colorProp ? colorProp : defaultColor
  const finalFill = fillProp ? finalColor : undefined
  return {
    fill: finalFill,
    color: finalColor
  }
}

export const Icon = (props: IconProps) => {
  const { name, className } = props
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const classes = className || ""
  const icon = iconsSource.find(i => i.name === name)
  if (!icon) {
    throw new Error(`No se encontró el icono '${name}'`)
  }
  const {fill, color} = fillNColor(prefersDarkMode ? 'white' : 'black', icon.color, icon.fill);
  const IconSVG = icon.svg
  return (
    <IconSVG fill={fill} style={useStyles(props, color)} className={classes} />
  )
}
