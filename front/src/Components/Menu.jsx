import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

export const Menu = ({ sidebarOpen, setSidebarOpen }) => {
  const aux = () => {
    setSidebarOpen && setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="flex flex-col flex-1 overflow-y-auto">
      <nav className="flex-1 px-2 py-4 bg-purple-800">
        <Link
          to="/dashboard"
          className="flex items-center px-4 py-2 text-gray-100 hover:bg-purple-700"
          onClick={() => aux(0)}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            ></path>
          </svg>
          General
        </Link>
        <Link
          to="/dashboard/admin"
          className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-purple-700"
          onClick={() => aux(1)}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
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
         Chips
        </Link>
        <Link
          to="/dashboard/clientes"
          className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-purple-700"
          onClick={() => aux(2)}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          Usuarios
        </Link>
        <Link
          to="/dashboard/usuarios"
          className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-purple-700"
          onClick={() => aux(3)}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          Mascotas
        </Link>
      </nav>
    </div>
  );
};
