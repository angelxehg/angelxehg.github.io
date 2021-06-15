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
  ionicIconMeta,
} from "../icons/iconify"
import {
  angularIconMeta,
  bootstrapIconMeta,
  djangoIconMeta,
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

export const androidLinkMeta: LinkMeta = {
  name: "Android",
  icon: androidIconMeta,
  href: "https://www.android.com/intl/es_es/",
}

export const angularLinkMeta: LinkMeta = {
  name: "Angular",
  icon: angularIconMeta,
  href: "https://angular.io/",
}

export const awsLinkMeta: LinkMeta = {
  name: "AWS",
  icon: awsIconMeta,
  href: "https://aws.amazon.com/es/",
}

export const bootstrapLinkMeta: LinkMeta = {
  name: "Bootstrap",
  icon: bootstrapIconMeta,
  href: "https://getbootstrap.com/docs/",
}

export const capacitorLinkMeta: LinkMeta = {
  name: "Capacitor",
  icon: capacitorIconMeta,
  href: "https://capacitorjs.com/",
}

export const devtoLinkMeta: LinkMeta = {
  name: "Dev.to",
  icon: devtoIconMeta,
  href: "https://dev.to/",
}

export const digitalOceanLinkMeta: LinkMeta = {
  name: "DigitalOcean",
  icon: digitalOceanIconMeta,
  href: "https://www.digitalocean.com/",
}

export const djangoLinkMeta: LinkMeta = {
  name: "Django",
  icon: djangoIconMeta,
  href: "https://www.djangoproject.com/",
}

export const genericDocumentLinkMeta: LinkMeta = {
  name: "Document",
  icon: genericDocumentIconMeta,
  href: "https://angelxehg.com/",
}

export const genericEmailLinkMeta: LinkMeta = {
  name: "Email",
  icon: genericEmailIconMeta,
  href: "https://angelxehg.com/",
}

export const firebaseLinkMeta: LinkMeta = {
  name: "Firebase",
  icon: firebaseIconMeta,
  href: "https://firebase.google.com/",
}

export const gatsbyLinkMeta: LinkMeta = {
  name: "Gatsby",
  icon: gatsbyIconMeta,
  href: "https://www.gatsbyjs.com/",
}

export const gitLinkMeta: LinkMeta = {
  name: "Git",
  icon: gitIconMeta,
  href: "https://git-scm.com/",
}

export const gitHubLinkMeta: LinkMeta = {
  name: "GitHub",
  icon: gitHubIconMeta,
  href: "https://github.com/",
}

export const gitHubPagesLinkMeta: LinkMeta = {
  name: "GitHub Pages",
  icon: gitHubPagesIconMeta,
  href: "https://pages.github.com/",
}

export const gitLabLinkMeta: LinkMeta = {
  name: "GitLab",
  icon: gitLabIconMeta,
  href: "https://gitlab.com/",
}

export const html5LinkMeta: LinkMeta = {
  name: "HTML5",
  icon: html5IconMeta,
  href: "https://developer.mozilla.org/es/docs/Web/Guide/HTML/HTML5",
}

export const instagramLinkMeta: LinkMeta = {
  name: "Instagram",
  icon: instagramIconMeta,
  href: "https://instagram.com/",
}

export const ionicLinkMeta: LinkMeta = {
  name: "Ionic",
  icon: ionicIconMeta,
  href: "https://ionicframework.com/",
}

export const javaScriptLinkMeta: LinkMeta = {
  name: "JavaScript",
  icon: javaScriptIconMeta,
  href: "https://developer.mozilla.org/es/docs/Web/JavaScript",
}

export const linkedInLinkMeta: LinkMeta = {
  name: "LinkedIn",
  icon: linkedInIconMeta,
  href: "https://www.linkedin.com/",
}

export const markdownLinkMeta: LinkMeta = {
  name: "Markdown",
  icon: markdownIconMeta,
  href: "https://www.markdownguide.org/",
}

export const netlifyLinkMeta: LinkMeta = {
  name: "Netlify",
  icon: netlifyIconMeta,
  href: "https://www.netlify.com/",
}

export const nodeJsLinkMeta: LinkMeta = {
  name: "NodeJS",
  icon: nodeJsIconMeta,
  href: "https://nodejs.org/",
}

export const npmLinkMeta: LinkMeta = {
  name: "NPM",
  icon: npmIconMeta,
  href: "https://www.npmjs.com/",
}

export const payPalLinkMeta: LinkMeta = {
  name: "PayPal",
  icon: payPalIconMeta,
  href: "https://paypal.com/",
}

export const pythonLinkMeta: LinkMeta = {
  name: "Python",
  icon: pythonIconMeta,
  href: "https://www.python.org/",
}

export const reactLinkMeta: LinkMeta = {
  name: "React",
  icon: reactIconMeta,
  href: "https://es.reactjs.org/",
}

export const twitterLinkMeta: LinkMeta = {
  name: "Twitter",
  icon: twitterIconMeta,
  href: "https://www.twitter.com/",
}

export const typeScriptLinkMeta: LinkMeta = {
  name: "TypeScript",
  icon: typeScriptIconMeta,
  href: "https://www.TypeScriptlang.org/",
}

export const ubuntuLinkMeta: LinkMeta = {
  name: "Ubuntu",
  icon: ubuntuIconMeta,
  href: "https://ubuntu.com/",
}

export const vsCodeLinkMeta: LinkMeta = {
  name: "VSCode",
  icon: vsCodeIconMeta,
  href: "https://code.visualstudio.com/",
}

export const genericWebLinkMeta: LinkMeta = {
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
  gatsbyLinkMeta,
  gitLinkMeta,
  gitHubLinkMeta,
  gitHubPagesLinkMeta,
  gitLabLinkMeta,
  html5LinkMeta,
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
