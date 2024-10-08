"use client"

import React from "react"
import { Button } from "@nextui-org/react"
import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import Background from "./components/Background"
import Typo from "./components/Typo"
import InputText from "./components/InputText"
import Checkbox from "./components/Checkbox"
import Link from "./components/Link"
import InputPassword from "./components/InputPassword"
import { schema } from "./schemas"

interface LoginData {
  email: string
  password: string
  remember: boolean
}

const defaultValues: LoginData = {
  email: "",
  password: "",
  remember: false,
}

const Home: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<LoginData>({
    resolver: yupResolver(schema),
    defaultValues
  })

  const handleLogin = (data: LoginData) => {
    console.log('flow: data', data)
  }

  return (
    <Background backdrop>
      <div className="flex items-center justify-center h-screen w-full">
        <div className="flex gap-4 flex-col max-w-[384px] w-[90%] p-[24px_32px_40px] bg-background rounded-large">
          <Typo.Title className="text-xl font-medium">Log In</Typo.Title>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <InputText
                placeholder="Enter your email"
                label="Email Address"
                errorMessage={errors['email']?.message}
                isInvalid={!!errors['email']?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <InputPassword
                placeholder="Enter your password"
                label="Password"
                errorMessage={errors['password']?.message}
                isInvalid={!!errors['password']?.message}
                {...field}
              />
            )}
          />
          <div className="flex items-center justify-between">
            <Controller
              name="remember"
              control={control}
              render={({ field: { value, ...restField } }) => (
                <Checkbox isSelected={value} {...restField}>Remember me</Checkbox>
              )}
            />
            <Link>Forgot password?</Link>
          </div>
          <Button color="primary" onClick={handleSubmit(handleLogin)}>Login</Button>
        </div>
      </div>
    </Background>
  )
}

export default Home