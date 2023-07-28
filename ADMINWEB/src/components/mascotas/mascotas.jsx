import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FilterAndSearch } from "../all/FilterAndSearch";
import HeaderAdmin from "../all/HeaderAdmin";
import { useFilter } from "@/customHooks/useFilter";

export const Mascotas = () => {
  const mascotas = useSelector((state) => state.reducerUsuarios.mascotas);

  const   {searchTerm, setSearchTerm, handleSearch, filteredUsuarios} = useFilter(mascotas)




  return (
    <div className="grid col-start-1 col-end-2 row-start-1 row-end-3 grid-cols-[256px_1fr] grid-rows-[35vh_65vh] bg-white">
      <div className="grid col-start-1 col-end-3 row-start-1 row-end-2">
        <HeaderAdmin />
        <FilterAndSearch 
          handleSearch={handleSearch} 
          searchTerm={searchTerm} 
          placeholder={"Buscar mascotas, id, especie, dueño..."}
          del={true}
        />
      </div>
      <div className="z-10 grid row-start-2 row-end-3 col-start-1 col-end-3 grid-rows-[60px_1fr] overflow-x-auto border-b-2">
        <div className="bg-white border-b-[1px] z-10 border-gray-500 text-black grid col-start-1 col-end-2 row-start-1 row-end-2 sticky top-0 grid-cols-[50px_1fr_1fr_1fr_1fr]">
          <input className="relative left-3 w-4 h-4" type="checkbox" />
          <span className="block w-full text-center text-xl font-semibold">Nombre</span>
          <span className="block w-full text-center text-xl font-semibold">ID</span>
          <span className="block w-full text-center text-xl font-semibold">especie</span>
          <span className="block w-full text-center text-xl font-semibold">Editar</span>
        </div>
        <div className="bg-white text-white grid col-start-1 col-end-2 row-start-2 row-end-3">
          {filteredUsuarios.map((usuario) => {
            return (
              <div key={usuario.id} className="w-full text-black bg-white flex justify-evenly items-center py-1">
                <input className="relative left-3" type="checkbox" />
                <span className="w-full text-center">{usuario.name}</span>
                <span className="w-full text-center">{usuario.id}</span>
                <span className="w-full text-center">{usuario.specie}</span>
                <span className="w-full text-center">
                  <button className="bg-naranja text-white px-4 py-2 rounded-full">
                    Ver mascota
                  </button>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
        }  