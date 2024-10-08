import React from "react"
import { Input as NextInput, InputProps as NextInputProps } from "@nextui-org/react"
import clsx from "clsx"

const InputText = React.forwardRef<HTMLInputElement, NextInputProps>(function InputText(props, ref) {
  const { ...restProps } = props

  return (
    <NextInput
      radius="md"
      classNames={{
        inputWrapper: [
          "border-border",
          "border-2",
          "!bg-background",
          "data-[hover=true]:!bg-background",
          "group-hover:border-[#727272]",
          "group-data-[focus=true]:has-[:focus]:border-[#d4d4d8]",
          "group-data-[focus=true]:has-[:focus]:!bg-background",
          clsx({"!border-danger": restProps.isInvalid}),
        ],
        label: [
          "group-data-[filled-within=true]:text-red-500",
          "dark:group-data-[filled-within=true]:text-[#d4d4d8]",
        ]
      }}
      ref={ref}
      autoComplete="off"
      {...restProps}
    />
  )
})

export default InputText