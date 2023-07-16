import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {useDispatch } from "react-redux";
import {
  CleanProfile,
} from "../redux/actions";

import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { MisMascotas } from "./Chips/MisMascotas";

export const Panel = (props) => {
  const dispatch = useDispatch();
  const [paginas, setPaginas] = useState(1);
  const history = useHistory();
  const location = useLocation();


  const logout = () => {
          localStorage.removeItem("token");
          dispatch(CleanProfile());
          props.set_hay_token(false)
          history.push("/");
  };

  const [newCard, setNewCard] = useState(true);
  const [movil, setMovil] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function handleSidebarToggle() {
    setSidebarOpen(!sidebarOpen);
  }
  if(!props.hay_token || !props.quiere_logearse){ //el panel desaparece si está deslogeado
    return <></>
  }
  else
  return (
    <div>
      <div className="flex h-screen bg-gray-100 z-">

        {/* <!-- Main content --> */}
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex items-center justify-between h-16 bg-purple border-b border-gray-200">
            <div className="flex items-center px-4">
              <button
                className="text-gray-500 focus:outline-none focus:text-gray-700 md:hidden"
                onClick={() => handleSidebarToggle()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            <div className="flex my-2 items-center pr-4">
              <button
                onClick={() => logout()}
                type="button"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Logout
              </button>
            </div>
          </div>
          <div className="">
    
  <MisMascotas set_hay_token={props.set_hay_token}/>

          </div>
        </div>
      </div>
    </div>
  );
};
