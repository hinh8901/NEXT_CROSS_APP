import { Link as NextLink, LinkProps as NextLinkProps } from "@nextui-org/react"

const Link: React.FC<NextLinkProps> = (props) => {
  return <NextLink className="text-sm cursor-pointer text-[#9D9DA6]" {...props} />
}

export default Link