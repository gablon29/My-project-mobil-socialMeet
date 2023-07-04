import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { InputRegister } from "../../../redux/actions";
export const LoginUser = ({steps, setSteps, petid}) => {


    const [login, setLogin] = useState({
        email: "",
        password: "",
      });
    
      const [register, setRegister] = useState(false);
      const [incorrect, setIncorrect] = useState(false);
      const handleChange = (e) => {
        setLogin({
          ...login,
          [e.target.name]: e.target.value,
        });
      };
      const dispatch = useDispatch();
      const history = useHistory();
      const handleSubmit = async () => {
        try {
          const response = await axios.post("/api/user/login", {
            email: login.email,
            password: login.password,
          });
          localStorage.setItem("token", response.data.payload.token);
    
          dispatch(InputRegister(response.data.user));
          setSteps(2)    
          
        } catch (error) {
          console.log(error);
          setIncorrect(true);
        }
      };
    


  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div></div>
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Vemos que este chip aun no esta activado</h1>
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
          
              </div>

              <div className="mx-auto max-w-xs">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Email"
                  value={login.email}
                  name="email"
                  onChange={(e) => handleChange(e)}
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Password"
                  value={login.password}
                  name="password"
                  onChange={(e) => handleChange(e)}
                />
                
                  <button
                    onClick={() => handleSubmit()}
                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Iniciar sesion</span>
                  </button>
            
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
