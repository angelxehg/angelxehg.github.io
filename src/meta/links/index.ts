import { IconMeta } from "../icons"
import {
  genericDocumentIconMeta,
  genericEmailIconMeta,
  gitHubIconMeta,
  gitHubPagesIconMeta,
  instagramIconMeta,
  linkedInIconMeta,
  twitterIconMeta,
  genericWebIconMeta,
} from "../icons/bootstrap"
import {
  androidIconMeta,
  awsIconMeta,
  digitalOceanIconMeta,
  javaScriptIconMeta,
  markdownIconMeta,
  nodeJsIconMeta,
  npmIconMeta,
  reactIconMeta,
  ubuntuIconMeta,
} from "../icons/fontawesome"
import {
  capacitorIconMeta,
  devtoIconMeta,
  herokuIconMeta,
  ionicIconMeta,
} from "../icons/iconify"
import {
  angularIconMeta,
  bootstrapIconMeta,
  djangoIconMeta,
  fasIconMeta,
  firebaseIconMeta,
  gatsbyIconMeta,
  gitIconMeta,
  gitLabIconMeta,
  html5IconMeta,
  netlifyIconMeta,
  payPalIconMeta,
  pythonIconMeta,
  typeScriptIconMeta,
  vsCodeIconMeta,
} from "../icons/seek-logo"

export interface LinkMeta {
  name: string
  icon: IconMeta
  href: string
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

const genericDocument: LinkMeta = {
  name: "Document",
  icon: genericDocumentIconMeta,
  href: "https://angelxehg.com/",
}

const genericEmail: LinkMeta = {
  name: "Email",
  icon: genericEmailIconMeta,
  href: "https://angelxehg.com/",
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

const genericWeb: LinkMeta = {
  name: "Web",
  icon: genericWebIconMeta,
  href: "https://angelxehg.com/",
}

const allLinks = [
  android,
  angular,
  aws,
  bootstrap,
  capacitor,
  devto,
  digitalOcean,
  django,
  genericDocument,
  genericEmail,
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
  genericWeb,
]

export const getLinkMeta = (linkName: string) => {
  const link = allLinks.find(i => i.name === linkName)
  if (!link) {
    throw new Error(`Base link '${linkName}' not found`);
  }
  return link
}

export default allLinks
