import {
  angularLinkMeta,
  bootstrapLinkMeta,
  capacitorLinkMeta,
  digitalOceanLinkMeta,
  djangoLinkMeta,
  firebaseLinkMeta,
  gatsbyLinkMeta,
  gitHubLinkMeta,
  gitLabLinkMeta,
  gitLinkMeta,
  html5LinkMeta,
  ionicLinkMeta,
  javaScriptLinkMeta,
  LinkMeta,
  markdownLinkMeta,
  netlifyLinkMeta,
  nodeJsLinkMeta,
  npmLinkMeta,
  pythonLinkMeta,
  reactLinkMeta,
  typeScriptLinkMeta,
  ubuntuLinkMeta,
  vsCodeLinkMeta,
} from "./links"

interface Stack {
  title: string
  tools: LinkMeta[]
}

const stacks: Stack[] = [
  {
    title: "Lenguajes y sintaxis",
    tools: [
      html5LinkMeta,
      javaScriptLinkMeta,
      typeScriptLinkMeta,
      pythonLinkMeta,
      markdownLinkMeta,
    ],
  },
  {
    title: "Frameworks y librerias",
    tools: [
      angularLinkMeta,
      reactLinkMeta,
      ionicLinkMeta,
      capacitorLinkMeta,
      gatsbyLinkMeta,
      djangoLinkMeta,
      bootstrapLinkMeta,
    ],
  },
  {
    title: "Herramientas",
    tools: [
      ubuntuLinkMeta,
      vsCodeLinkMeta,
      nodeJsLinkMeta,
      npmLinkMeta,
      gitLinkMeta,
    ],
  },
  {
    title: "Plataformas",
    tools: [
      netlifyLinkMeta,
      gitHubLinkMeta,
      gitLabLinkMeta,
      firebaseLinkMeta,
      digitalOceanLinkMeta,
    ],
  },
]

export default stacks
