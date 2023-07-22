// Login.js
import React, { useState } from "react";
import axios from "axios";

export const Login = ({setLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginAuthMethod = async () => {
    try {
      const response = await axios.post(
        'https://whopaws-production.up.railway.app/api/user/login',
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      console.log(response.data);
      localStorage.setItem("token", response.data.payload.token);
      setLogin(true)
      // Aquí puedes realizar alguna acción con la respuesta si es necesario
      
    } catch (err) {
      console.log('loginAuthMethod', err);
    }
  };

  return (
    <div className="bg-white flex flex-col">
      <div className="flex flex-col justify-center items-center mb-10">
        <img src="/whopaws.png" alt="" width="251" height="63" className="mt-10"/>
        <img src="/chiplanding.png" alt="" width="183.46" height="279.87" className="mt-10"/>
        <p className="font-bold text-2xl"><span className="text-naranja">Nuevo</span> Chip Whopaws</p>
        <p className="italic text-sm">Configúralo ahora</p>
      </div>
      <div className="flex flex-col items-center justify-center bg-white mb-10">
        <p className="font-semibold text-sm text-center mb-5">Inicia sesión con tus <br /> credenciales de Whopaws</p>
        <div className="w-4/5 max-w-xs">
          <label className="font-poppins font-semibold text-base relative left-4" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder=""
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-full bg-gris h-10 px-4 mb-4 outline-none"
          />
          <label className="font-poppins font-semibold text-base relative left-4" htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            placeholder=""
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-full bg-gris h-10 px-4 mb-4 outline-none"
          />
          <div className="flex justify-center">
              <button onClick={loginAuthMethod} className="bg-naranja text-white w-40 h-11 text-base rounded-full">Entrar</button>
          </div>
          </div>
      </div>
    </div>
  );
};

