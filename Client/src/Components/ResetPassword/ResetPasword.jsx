import { View, Text } from "react-native";
import React, { useState } from "react";
import { useAuth } from "../../CustomHooks/useAuth";
import { Reset1Step } from "./Reset1Step";
import { Reset2Step } from "./Reset2Step";
import { Reset3Step } from "./Reset3Step";
import HeaderLeftArrow from "../Header/HeaderLeftArrow";

export default function ResetPasword({ navigation }) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    emailPassword,
    verification,
  } = useAuth();
  const [steps, setSteps] = useState(0);
  console.log(verification);

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <>
      {steps === 0 ? (
        <View className="flex-1 items-center justify-start pt-10 bg-white">
          <HeaderLeftArrow
            text="Iniciar sesión"
            goBack={handleGoBack}
            setSteps={setSteps}
          />
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
        </View>
      ) : steps === 1 ? (
        <View className="flex-1 items-center justify-start pt-10 bg-white">
          <HeaderLeftArrow
            text="Iniciar sesión"
            goBack={handleGoBack}
            setSteps={setSteps}
          />
          <Reset2Step
            verification={verification}
            steps={steps}
            setSteps={setSteps}
          />
        </View>
      ) : (
        <View className="flex-1 items-center justify-start pt-10 bg-white">
          <HeaderLeftArrow
            text="Iniciar sesión"
            goBack={handleGoBack}
            setSteps={setSteps}
          />
          <Reset3Step password={password} setPassword={setPassword} />
        </View>
      )}
    </>
  );
}
