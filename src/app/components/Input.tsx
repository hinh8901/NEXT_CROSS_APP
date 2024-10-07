import { Input as NextInput, InputProps as NextInputProps } from "@nextui-org/react"

interface InputProps extends NextInputProps {
  control?: string
}

const Input: React.FC<InputProps> = (props) => {
  const { } = props

  return (
    <NextInput
      radius="md"
      classNames={{
        inputWrapper: ["border-border", "border-2", "bg-background"],
        label: ["text-red-600", "group-hover:text-red-600"]
      }}
      placeholder="Enter your email"
      label="Email Address"
    />
  )
}

export default Input