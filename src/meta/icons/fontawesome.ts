import { IconMeta } from "."

const AndroidSVG = require("../../assets/fontawesome/android-brands.svg")
const AWSSVG = require("../../assets/fontawesome/aws-brands.svg")
const DigitalOceanSVG = require("../../assets/fontawesome/digital-ocean-brands.svg")
const JavaScriptSVG = require("../../assets/fontawesome/js-square-brands.svg")
const MarkdownSVG = require("../../assets/fontawesome/markdown-brands.svg")
const NodeJSSVG = require("../../assets/fontawesome/node-js-brands.svg")
const NPMSVG = require("../../assets/fontawesome/npm-brands.svg")
const ReactSVG = require("../../assets/fontawesome/react-brands.svg")
const UbuntuSVG = require("../../assets/fontawesome/ubuntu-brands.svg")

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
