import { View, Text } from "react-native";
import React, { useState } from "react";
import { useAuth } from "../../CustomHooks/useAuth";
import { Reset1Step } from "./Reset1Step";
import { Reset2Step } from "./Reset2Step";
import { Reset3Step } from "./Reset3Step";

export default function ResetPasword() {

  const { email, 
    setEmail, 
    password, 
    setPassword, emailPassword, verification }= useAuth()
    const [steps, setSteps] = useState(0)
console.log(verification)

return (
  <>
    {steps === 0 ? (
      <Reset1Step
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        steps={steps}
        setSteps={setSteps}
        emailPassword={emailPassword}
        verification={verification}
      />
    ) : steps === 1 ? (
      <Reset2Step
        verification={verification}
        steps={steps}
        setSteps={setSteps}
      />
    ) : <Reset3Step
    
    password={password}
    setPassword={setPassword}
    />}
  </>
)}