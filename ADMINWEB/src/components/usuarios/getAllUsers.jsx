import React, { useState } from "react";
import { useSelector } from "react-redux";
import HeaderAdmin from "../all/HeaderAdmin";
import { FilterAndSearch } from "../all/FilterAndSearch";
import { useFilter } from "@/customHooks/useFilter";
import Link from "next/link";

export const GetAllUsers = () => {
  const usuarios = useSelector((state) => state.reducerUsuarios.usuarios);
  const profile = useSelector((state) => state.reducerAuth.usuarioAuth);

const   {searchTerm, setSearchTerm, handleSearch, filteredUsuarios} = useFilter(usuarios)

  return (
    <div className="grid col-start-1 col-end-2 row-start-1 row-end-3 grid-cols-[256px_1fr] grid-rows-[35vh_65vh] bg-white">
      <div className="grid col-start-1 col-end-3 row-start-1 row-end-2">
        <HeaderAdmin />
        <FilterAndSearch 
          handleSearch={handleSearch} 
          searchTerm={searchTerm} 
          placeholder={"Buscar usuarios, id, teléfono, email..."}
          active={true}
          bannear={true}
          del={true}
        />
      </div>

      <div className="grid row-start-2 row-end-3 col-start-1 col-end-3 grid-rows-[60px_1fr] bg-white overflow-x-auto z-10">
        
          <div className="bg-white text-black z-10 border-b-[1px] border-gray-500 grid col-start-1 col-end-2 row-start-1 row-end-2 sticky top-0 grid-cols-[50px_1fr_1fr_1fr_1fr_1fr]">
              <input className="relative left-3 w-4 h-4" type="checkbox" />
              <span className="block w-full text-center text-xl font-semibold">Nombre</span>
              <span className="block w-full text-center text-xl font-semibold">ID</span>
              <span className="block w-full text-center text-xl font-semibold">Mascota</span>
              <span className="block w-full text-center text-xl font-semibold">País</span>
              <span className="block w-full text-center text-xl font-semibold">Editar</span>
          </div>

          <div className="bg-white text-white grid col-start-1 col-end-2 row-start-2 row-end-3 ">
            {
              filteredUsuarios.map((usuario)=> {
                  return(
                    <div key={usuario.id} className="text-black bg-white flex justify-evenly items-center py-1 my-1">
                    <input className="relative left-3" type="checkbox" />
                    <span className="w-full text-center">{usuario.firstName}</span>
                    <span className="w-full text-center">{usuario.id}</span>
                    <span className="w-full text-center">{usuario.pets.length}</span>
                    <span className="w-full text-center">{usuario.country}</span>
                    <span className="w-full text-center">
                      <Link href={`/usuarios/${usuario.id}`} className="bg-naranja text-white px-4 py-2 rounded-full">
                      Ver usuario
                      </Link>
                    </span>
                    </div>
                )
                }
              )
            }
          </div>

      </div>
    </div>
  );
};