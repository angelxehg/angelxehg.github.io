interface Stack {
  title: string
  tools: string[]
}

const stacks: Stack[] = [
  {
    title: "Mis herramientas favoritas",
    tools: ["Angular", "Ionic", "Ubuntu", "VSCode", "Netlify", "GitHub"],
  },
  {
    title: "Estoy aprendiendo",
    tools: ["React", "Gatsby", "Capacitor", "Firebase", "React Native"],
  },
  {
    title: "He trabajdo con",
    tools: [
      "HTML5",
      "JavaScript",
      "TypeScript",
      "Python",
      "Markdown",
      "NPM",
      "Git",
    ],
  },
  {
    title: "Otras herramientas",
    tools: [
      "Heroku",
      "Django",
      "Bootstrap",
      "GitLab",
      "DigitalOcean",
      "NodeJS",
      "AWS",
    ],
  },
]

export default stacks
