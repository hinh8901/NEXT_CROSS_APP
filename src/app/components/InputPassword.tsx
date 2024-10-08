"use client"

import React, { useState } from "react"
import { InputProps as NextInputProps } from "@nextui-org/react"

import InputText from "./InputText"
import EyeSlashFilledIcon from "./EyeSlashFilledIcon"
import EyeFilledIcon from "./EyeFilledIcon"

const InputPassword = React.forwardRef<HTMLInputElement, NextInputProps>(function InputPassword(props, ref) {
  const { ...restProps } = props
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    setIsVisible(prev => !prev)
  }

  return (
    <InputText
      type={isVisible ? "text" : "password"}
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      ref={ref}
      {...restProps}
    />
  )
})

export default InputPassword