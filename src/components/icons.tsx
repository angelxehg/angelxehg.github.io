import React from "react"

const LinkedInSVG = require("../assets/bootstrap-icons/linkedin.svg")
const EmailSVG = require("../assets/bootstrap-icons/envelope-fill.svg")
const WebSVG = require("../assets/bootstrap-icons/globe2.svg")
const GitHubSVG = require("../assets/bootstrap-icons/github.svg")
const GitLabSVG = require("../assets/fontawesome/gitlab-brands.svg")
const InstagramSVG = require("../assets/bootstrap-icons/instagram.svg")
const TwitterSVG = require("../assets/bootstrap-icons/twitter.svg")
const PayPalSVG = require("../assets/seek-logo/paypal.svg")
const AngularSVG = require("../assets/fontawesome/angular-brands.svg")
const AWSSVG = require("../assets/fontawesome/aws-brands.svg")
const BootstrapSVG = require("../assets/fontawesome/bootstrap-brands.svg")
const CSS3SVG = require("../assets/fontawesome/css3-alt-brands.svg")
const DigitalOceanSVG = require("../assets/fontawesome/digital-ocean-brands.svg")
const GitSVG = require("../assets/fontawesome/git-alt-brands.svg")
const GatsbySVG = require("../assets/seek-logo/gatsby.svg")
const FirebaseSVG = require("../assets/seek-logo/firebase.svg")
const HTML5SVG = require("../assets/fontawesome/html5-brands.svg")
const IonicSVG = require("../assets/ionicons/ionic.svg")
const JavascriptSVG = require("../assets/fontawesome/js-square-brands.svg")
const MarkdownSVG = require("../assets/fontawesome/markdown-brands.svg")
const NetlifySVG = require("../assets/seek-logo/netlify.svg")
const NodeJSSVG = require("../assets/fontawesome/node-js-brands.svg")
const NPMSVG = require("../assets/fontawesome/npm-brands.svg")
const PythonSVG = require("../assets/seek-logo/python.svg")
const ReactSVG = require("../assets/fontawesome/react-brands.svg")
const TypescriptSVG = require("../assets/seek-logo/typescript.svg")
const UbuntuSVG = require("../assets/fontawesome/ubuntu-brands.svg")

const availableIcons = [
  "Angular",
  "AWS",
  "Bootstrap",
  "CSS3",
  "DigitalOcean",
  "Gatsby",
  "Git",
  "Firebase",
  "HTML5",
  "Ionic",
  "Javascript",
  "Markdown",
  "Netlify",
  "NodeJS",
  "NPM",
  "Python",
  "React",
  "Typescript",
  "Ubuntu",
  "LinkedIn",
  "Web",
  "Email",
  "GitHub",
  "GitLab",
  "Instagram",
  "Twitter",
  "PayPal",
]

interface IconProps {
  size?: string
  className?: string
  name: string
}

export const Icon = (props: IconProps) => {
  const { name, className } = props;
  const classes = className || "";
  const useStyles = (props: IconProps, defaultColor?: string) => {
    const { size } = props
    return {
      width: size || "1.2rem",
      height: size || "1.2rem",
      color: defaultColor || "white",
    }
  }
  if (!availableIcons.includes(name)) {
    throw Error(`Missing icon: ${name}`)
  }
  switch (name) {
    case "Angular":
      return <AngularSVG style={useStyles(props, "#D6002F")} className={classes} />
    case "AWS":
      return <AWSSVG style={useStyles(props, "#F79400")} className={classes} />
    case "Bootstrap":
      return <BootstrapSVG style={useStyles(props, "#533B78")} className={classes} />
    case "CSS3":
      return <CSS3SVG style={useStyles(props, "#254BDD")} className={classes} />
    case "DigitalOcean":
      return <DigitalOceanSVG style={useStyles(props, "#007CF7")} className={classes} />
    case "Gatsby":
      return <GatsbySVG style={useStyles(props, "#E94E31")} className={classes} />
    case "Git":
      return <GitSVG style={useStyles(props, "#E94E31")} className={classes} />
    case "Firebase":
      return <FirebaseSVG style={useStyles(props, "white")} className={classes} />
    case "HTML5":
      return <HTML5SVG style={useStyles(props, "#F64A1D")} className={classes} />
    case "Ionic":
      return <IonicSVG fill="#4886F1" style={useStyles(props, "white")} className={classes} />
    case "Javascript":
      return <JavascriptSVG style={useStyles(props, "#F7DB00")} className={classes} />
    case "Markdown":
      return <MarkdownSVG style={useStyles(props, "white")} className={classes} />
    case "Netlify":
      return <NetlifySVG style={useStyles(props, "white")} className={classes} />
    case "NodeJS":
      return <NodeJSSVG style={useStyles(props, "#7FC728")} className={classes} />
    case "NPM":
      return <NPMSVG style={useStyles(props, "#C53635")} className={classes} />
    case "Python":
      return <PythonSVG style={useStyles(props, "white")} className={classes} />
    case "React":
      return <ReactSVG style={useStyles(props, "#79D8F7")} className={classes} />
    case "Typescript":
      return <TypescriptSVG style={useStyles(props, "#356A97")} className={classes} />
    case "Ubuntu":
      return <UbuntuSVG style={useStyles(props, "#D74614")} className={classes} />
    case "LinkedIn":
      return <LinkedInSVG style={useStyles(props, "#2563AC")} className={classes} />
    case "Web":
      return <WebSVG style={useStyles(props, "white")} className={classes} />
    case "Email":
      return <EmailSVG style={useStyles(props, "white")} className={classes} />
    case "GitHub":
      return <GitHubSVG style={useStyles(props, "white")} className={classes} />
    case "GitLab":
      return <GitLabSVG style={useStyles(props, "#F46A25")} className={classes} />
    case "Instagram":
      return <InstagramSVG style={useStyles(props, "#F70038")} className={classes} />
    case "Twitter":
      return <TwitterSVG style={useStyles(props, "#1C9CEA")} className={classes} />
    case "PayPal":
      return <PayPalSVG style={useStyles(props, "#002E82")} className={classes} />
    default:
      return <p>SVG not found</p>
  }
}
