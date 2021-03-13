import React from 'react';

const LinkedInSVG = require("../assets/bootstrap-icons/linkedin.svg")
const EmailSVG = require("../assets/bootstrap-icons/envelope-fill.svg")
const WebSVG = require("../assets/bootstrap-icons/globe2.svg")
const GitHubSVG = require("../assets/bootstrap-icons/github.svg")
const GitlabSVG = require("../assets/fontawesome/gitlab-brands.svg")
const InstagramSVG = require("../assets/bootstrap-icons/instagram.svg")
const TwitterSVG = require("../assets/bootstrap-icons/twitter.svg")
const PayPalSVG = require("../assets/seek-logo/paypal.svg")
const AngularSVG = require("../assets/fontawesome/angular-brands.svg")
const AWSSVG = require("../assets/fontawesome/aws-brands.svg")
const BootstrapSVG = require("../assets/fontawesome/bootstrap-brands.svg")
const CSS3SVG = require("../assets/fontawesome/css3-alt-brands.svg")
const DigitalOceanSVG = require("../assets/fontawesome/digital-ocean-brands.svg")
const GitSVG = require("../assets/fontawesome/git-alt-brands.svg")
const FirebaseSVG = require("../assets/seek-logo/firebase.svg")
const HTML5SVG = require("../assets/fontawesome/html5-brands.svg")
const IonicSVG = require("../assets/ionicons/ionic.svg")
const JavascriptSVG = require("../assets/fontawesome/js-square-brands.svg")
const MarkdownSVG = require("../assets/fontawesome/markdown-brands.svg")
const NodeJSSVG = require("../assets/fontawesome/node-js-brands.svg")
const NPMSVG = require("../assets/fontawesome/npm-brands.svg")
const PythonSVG = require("../assets/seek-logo/python.svg")
const ReactSVG = require("../assets/fontawesome/react-brands.svg")
const TypescriptSVG = require("../assets/seek-logo/typescript.svg")
const UbuntuSVG = require("../assets/fontawesome/ubuntu-brands.svg")

interface IconProps {
  size?: string
  className?: string
}

const useIconStyle = (props: IconProps, defaultColor?: string) => {
  const { size } = props;
  return {
    width: size || '1.2rem',
    height: size || '1.2rem',
    color: defaultColor || 'white'
  }
}

const useClasses = (props: IconProps) => props.className || ""

export const LinkedInIcon = (props: IconProps) => (
  <LinkedInSVG style={useIconStyle(props, '#2563AC')} className={useClasses(props)} />
)

export const WebIcon = (props: IconProps) => (
  <WebSVG style={useIconStyle(props, 'white')} className={useClasses(props)} />
)

export const EmailIcon = (props: IconProps) => (
  <EmailSVG style={useIconStyle(props)} className={useClasses(props)} />
)

export const GitHubIcon = (props: IconProps) => (
  <GitHubSVG style={useIconStyle(props, 'white')} className={useClasses(props)} />
)

export const GitlabIcon = (props: IconProps) => (
  <GitlabSVG style={useIconStyle(props, '#F46A25')} className={useClasses(props)} />
)

export const InstagramIcon = (props: IconProps) => (
  <InstagramSVG style={useIconStyle(props, '#F70038')} className={useClasses(props)} />
)

export const TwitterIcon = (props: IconProps) => (
  <TwitterSVG style={useIconStyle(props, '#1C9CEA')} className={useClasses(props)} />
)

export const PayPalIcon = (props: IconProps) => (
  <PayPalSVG style={useIconStyle(props, '#002E82')} className={useClasses(props)} />
)

export const AWSIcon = (props: IconProps) => (
  <AWSSVG style={useIconStyle(props, "#F79400")} className={useClasses(props)} />
)

export const AngularIcon = (props: IconProps) => (
  <AngularSVG style={useIconStyle(props, "#D6002F")} className={useClasses(props)} />
)

export const ReactIcon = (props: IconProps) => (
  <ReactSVG style={useIconStyle(props, "#79D8F7")} className={useClasses(props)} />
)

export const BootstrapIcon = (props: IconProps) => (
  <BootstrapSVG style={useIconStyle(props, "#533B78")} className={useClasses(props)} />
)

export const CSS3Icon = (props: IconProps) => (
  <CSS3SVG style={useIconStyle(props, "#254BDD")} className={useClasses(props)} />
)

export const DigitalOceanIcon = (props: IconProps) => (
  <DigitalOceanSVG style={useIconStyle(props, "#007CF7")} className={useClasses(props)} />
)

export const GitIcon = (props: IconProps) => (
  <GitSVG style={useIconStyle(props, "#E94E31")} className={useClasses(props)} />
)

export const FirebaseIcon = (props: IconProps) => (
  <FirebaseSVG style={useIconStyle(props)} className={useClasses(props)} />
)

export const HTML5Icon = (props: IconProps) => (
  <HTML5SVG style={useIconStyle(props, "#F64A1D")} className={useClasses(props)} />
)

export const IonicIcon = (props: IconProps) => (
  <IonicSVG fill="#4886F1" style={useIconStyle(props)} className={useClasses(props)} />
)

export const JavascriptIcon = (props: IconProps) => (
  <JavascriptSVG style={useIconStyle(props, "#F7DB00")} className={useClasses(props)} />
)

export const MarkdownIcon = (props: IconProps) => (
  <MarkdownSVG style={useIconStyle(props, 'white')} className={useClasses(props)} />
)

export const NodeJSIcon = (props: IconProps) => (
  <NodeJSSVG style={useIconStyle(props, "#7FC728")} className={useClasses(props)} />
)

export const NPMIcon = (props: IconProps) => (
  <NPMSVG style={useIconStyle(props, "#C53635")} className={useClasses(props)} />
)

export const PythonIcon = (props: IconProps) => (
  <PythonSVG style={useIconStyle(props, "#356A97")} className={useClasses(props)} />
)

export const TypescriptIcon = (props: IconProps) => (
  <TypescriptSVG style={useIconStyle(props, "#356A97")} className={useClasses(props)} />
)

export const UbuntuIcon = (props: IconProps) => (
  <UbuntuSVG style={useIconStyle(props, "#D74614")} className={useClasses(props)} />
)

export enum EIcon {
  Angular = "Angular",
  AWS = "AWS",
  Bootstrap = "Bootstrap",
  CSS3 = "CSS3",
  DigitalOcean = "DigitalOcean",
  Git = "Git",
  Firebase = "Firebase",
  HTML5 = "HTML5",
  Ionic = "Ionic",
  Javascript = "Javascript",
  Markdown = "Markdown",
  NodeJS = "NodeJS",
  NPM = "NPM",
  Python = "Python",
  React = "React",
  Typescript = "Typescript",
  Ubuntu = "Ubuntu",
}

export const IconSelector = (props: IconProps & { icon: EIcon }) => {
  switch (props.icon) {
    case EIcon.Angular:
      return <AngularIcon size={props.size} className={props.className} />
    case EIcon.AWS:
      return <AWSIcon size={props.size} className={props.className} />
    case EIcon.Bootstrap:
      return <BootstrapIcon size={props.size} className={props.className} />
    case EIcon.CSS3:
      return <CSS3Icon size={props.size} className={props.className} />
    case EIcon.DigitalOcean:
      return <DigitalOceanIcon size={props.size} className={props.className} />
    case EIcon.Git:
      return <GitIcon size={props.size} className={props.className} />
    case EIcon.Firebase:
      return <FirebaseIcon size={props.size} className={props.className} />
    case EIcon.HTML5:
      return <HTML5Icon size={props.size} className={props.className} />
    case EIcon.Ionic:
      return <IonicIcon size={props.size} className={props.className} />
    case EIcon.Javascript:
      return <JavascriptIcon size={props.size} className={props.className} />
    case EIcon.Markdown:
      return <MarkdownIcon size={props.size} className={props.className} />
    case EIcon.NodeJS:
      return <NodeJSIcon size={props.size} className={props.className} />
    case EIcon.NPM:
      return <NPMIcon size={props.size} className={props.className} />
    case EIcon.Python:
      return <PythonIcon size={props.size} className={props.className} />
    case EIcon.React:
      return <ReactIcon size={props.size} className={props.className} />
    case EIcon.Typescript:
      return <TypescriptIcon size={props.size} className={props.className} />
    case EIcon.Ubuntu:
      return <UbuntuIcon size={props.size} className={props.className} />
    default:
      return <EmailIcon size={props.size} className={props.className} />
  }
}
