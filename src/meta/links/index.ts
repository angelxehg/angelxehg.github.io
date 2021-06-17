import { file, email, web } from "./generic"
import { IconMeta } from "./types"

const LinkedInSVG = require("../../assets/bootstrap-icons/linkedin.svg")
const GitHubSVG = require("../../assets/bootstrap-icons/github.svg")
const InstagramSVG = require("../../assets/bootstrap-icons/instagram.svg")
const TwitterSVG = require("../../assets/bootstrap-icons/twitter.svg")

const AndroidSVG = require("../../assets/fontawesome/android-brands.svg")
const AWSSVG = require("../../assets/fontawesome/aws-brands.svg")
const DigitalOceanSVG = require("../../assets/fontawesome/digital-ocean-brands.svg")
const JavaScriptSVG = require("../../assets/fontawesome/js-square-brands.svg")
const MarkdownSVG = require("../../assets/fontawesome/markdown-brands.svg")
const NodeJSSVG = require("../../assets/fontawesome/node-js-brands.svg")
const NPMSVG = require("../../assets/fontawesome/npm-brands.svg")
const ReactSVG = require("../../assets/fontawesome/react-brands.svg")
const UbuntuSVG = require("../../assets/fontawesome/ubuntu-brands.svg")

const DevToSVG = require("../../assets/iconify/devto.svg")
const CapacitorSVG = require("../../assets/iconify/capacitorjs.svg")
const IonicSVG = require("../../assets/ionicons/ionic.svg")
const HerokuSVG = require("../../assets/iconify/heroku.svg")

const FontAwesomeSVG = require("../../assets/seek-logo/font-awesome.svg")
const GitLabSVG = require("../../assets/seek-logo/gitlab.svg")
const PayPalSVG = require("../../assets/seek-logo/paypal.svg")
const AngularSVG = require("../../assets/seek-logo/angular.svg")
const BootstrapSVG = require("../../assets/seek-logo/bootstrap.svg")
const DjangoSVG = require("../../assets/seek-logo/django.svg")
const GitSVG = require("../../assets/seek-logo/git.svg")
const GatsbySVG = require("../../assets/seek-logo/gatsby.svg")
const FirebaseSVG = require("../../assets/seek-logo/firebase.svg")
const HTML5SVG = require("../../assets/seek-logo/html5.svg")
const NetlifySVG = require("../../assets/seek-logo/netlify.svg")
const PythonSVG = require("../../assets/seek-logo/python.svg")
const TypeScriptSVG = require("../../assets/seek-logo/typescript.svg")
const VSCodeSVG = require("../../assets/seek-logo/vscode.svg")

export interface LinkMeta {
  name: string
  icon: IconMeta
  href: string
}

export const gitHubIconMeta: IconMeta = {
  svg: GitHubSVG,
}

export const gitHubPagesIconMeta: IconMeta = {
  svg: GitHubSVG,
}

export const instagramIconMeta: IconMeta = {
  color: "#F70038",
  svg: InstagramSVG,
}

export const linkedInIconMeta: IconMeta = {
  color: "#2563AC",
  extraBc: "white",
  extraBcRad: "15%",
  svg: LinkedInSVG,
}

export const twitterIconMeta: IconMeta = {
  color: "#1C9CEA",
  svg: TwitterSVG,
}

export const androidIconMeta: IconMeta = {
  color: "#3DD985",
  svg: AndroidSVG,
}

export const awsIconMeta: IconMeta = {
  color: "#F79400",
  svg: AWSSVG,
}

export const digitalOceanIconMeta: IconMeta = {
  color: "#007CF7",
  svg: DigitalOceanSVG,
}

export const javaScriptIconMeta: IconMeta = {
  color: "#F7DB00",
  svg: JavaScriptSVG,
}

export const markdownIconMeta: IconMeta = {
  svg: MarkdownSVG,
}

export const nodeJsIconMeta: IconMeta = {
  color: "#7FC728",
  svg: NodeJSSVG,
}

export const npmIconMeta: IconMeta = {
  color: "#C53635",
  extraBc: "white",
  extraBcRad: "50%",
  svg: NPMSVG,
}

export const ubuntuIconMeta: IconMeta = {
  color: "#D74614",
  extraBc: "white",
  extraBcRad: "50%",
  svg: UbuntuSVG,
}

export const reactIconMeta: IconMeta = {
  color: "#79D8F7",
  svg: ReactSVG,
}

export const capacitorIconMeta: IconMeta = {
  svg: CapacitorSVG,
}

export const devtoIconMeta: IconMeta = {
  fill: true,
  svg: DevToSVG,
}

export const ionicIconMeta: IconMeta = {
  color: "#4886F1",
  svg: IonicSVG,
  fill: true,
}

export const herokuIconMeta: IconMeta = {
  svg: HerokuSVG,
  extraBc: "white",
  extraBcRad: "15%",
}

export const angularIconMeta: IconMeta = {
  color: "#D6002F",
  svg: AngularSVG,
}

export const bootstrapIconMeta: IconMeta = {
  color: "#533B78",
  svg: BootstrapSVG,
}

export const djangoIconMeta: IconMeta = {
  svg: DjangoSVG,
}

export const firebaseIconMeta: IconMeta = {
  svg: FirebaseSVG,
}

export const fasIconMeta: IconMeta = {
  svg: FontAwesomeSVG,
  extraBc: "white",
  extraBcRad: "15%",
}

export const gatsbyIconMeta: IconMeta = {
  color: "#E94E31",
  extraBc: "white",
  extraBcRad: "50%",
  svg: GatsbySVG,
}

export const gitIconMeta: IconMeta = {
  color: "#E94E31",
  svg: GitSVG,
}

export const gitLabIconMeta: IconMeta = {
  color: "#F46A25",
  svg: GitLabSVG,
}

export const html5IconMeta: IconMeta = {
  color: "#F64A1D",
  svg: HTML5SVG,
}

export const netlifyIconMeta: IconMeta = {
  svg: NetlifySVG,
}

export const payPalIconMeta: IconMeta = {
  color: "#002E82",
  svg: PayPalSVG,
}

export const pythonIconMeta: IconMeta = {
  svg: PythonSVG,
}

export const typeScriptIconMeta: IconMeta = {
  color: "#356A97",
  svg: TypeScriptSVG,
}

export const vsCodeIconMeta: IconMeta = {
  svg: VSCodeSVG,
}

const android: LinkMeta = {
  name: "Android",
  icon: androidIconMeta,
  href: "https://www.android.com/intl/es_es/",
}

const angular: LinkMeta = {
  name: "Angular",
  icon: angularIconMeta,
  href: "https://angular.io/",
}

const aws: LinkMeta = {
  name: "AWS",
  icon: awsIconMeta,
  href: "https://aws.amazon.com/es/",
}

const bootstrap: LinkMeta = {
  name: "Bootstrap",
  icon: bootstrapIconMeta,
  href: "https://getbootstrap.com/docs/",
}

const capacitor: LinkMeta = {
  name: "Capacitor",
  icon: capacitorIconMeta,
  href: "https://capacitorjs.com/",
}

const devto: LinkMeta = {
  name: "Dev.to",
  icon: devtoIconMeta,
  href: "https://dev.to/",
}

const digitalOcean: LinkMeta = {
  name: "DigitalOcean",
  icon: digitalOceanIconMeta,
  href: "https://www.digitalocean.com/",
}

const django: LinkMeta = {
  name: "Django",
  icon: djangoIconMeta,
  href: "https://www.djangoproject.com/",
}

const firebase: LinkMeta = {
  name: "Firebase",
  icon: firebaseIconMeta,
  href: "https://firebase.google.com/",
}

const fas: LinkMeta = {
  name: "Font Awesome",
  icon: fasIconMeta,
  href: "https://fontawesome.com/license",
}

const gatsby: LinkMeta = {
  name: "Gatsby",
  icon: gatsbyIconMeta,
  href: "https://www.gatsbyjs.com/",
}

const git: LinkMeta = {
  name: "Git",
  icon: gitIconMeta,
  href: "https://git-scm.com/",
}

const gitHub: LinkMeta = {
  name: "GitHub",
  icon: gitHubIconMeta,
  href: "https://github.com/",
}

const gitHubPages: LinkMeta = {
  name: "GitHub Pages",
  icon: gitHubPagesIconMeta,
  href: "https://pages.github.com/",
}

const gitLab: LinkMeta = {
  name: "GitLab",
  icon: gitLabIconMeta,
  href: "https://gitlab.com/",
}

const html5: LinkMeta = {
  name: "HTML5",
  icon: html5IconMeta,
  href: "https://developer.mozilla.org/es/docs/Web/Guide/HTML/HTML5",
}

const heroku: LinkMeta = {
  name: "Heroku",
  icon: herokuIconMeta,
  href: "https://dashboard.heroku.com/",
}

const instagram: LinkMeta = {
  name: "Instagram",
  icon: instagramIconMeta,
  href: "https://instagram.com/",
}

const ionic: LinkMeta = {
  name: "Ionic",
  icon: ionicIconMeta,
  href: "https://ionicframework.com/",
}

const javaScript: LinkMeta = {
  name: "JavaScript",
  icon: javaScriptIconMeta,
  href: "https://developer.mozilla.org/es/docs/Web/JavaScript",
}

const linkedIn: LinkMeta = {
  name: "LinkedIn",
  icon: linkedInIconMeta,
  href: "https://www.linkedin.com/",
}

const markdown: LinkMeta = {
  name: "Markdown",
  icon: markdownIconMeta,
  href: "https://www.markdownguide.org/",
}

const netlify: LinkMeta = {
  name: "Netlify",
  icon: netlifyIconMeta,
  href: "https://www.netlify.com/",
}

const nodeJs: LinkMeta = {
  name: "NodeJS",
  icon: nodeJsIconMeta,
  href: "https://nodejs.org/",
}

const npm: LinkMeta = {
  name: "NPM",
  icon: npmIconMeta,
  href: "https://www.npmjs.com/",
}

const payPal: LinkMeta = {
  name: "PayPal",
  icon: payPalIconMeta,
  href: "https://paypal.com/",
}

const python: LinkMeta = {
  name: "Python",
  icon: pythonIconMeta,
  href: "https://www.python.org/",
}

const react: LinkMeta = {
  name: "React",
  icon: reactIconMeta,
  href: "https://es.reactjs.org/",
}

const reactNative: LinkMeta = {
  name: "React Native",
  icon: reactIconMeta,
  href: "https://reactnative.dev/",
}

const twitter: LinkMeta = {
  name: "Twitter",
  icon: twitterIconMeta,
  href: "https://www.twitter.com/",
}

const typeScript: LinkMeta = {
  name: "TypeScript",
  icon: typeScriptIconMeta,
  href: "https://www.TypeScriptlang.org/",
}

const ubuntu: LinkMeta = {
  name: "Ubuntu",
  icon: ubuntuIconMeta,
  href: "https://ubuntu.com/",
}

const vsCode: LinkMeta = {
  name: "VSCode",
  icon: vsCodeIconMeta,
  href: "https://code.visualstudio.com/",
}

const allLinks = [
  file,
  email,
  web,
  android,
  angular,
  aws,
  bootstrap,
  capacitor,
  devto,
  digitalOcean,
  django,
  firebase,
  fas,
  gatsby,
  git,
  gitHub,
  gitHubPages,
  gitLab,
  html5,
  heroku,
  instagram,
  ionic,
  javaScript,
  linkedIn,
  markdown,
  netlify,
  nodeJs,
  npm,
  payPal,
  python,
  react,
  reactNative,
  twitter,
  typeScript,
  ubuntu,
  vsCode,
]

export const getLinkMeta = (linkName: string) => {
  const link = allLinks.find(i => i.name === linkName)
  if (!link) {
    throw new Error(`Base link '${linkName}' not found`)
  }
  return link
}

export default allLinks
