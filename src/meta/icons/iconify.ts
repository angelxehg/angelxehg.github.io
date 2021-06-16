import { IconMeta } from "."

const DevToSVG = require("../../assets/iconify/devto.svg")
const CapacitorSVG = require("../../assets/iconify/capacitorjs.svg")
const IonicSVG = require("../../assets/ionicons/ionic.svg")

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
