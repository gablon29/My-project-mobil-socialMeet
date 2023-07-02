import React, { useState } from 'react';
import { useAuth } from '../../CustomHooks/useAuth';
import RegisterStep1 from './RegisterStep1';
import { RegisterStep2 } from './RegisterStep2';
import { RegisterAuthMethod } from '../../metodos/authMetodos';
import { useDispatch } from 'react-redux';
import { authSetUser, setErrorAuth, setLoadingAuth } from '../../Redux/ReducerAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Register({ navigation }) {
  const dispatch = useDispatch()
  const { email, setEmail, password, setPassword, firstName, setFirstName, lastName, setLastName, phone, setPhone, country, setCountry, province, setProvince, zipcode, setZipcode, confirmEmail, setConfirmEmail, checkPassword, setCheckPassword } = useAuth();

  const [registerSteps, setRegisterSteps] = useState(0);

  const handleRegister = () => {
    if(password !== checkPassword){
      alert('La Contraseña no coiciden')
      return
    }
    RegisterAuthMethod({
      reg: {email, password, firstName, lastName, phone, country, province, zipcode},
      loading: (v) => dispatch(setLoadingAuth(v)),
      error: (msg) => dispatch(setErrorAuth(msg)),
      success: async (res) => {
        dispatch(authSetUser(res.payload));
        await AsyncStorage.setItem('Token', res.payload.token);
        navigation.navigate('Home');
      },
    });
  };

  return (
    <>
      {registerSteps === 0 ? (
        <RegisterStep1 email={email} setEmail={setEmail} confirmEmail={confirmEmail} setConfirmEmail={setConfirmEmail} firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} phone={phone} setPhone={setPhone} country={country} setCountry={setCountry} province={province} setProvince={setProvince} zipcode={zipcode} setZipcode={setZipcode} registerSteps={registerSteps} setRegisterSteps={setRegisterSteps} navigation={navigation} />
      ) : registerSteps === 1 ? (
        <RegisterStep2 password={password} setPassword={setPassword} checkPassword={checkPassword} setCheckPassword={setCheckPassword} setRegisterSteps={setRegisterSteps} handleRegister={handleRegister} />
      ) : (
        // <RegisterStep3 password={password} setPassword={setPassword} navigation={navigation} />
        null
      )}
      {/* Aca se puede hacer el de la contraseña o registerstep3 pasarle por props password setpassword y handlesubmit para la ultima parte del registro */}
    </>
  );
}
