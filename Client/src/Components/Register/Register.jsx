import React, { useState } from "react";
import { useAuth } from "../../CustomHooks/useAuth";
import RegisterStep1 from "./RegisterStep1";
import { RegisterStep2 } from "./RegisterStep2";
import { RegisterStep3 } from "./RegisterStep3";

export default function Register({ navigation }) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    phone,
    setPhone,
    country,
    setCountry,
    province,
    setProvince,
    city,
    setCity,
    zipcode,
    setZipcode,
    address,
    setAddress,
    handleRegister,
    confirmEmail,
    setConfirmEmail,
    verifyNumber,
    checkPassword,
    setCheckPassword,
    checkSms,
    setCheckSms,
  } = useAuth();

  const [registerSteps, setRegisterSteps] = useState(0);

  return (
    <>
      {registerSteps === 0 ? (
        <RegisterStep1
          email={email}
          setEmail={setEmail}
          confirmEmail={confirmEmail}
          setConfirmEmail={setConfirmEmail}
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          phone={phone}
          setPhone={setPhone}
          country={country}
          setCountry={setCountry}
          province={province}
          setProvince={setProvince}
          setCity={setCity}
          city={city}
          zipcode={zipcode}
          setZipcode={setZipcode}
          address={address}
          setAddress={setAddress}
          registerSteps={registerSteps}
          setRegisterSteps={setRegisterSteps}
        />
      ) : registerSteps === 1 ? (
        <RegisterStep2
          password={password}
          setPassword={setPassword}
          checkPassword={checkPassword}
          setCheckPassword={setCheckPassword}
          setRegisterSteps={setRegisterSteps}
          handleRegister={handleRegister}
        />
      ) : (
        <RegisterStep3
          password={password}
          setPassword={setPassword}
          navigation={navigation}
        />
      )}
      {/* Aca se puede hacer el de la contraseña o registerstep3 pasarle por props password setpassword y handlesubmit para la ultima parte del registro */}
    </>
  );
}
