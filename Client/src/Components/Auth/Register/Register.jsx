import React, { useEffect, useState } from 'react';
import RegisterStep1 from './RegisterStep1';
import { RegisterStep2 } from './RegisterStep2';
import { RegisterAuthMethod } from '../../../metodos/authMetodos';
import { useDispatch, useSelector } from 'react-redux';
import { authSetUser, setErrorAuth, setLoadingAuth, setRegistroAuth } from '../../../Redux/ReducerAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../../CustomHooks/useAuth';

export default function Register() {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const { authenticatedAuth, loadingAuth, errorAuth, profile, token } = useSelector((state) => state.ReducerAuth);
  const { email, setEmail, password, setPassword, firstName, setFirstName, lastName, setLastName, phone, setPhone, country, setCountry, province, setProvince, zipcode, setZipcode, confirmEmail, setConfirmEmail, checkPassword, setCheckPassword } = useAuth();

  const [registerSteps, setRegisterSteps] = useState(0);
  const handleRegister = () => {
    RegisterAuthMethod({
      reg: {email, password, firstName, lastName, phone, country, province, zipcode},
      loading: (v) => dispatch(setLoadingAuth(v)),
      error: (msg) => dispatch(setErrorAuth(msg)),
      success: async (res) => {
        dispatch(authSetUser(res.payload));
        dispatch(setRegistroAuth(true))
        await AsyncStorage.setItem('Token', res.payload.token);
        navigation.navigate('RegisterStep3');
      },
    });
  };

  useEffect(() => {
    return () => {
      if (!errorAuth) {
        dispatch(setErrorAuth(''));
      }
    };
  }, []);

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
