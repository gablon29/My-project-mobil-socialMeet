import React from "react";
import { useSelector } from "react-redux";

export const Mascotas = () => {
  const mascotas = useSelector((state) => state.reducerUsuarios.mascotas);
  return (
    <>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>ID</th>
            <th>Especie</th>
            <th>Editar</th>

          </tr>
        </thead>
        <tbody>
          {mascotas?.map((ele) => (
            <tr key={ele.id}>
              <td>{ele.name}</td>
              <td>{ele.id}</td>
              <td>{ele.specie}</td>
              <button>Editar</button>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};