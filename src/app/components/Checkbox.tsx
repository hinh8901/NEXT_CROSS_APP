import React from "react"
import { Checkbox as NextCheckbox, CheckboxProps as NextCheckboxProps } from "@nextui-org/react"

const Checkbox = React.forwardRef<HTMLInputElement, NextCheckboxProps>(function Checkbox(props, ref) {
  return <NextCheckbox classNames={{ label: 'text-sm' }} ref={ref} {...props} />
})

export default Checkbox