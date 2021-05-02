import React from "react";
import { LinkIcon } from "@components/icons"

const stacks = [
  {
    title: "Lenguajes",
    icons: ["HTML5", "CSS3", "Typescript", "Javascript", "Python"],
  },
  {
    title: "Frameworks",
    icons: ["React", "Ionic", "Gatsby", "Angular"],
  },
  {
    title: "Herramientas",
    icons: ["NodeJS", "NPM", "Git", "Markdown", "Bootstrap"],
  },
  {
    title: "Plataformas",
    icons: ["Ubuntu", "Netlify", "AWS", "Firebase", "DigitalOcean"],
  },
]

const SkillsSection = () => (
  <section id="skills">
    <h2>Habilidades</h2>
    <ul>
      {stacks.map(({ title, icons }) => (
        <li key={title} className="m-0">
          {title + ": "}
          {icons.map(icon => (
            <LinkIcon key={icon} name={icon} />
          ))}
        </li>
      ))}
    </ul>
  </section>
)

export default SkillsSection
