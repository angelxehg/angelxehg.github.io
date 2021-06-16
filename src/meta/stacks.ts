import {
  angularLinkMeta,
  awsLinkMeta,
  bootstrapLinkMeta,
  capacitorLinkMeta,
  digitalOceanLinkMeta,
  djangoLinkMeta,
  firebaseLinkMeta,
  gatsbyLinkMeta,
  gitHubLinkMeta,
  gitLabLinkMeta,
  gitLinkMeta,
  herokuLinkMeta,
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
  reactNativeLinkMeta,
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
    title: "Mis herramientas favoritas",
    tools: [
      angularLinkMeta, ionicLinkMeta, ubuntuLinkMeta, vsCodeLinkMeta, netlifyLinkMeta, gitHubLinkMeta
    ]
  },
  {
    title: "Estoy aprendiendo",
    tools: [
      reactLinkMeta,
      gatsbyLinkMeta,
      capacitorLinkMeta,
      firebaseLinkMeta,
      reactNativeLinkMeta,
    ]
  },
  {
    title: "He trabajdo con",
    tools: [
      html5LinkMeta,
      javaScriptLinkMeta,
      typeScriptLinkMeta,
      pythonLinkMeta,
      markdownLinkMeta,
      npmLinkMeta,
      gitLinkMeta,
    ],
  },
  {
    title: "Otras herramientas",
    tools: [
      herokuLinkMeta,
      djangoLinkMeta,
      bootstrapLinkMeta,
      gitLabLinkMeta,
      digitalOceanLinkMeta,
      nodeJsLinkMeta,
      awsLinkMeta,
    ]
  },
]

export default stacks
