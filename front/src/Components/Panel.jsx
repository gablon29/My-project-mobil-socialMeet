import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {useDispatch } from "react-redux";
import {
  CleanProfile,
} from "../redux/actions";
import axios from "axios";
import { Menu } from "./Menu";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { Usuarios } from "./Usuarios";
import { Mascotas } from "./Chips/Mascotas";

export const Panel = (props) => {
  const dispatch = useDispatch();
  const [paginas, setPaginas] = useState(1);
  const history = useHistory();
  const location = useLocation();
  const tokenUser = localStorage.getItem("accessToken");

  const logout = () => {
    localStorage.clear("accessToken");
    if (tokenUser) {
      axios
        .post(
          "/ingles/logout",
          {},
          {
            headers: {
              Authorization: `Bearer ${tokenUser}`,
            },
          }
        )
        .then((success) => {
          localStorage.clear("accessToken");
          dispatch(CleanProfile());

          history.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      localStorage.clear("tokenGoogle");
      dispatch(CleanProfile());

      history.push("/");
    }
  };

  const [newCard, setNewCard] = useState(true);
  const [movil, setMovil] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function handleSidebarToggle() {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <div>
      <div className="flex h-screen bg-gray-100 z-">
        {/* <!-- sidebar --> */}
        <div className="hidden md:flex flex-col w-64 bg-purple-800">
          <div className="flex items-center justify-center h-16 bg-purple-900">
            <span className="text-white font-bold uppercase">Menu</span>
          </div>
          <Menu setPaginas={setPaginas} />
        </div>

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
        {movil && !sidebarOpen ? (
  <Menu
    setPaginas={setPaginas}
    setMovil={setMovil}
    handleSidebarToggle={handleSidebarToggle}
    setSidebarOpen={setSidebarOpen}
    sidebarOpen={sidebarOpen}
  />
) : location.pathname === "/dashboard/usuarios" ?
  <div className="mb-8">
    <Usuarios/>
  </div>
  : location.pathname === "/activate/:id" || "/activate" ?
  <Mascotas/> : null
}
          </div>
        </div>
      </div>
    </div>
  );
};
