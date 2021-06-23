import React from "react"

import stacks from "../meta/stacks"
import { CreateBadge } from "../components/Link"
import Redirect from "../components/Redirect"

const SkillCard = (props: { title: string; tools: string[] }) => (
  <div className="card" style={{ height: "100%" }}>
    <div className="card-body">
      <h3 className="card-title h5">{props.title}</h3>
      <p className="card-text">
        {props.tools.map(toolName => (
          <CreateBadge key={toolName} from={toolName} />
        ))}
      </p>
    </div>
  </div>
)

export const SkillsSection = () => (
  <section id="skills">
    <h2>Habilidades</h2>
    <div className="row">
      {stacks.map(({ title, tools }, n) => (
        <div key={n} className="col-lg-6 p-sm-1 pb-3">
          <SkillCard title={title} tools={tools} />
        </div>
      ))}
    </div>
  </section>
)

const SkillsPage = (): JSX.Element => <Redirect title="Skills" url="/#skills" />

export default SkillsPage
