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

export interface IconMeta {
  color?: string
  fill?: boolean
  svg: any
}

export const androidIconMeta: IconMeta = {
  color: "#3DD985",
  svg: AndroidSVG,
}

export const angularIconMeta: IconMeta = {
  color: "#D6002F",
  svg: AngularSVG,
}

export const awsIconMeta: IconMeta = {
  color: "#F79400",
  svg: AWSSVG,
}

export const bootstrapIconMeta: IconMeta = {
  color: "#533B78",
  svg: BootstrapSVG,
}

export const capacitorIconMeta: IconMeta = {
  svg: CapacitorSVG,
}

export const devtoIconMeta: IconMeta = {
  fill: true,
  svg: DevToSVG,
}

export const digitalOceanIconMeta: IconMeta = {
  color: "#007CF7",
  svg: DigitalOceanSVG,
}

export const djangoIconMeta: IconMeta = {
  svg: DjangoSVG,
}

export const genericDocumentIconMeta: IconMeta = {
  svg: DocumentSVG,
}

export const genericEmailIconMeta: IconMeta = {
  svg: EmailSVG,
}

export const firebaseIconMeta: IconMeta = {
  svg: FirebaseSVG,
}

export const gatsbyIconMeta: IconMeta = {
  color: "#E94E31",
  svg: GatsbySVG,
}

export const gitIconMeta: IconMeta = {
  color: "#E94E31",
  svg: GitSVG,
}

export const gitHubIconMeta: IconMeta = {
  svg: GitHubSVG,
}

export const gitHubPagesIconMeta: IconMeta = {
  svg: GitHubSVG,
}

export const gitLabIconMeta: IconMeta = {
  color: "#F46A25",
  svg: GitLabSVG,
}

export const html5IconMeta: IconMeta = {
  color: "#F64A1D",
  svg: HTML5SVG,
}

export const instagramIconMeta: IconMeta = {
  color: "#F70038",
  svg: InstagramSVG,
}

export const ionicIconMeta: IconMeta = {
  color: "#4886F1",
  svg: IonicSVG,
  fill: true,
}

export const javaScriptIconMeta: IconMeta = {
  color: "#F7DB00",
  svg: JavaScriptSVG,
}

export const linkedInIconMeta: IconMeta = {
  color: "#2563AC",
  svg: LinkedInSVG,
}

export const markdownIconMeta: IconMeta = {
  svg: MarkdownSVG,
}

export const netlifyIconMeta: IconMeta = {
  svg: NetlifySVG,
}

export const nodeJsIconMeta: IconMeta = {
  color: "#7FC728",
  svg: NodeJSSVG,
}

export const npmIconMeta: IconMeta = {
  color: "#C53635",
  svg: NPMSVG,
}

export const payPalIconMeta: IconMeta = {
  color: "#002E82",
  svg: PayPalSVG,
}

export const pythonIconMeta: IconMeta = {
  svg: PythonSVG,
}

export const reactIconMeta: IconMeta = {
  color: "#79D8F7",
  svg: ReactSVG,
}

export const twitterIconMeta: IconMeta = {
  color: "#1C9CEA",
  svg: TwitterSVG,
}

export const typeScriptIconMeta: IconMeta = {
  color: "#356A97",
  svg: TypeScriptSVG,
}

export const ubuntuIconMeta: IconMeta = {
  color: "#D74614",
  svg: UbuntuSVG,
}

export const vsCodeIconMeta: IconMeta = {
  svg: VSCodeSVG,
}

export const genericWebIconMeta: IconMeta = {
  svg: WebSVG,
}
