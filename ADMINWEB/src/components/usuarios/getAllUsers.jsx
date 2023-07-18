import React, { useState } from "react";
import { useSelector } from "react-redux";

export const GetAllUsers = () => {
  const usuarios = useSelector((state) => state.reducerUsuarios.usuarios);
  const profile = useSelector((state) => state.reducerAuth.usuarioAuth);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsuarios = usuarios.filter((usuario) =>
    usuario.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Usuarios</h1>
        <input
          type="text"
          placeholder="Buscar"
          className="p-2 rounded-md"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <table className="table-auto bg-white text-black h-full w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Nombre</th>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Mascota</th>
            <th className="px-4 py-2">Editar</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td className="px-4 py-2">{usuario.firstName}</td>
              <td className="px-4 py-2">{usuario.id}</td>
              <td className="px-4 py-2">{usuario.pets.length}</td>
              <td className="px-4 py-2">
                <button className="bg-orange-500 text-white px-4 py-2 rounded-md">
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};