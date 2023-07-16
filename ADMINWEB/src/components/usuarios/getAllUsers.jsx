import React from "react";
import { useSelector } from "react-redux";

export const GetAllUsers = () => {
  const usuarios = useSelector((state) => state.reducerUsuarios.usuarios);
  const profile = useSelector((state) => state.reducerAuth.usuarioAuth);

  return (
    <>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>ID</th>
            <th>Mascota</th>
            <th>Editar</th>

          </tr>
        </thead>
        <tbody>
          {usuarios?.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.firstName}</td>
              <td>{usuario.id}</td>
              <td>{usuario.pets.length}</td>
              <button>Editar</button>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};