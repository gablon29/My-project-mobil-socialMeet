// Login.js
import React, { useState } from "react";
import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginAuthMethod = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8080/api/user/login',
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      console.log(response.data);
      localStorage.setItem("token", response.data.payload.token);
      // Aquí puedes realizar alguna acción con la respuesta si es necesario
      
    } catch (err) {
      console.log('loginAuthMethod', err);
    }
  };

  return (
    <>
      <div className="bg-white">
        <div className="flex-1 items-center justify-center bg-white my-12">
          <div className="w-4/5 max-w-xs">
            <label className="font-poppins w-11" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder=""
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-full bg-gris h-10 px-4 mb-4"
            />
            <label className="font-poppins" htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder=""
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-full bg-gris h-10 px-4 mb-4"
            />
            <div className="flex items-center">
              <button onClick={loginAuthMethod} className="bg-naranja text-white w-40 h-11 text-base">Entrar</button>
            </div>
          </div>
          <div className="flex min-h-64 justify-center">
            <p className="font-poppins text text-xs text-red-500"></p>
          </div>
        </div>
      </div>
    </>
  );
};

