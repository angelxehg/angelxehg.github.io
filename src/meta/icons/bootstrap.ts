import { IconMeta } from "."

const LinkedInSVG = require("../../assets/bootstrap-icons/linkedin.svg")
const DocumentSVG = require("../../assets/bootstrap-icons/file-earmark-text-fill.svg")
const EmailSVG = require("../../assets/bootstrap-icons/envelope-fill.svg")
const WebSVG = require("../../assets/bootstrap-icons/globe2.svg")
const GitHubSVG = require("../../assets/bootstrap-icons/github.svg")
const InstagramSVG = require("../../assets/bootstrap-icons/instagram.svg")
const TwitterSVG = require("../../assets/bootstrap-icons/twitter.svg")

export const genericDocumentIconMeta: IconMeta = {
  svg: DocumentSVG,
}

export const genericEmailIconMeta: IconMeta = {
  svg: EmailSVG,
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

export const genericWebIconMeta: IconMeta = {
  svg: WebSVG,
}
