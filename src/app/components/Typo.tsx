import React, { ReactNode } from "react"
import clsx from "clsx"

interface TextProps {
  children: ReactNode
  className?: string

}

const Text: React.FC<TextProps> = (props) => {
  const { children, className } = props
  return <p className={clsx("text-foreground text-sm", className)}>{children}</p>
}

interface TitleProps extends TextProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

const Title: React.FC<TitleProps> = (props) => {
  const { children, className, level = 3 } = props

  switch (level) {
    case 1:
      return <h1 className={clsx("text-foreground", className)}>{children}</h1>
    case 2:
      return <h2 className={clsx("text-foreground", className)}>{children}</h2>
    case 3:
      return <h3 className={clsx("text-foreground", className)}>{children}</h3>
    case 4:
      return <h4 className={clsx("text-foreground", className)}>{children}</h4>
    case 5:
      return <h5 className={clsx("text-foreground", className)}>{children}</h5>
    default:
    case 6:
      return <h6 className={clsx("text-foreground", className)}>{children}</h6>
  }
}

const Typo = { Text, Title }

export default Typo