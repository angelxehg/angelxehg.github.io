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

const androidLinkMeta: LinkMeta = {
  name: "Android",
  icon: androidIconMeta,
  href: "https://www.android.com/intl/es_es/",
}

const angularLinkMeta: LinkMeta = {
  name: "Angular",
  icon: angularIconMeta,
  href: "https://angular.io/",
}

const awsLinkMeta: LinkMeta = {
  name: "AWS",
  icon: awsIconMeta,
  href: "https://aws.amazon.com/es/",
}

const bootstrapLinkMeta: LinkMeta = {
  name: "Bootstrap",
  icon: bootstrapIconMeta,
  href: "https://getbootstrap.com/docs/",
}

const capacitorLinkMeta: LinkMeta = {
  name: "Capacitor",
  icon: capacitorIconMeta,
  href: "https://capacitorjs.com/",
}

const devtoLinkMeta: LinkMeta = {
  name: "Dev.to",
  icon: devtoIconMeta,
  href: "https://dev.to/",
}

const digitalOceanLinkMeta: LinkMeta = {
  name: "DigitalOcean",
  icon: digitalOceanIconMeta,
  href: "https://www.digitalocean.com/",
}

const djangoLinkMeta: LinkMeta = {
  name: "Django",
  icon: djangoIconMeta,
  href: "https://www.djangoproject.com/",
}

const genericDocumentLinkMeta: LinkMeta = {
  name: "Document",
  icon: genericDocumentIconMeta,
  href: "https://angelxehg.com/",
}

const genericEmailLinkMeta: LinkMeta = {
  name: "Email",
  icon: genericEmailIconMeta,
  href: "https://angelxehg.com/",
}

const firebaseLinkMeta: LinkMeta = {
  name: "Firebase",
  icon: firebaseIconMeta,
  href: "https://firebase.google.com/",
}

const fasLinkMeta: LinkMeta = {
  name: "Font Awesome",
  icon: fasIconMeta,
  href: "https://fontawesome.com/license",
}

const gatsbyLinkMeta: LinkMeta = {
  name: "Gatsby",
  icon: gatsbyIconMeta,
  href: "https://www.gatsbyjs.com/",
}

const gitLinkMeta: LinkMeta = {
  name: "Git",
  icon: gitIconMeta,
  href: "https://git-scm.com/",
}

const gitHubLinkMeta: LinkMeta = {
  name: "GitHub",
  icon: gitHubIconMeta,
  href: "https://github.com/",
}

const gitHubPagesLinkMeta: LinkMeta = {
  name: "GitHub Pages",
  icon: gitHubPagesIconMeta,
  href: "https://pages.github.com/",
}

const gitLabLinkMeta: LinkMeta = {
  name: "GitLab",
  icon: gitLabIconMeta,
  href: "https://gitlab.com/",
}

const html5LinkMeta: LinkMeta = {
  name: "HTML5",
  icon: html5IconMeta,
  href: "https://developer.mozilla.org/es/docs/Web/Guide/HTML/HTML5",
}

const herokuLinkMeta: LinkMeta = {
  name: "Heroku",
  icon: herokuIconMeta,
  href: "https://dashboard.heroku.com/",
}

const instagramLinkMeta: LinkMeta = {
  name: "Instagram",
  icon: instagramIconMeta,
  href: "https://instagram.com/",
}

const ionicLinkMeta: LinkMeta = {
  name: "Ionic",
  icon: ionicIconMeta,
  href: "https://ionicframework.com/",
}

const javaScriptLinkMeta: LinkMeta = {
  name: "JavaScript",
  icon: javaScriptIconMeta,
  href: "https://developer.mozilla.org/es/docs/Web/JavaScript",
}

const linkedInLinkMeta: LinkMeta = {
  name: "LinkedIn",
  icon: linkedInIconMeta,
  href: "https://www.linkedin.com/",
}

const markdownLinkMeta: LinkMeta = {
  name: "Markdown",
  icon: markdownIconMeta,
  href: "https://www.markdownguide.org/",
}

const netlifyLinkMeta: LinkMeta = {
  name: "Netlify",
  icon: netlifyIconMeta,
  href: "https://www.netlify.com/",
}

const nodeJsLinkMeta: LinkMeta = {
  name: "NodeJS",
  icon: nodeJsIconMeta,
  href: "https://nodejs.org/",
}

const npmLinkMeta: LinkMeta = {
  name: "NPM",
  icon: npmIconMeta,
  href: "https://www.npmjs.com/",
}

const payPalLinkMeta: LinkMeta = {
  name: "PayPal",
  icon: payPalIconMeta,
  href: "https://paypal.com/",
}

const pythonLinkMeta: LinkMeta = {
  name: "Python",
  icon: pythonIconMeta,
  href: "https://www.python.org/",
}

const reactLinkMeta: LinkMeta = {
  name: "React",
  icon: reactIconMeta,
  href: "https://es.reactjs.org/",
}

const reactNativeLinkMeta: LinkMeta = {
  name: "React Native",
  icon: reactIconMeta,
  href: "https://reactnative.dev/",
}

const twitterLinkMeta: LinkMeta = {
  name: "Twitter",
  icon: twitterIconMeta,
  href: "https://www.twitter.com/",
}

const typeScriptLinkMeta: LinkMeta = {
  name: "TypeScript",
  icon: typeScriptIconMeta,
  href: "https://www.TypeScriptlang.org/",
}

const ubuntuLinkMeta: LinkMeta = {
  name: "Ubuntu",
  icon: ubuntuIconMeta,
  href: "https://ubuntu.com/",
}

const vsCodeLinkMeta: LinkMeta = {
  name: "VSCode",
  icon: vsCodeIconMeta,
  href: "https://code.visualstudio.com/",
}

const genericWebLinkMeta: LinkMeta = {
  name: "Web",
  icon: genericWebIconMeta,
  href: "https://angelxehg.com/",
}

const allLinks = [
  androidLinkMeta,
  angularLinkMeta,
  awsLinkMeta,
  bootstrapLinkMeta,
  capacitorLinkMeta,
  devtoLinkMeta,
  digitalOceanLinkMeta,
  djangoLinkMeta,
  genericDocumentLinkMeta,
  genericEmailLinkMeta,
  firebaseLinkMeta,
  fasLinkMeta,
  gatsbyLinkMeta,
  gitLinkMeta,
  gitHubLinkMeta,
  gitHubPagesLinkMeta,
  gitLabLinkMeta,
  html5LinkMeta,
  herokuLinkMeta,
  instagramLinkMeta,
  ionicLinkMeta,
  javaScriptLinkMeta,
  linkedInLinkMeta,
  markdownLinkMeta,
  netlifyLinkMeta,
  nodeJsLinkMeta,
  npmLinkMeta,
  payPalLinkMeta,
  pythonLinkMeta,
  reactLinkMeta,
  reactNativeLinkMeta,
  twitterLinkMeta,
  typeScriptLinkMeta,
  ubuntuLinkMeta,
  vsCodeLinkMeta,
  genericWebLinkMeta,
]

export const getLinkMeta = (linkName: string) => {
  const link = allLinks.find(i => i.name === linkName)
  if (!link) {
    throw new Error(`No se encontró link ${linkName}`)
  }
  return link
}

export default allLinks
