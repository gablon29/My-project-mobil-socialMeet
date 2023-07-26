import React, { useState } from "react";
import { useSelector } from "react-redux";
import HeaderAdmin from "../all/HeaderAdmin";

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
      <div className="bg-white fixed w-screen right-0 pl-[256px] z-10">
        <HeaderAdmin />
        <div className="flex justify-end mb-4 pr-5">
          <div className="w-96 rounded-full bg-gris flex items-center">
            <input
              type="text"
              placeholder="Buscar usuarios, id, teléfono, email..."
              className="p-2 w-11/12 h-full rounded-full outline-none text-black bg-transparent placeholder-black"
              value={searchTerm}
              onChange={handleSearch}
            />
            <img src="/lupa.png" alt="" className="w-5 h-5"/>
          </div>
        </div>
        <div className="w-full flex justify-between p-5 bg-white">
          <div>
            <button className="bg-naranja rounded-full h-10 w-32 text-white font-semibold mx-4">Eliminar</button>
            <button className="bg-naranja rounded-full h-10 w-32 text-white font-semibold mx-4">Bannear</button>
            <button className="bg-naranja rounded-full h-10 w-32 text-white font-semibold mx-4">Activar</button>
          </div>
          <select name="list" value="Ordernar por" className="bg-naranja rounded-full h-10 w-32 text-white text-center font-semibold">
            <option value="">Ordenar por</option>
          </select>
        </div>
      </div>
      <div style={{paddingBottom: "250px"}} className="h-full bg-white fixed overflow-x-auto w-screen mt-[240px] right-0 pl-[256px] z-10">
          <div className="bg-white text-black flex justify-evenly fixed pb-5 w-screen right-0 pl-[256px] z-10 border-b-[1px] border-gray-500">
            <input className="relative left-3" type="checkbox" />
            <span className="block w-full text-center text-xl font-semibold">Nombre</span>
            <span className="block w-full text-center text-xl font-semibold">ID</span>
            <span className="block w-full text-center text-xl font-semibold">Mascota</span>
            <span className="block w-full text-center text-xl font-semibold">País</span>
            <span className="block w-full text-center text-xl font-semibold">Editar</span>
          </div>
          <div className="bg-white text-white w-full flex flex-col pt-14">
            {
              filteredUsuarios.map((usuario)=> {
                  return(
                    <div key={usuario.id} className="w-full text-black bg-white flex justify-evenly items-center py-1">
                    <input className="relative left-3" type="checkbox" />
                    <span className="w-full text-center">{usuario.firstName}</span>
                    <span className="w-full text-center">{usuario.id}</span>
                    <span className="w-full text-center">{usuario.pets.length}</span>
                    <span className="w-full text-center">{usuario.country}</span>
                    <span className="w-full text-center">
                      <button className="bg-naranja text-white px-4 py-2 rounded-full">
                      Ver usuario
                      </button>
                    </span>
                  </div>
                )
                }
              )
            }
          </div>
          {/* <table className="table-auto bg-white text-black h-full w-full overflow-auto relative">
              <thead className="sticky">
                <tr className="">
                  <th className="px-4 py-2">Nombre</th>
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Mascota</th>
                  <th className="px-4 py-2">Editar</th>
                </tr>
              </thead>
              <tbody className="">
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
          </table> */}
      </div>
    </>
  );
};