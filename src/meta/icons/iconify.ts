import { IconMeta } from "."

const DevToSVG = require("../../assets/iconify/devto.svg")
const CapacitorSVG = require("../../assets/iconify/capacitorjs.svg")
const IonicSVG = require("../../assets/ionicons/ionic.svg")
const HerokuSVG = require("../../assets/iconify/heroku.svg")

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
