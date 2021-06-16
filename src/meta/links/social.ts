import {
  devtoLinkMeta,
  genericDocumentLinkMeta,
  genericEmailLinkMeta,
  gitHubLinkMeta,
  gitLabLinkMeta,
  instagramLinkMeta,
  linkedInLinkMeta,
  LinkMeta,
  payPalLinkMeta,
  twitterLinkMeta,
} from "."

export const email: LinkMeta = {
  ...genericEmailLinkMeta,
  name: "Enviame un Email",
  href: "mailto:sudo@angelxehg.com",
}

export const resume: LinkMeta = {
  ...genericDocumentLinkMeta,
  name: "Descarga mi CV",
  href: "https://drive.google.com/drive/folders/18DEv-IdP2veHzUINHafEk4Gz9i2zakzG?usp=sharing",
}

export const devTo: LinkMeta = {
  ...devtoLinkMeta,
  name: "Visita mi blog en dev.to",
  href: "https://dev.to/angelxehg",
}

export const linkedIn: LinkMeta = {
  ...linkedInLinkMeta,
  name: "LinkedIn (/in/angelxehg)",
  href: "https://www.linkedin.com/in/angelxehg",
}

export const payPal: LinkMeta = {
  ...payPalLinkMeta,
  name: "PayPal (@angelxehg)",
  href: "https://www.paypal.me/angelxehg",
}

export const gitHub: LinkMeta = {
  ...gitHubLinkMeta,
  name: "GitHub (@angelxehg)",
  href: "https://github.com/angelxehg",
}

export const gitLab: LinkMeta = {
  ...gitLabLinkMeta,
  name: "GitLab (@angelxehg)",
  href: "https://gitlab.com/angelxehg",
}

export const twitter: LinkMeta = {
  ...twitterLinkMeta,
  name: "Twitter (@angelxehg)",
  href: "https://www.twitter.com/angelxehg",
}

export const instagram: LinkMeta = {
  ...instagramLinkMeta,
  name: "Instagram (@angelxehg)",
  href: "https://www.instagram.com/angelxehg",
}

const social = [email, resume, devTo, linkedIn, gitHub, twitter, instagram]

export default social
