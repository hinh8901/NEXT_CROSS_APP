import React from "react"

import Background from "./components/Background"
import Typo from "./components/Typo"
import Input from "./components/Input"

const Home: React.FC = () => {
  return (
    <Background backdrop>
      <div className="flex items-center justify-center h-screen w-full">
        <div className="flex gap-4 flex-col max-w-[384px] w-[90%] p-[24px_32px_40px] bg-background rounded-large">
          <Typo.Title className="text-xl font-medium">Log In</Typo.Title>
          <Input />
          {/* <Input type="password" placeholder="Enter your password" label="Password" /> */}
        </div>
      </div>
    </Background>
  )
}

export default Home