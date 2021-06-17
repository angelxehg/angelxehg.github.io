import frameworks from "./data/frameworks"
import generics from "./data/generic"
import platforms from "./data/platforms"
import syntaxs from "./data/syntax"
import tools from "./data/tools"
import websites from "./data/websites"

const allLinks = [
  ...generics,
  ...frameworks,
  ...syntaxs,
  ...platforms,
  ...websites,
  ...tools,
]

export const getLinkMeta = (linkName: string) => {
  const link = allLinks.find(i => i.name === linkName)
  if (!link) {
    throw new Error(`Base link '${linkName}' not found`)
  }
  return link
}

export default allLinks
