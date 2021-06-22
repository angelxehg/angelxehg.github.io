import frameworks from "./data/frameworks"
import generics, { genericWebLink } from "./data/generic"
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
  const link = allLinks.find(i => i.name.toLowerCase() === linkName.toLowerCase())
  if (!link) {
    return genericWebLink;
  }
  return link
}

export default allLinks
