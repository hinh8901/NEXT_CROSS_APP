import { ReactNode } from "react"

interface RenderIfProps {
  condition: boolean
  children: ReactNode
  fallback?: ReactNode
}

const RenderIf: React.FC<RenderIfProps> = (props) => {
  const { condition, children, fallback } = props

  if (condition) return children
  return fallback
}

export default RenderIf