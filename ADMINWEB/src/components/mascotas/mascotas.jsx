import React, { useState } from "react";
import { useSelector } from "react-redux";

export const Mascotas = () => {
  const mascotas = useSelector((state) => state.reducerUsuarios.mascotas);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMascotas = mascotas.filter((mascota) =>
    mascota.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <> 
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Mascotas</h1>
        <input
          type="text"
          placeholder="Buscar"
          className="p-2 rounded-md"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <table className="table-auto bg-white text-black w-full h-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Nombre</th>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Especie</th>
            <th className="px-4 py-2">Editar</th>
          </tr>
        </thead>
        <tbody>
          {filteredMascotas.map((mascota) => (
            <tr key={mascota.id}>
              <td className="px-4 py-2">{mascota.name}</td>
              <td className="px-4 py-2">{mascota.id}</td>
              <td className="px-4 py-2">{mascota.specie}</td>
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