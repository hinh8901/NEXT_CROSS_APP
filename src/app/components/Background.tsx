import { ReactNode } from "react"
import Image, { ImageProps } from "next/image"
import clsx from "clsx"

import background from '@/public/assets/images/workspace.jpg'
import RenderIf from "./RenderIf"

interface BackgroundProps {
  children: ReactNode
  containerClass?: string
  contentClass?: string
  imageProps?: ImageProps
  backdrop?: boolean
  backdropClass?: string
}

const Background: React.FC<BackgroundProps> = (props) => {
  const { children, containerClass, contentClass, imageProps, backdrop, backdropClass } = props

  return (
    <div className={clsx("w-full h-full relative", containerClass)}>
      <div className={"w-full h-full absolute"}>
        <Image src={background} alt="workspace_background" fill {...imageProps} />
        <RenderIf condition={!!backdrop}>
          <div className={clsx("absolute w-full h-full backdrop-blur-sm", backdropClass)} />
        </RenderIf>
      </div>
      <div className={clsx("relative w-full h-full", contentClass)}>{children}</div>
    </div>
  )
}

export default Background