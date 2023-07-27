import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FilterAndSearch } from "../all/FilterAndSearch";
import HeaderAdmin from "../all/HeaderAdmin";
import { useFilter } from "@/customHooks/useFilter";

export const Mascotas = () => {
  const mascotas = useSelector((state) => state.reducerUsuarios.mascotas);

  const   {searchTerm, setSearchTerm, handleSearch, filteredUsuarios} = useFilter(mascotas)




  return (
    <div>
      <div className="bg-white fixed w-screen right-0 pl-[256px] z-10">
        <HeaderAdmin />
        <FilterAndSearch handleSearch={handleSearch} searchTerm={searchTerm} />
      </div>
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
      <div
        style={{ paddingBottom: "250px" }}
        className="h-full bg-white fixed overflow-x-auto w-screen mt-[240px] right-0 pl-[256px] z-10"
      >
        <div className="bg-white text-black flex justify-evenly fixed pb-5 w-screen right-0 pl-[256px] z-10 border-b-[1px] border-gray-500">
          <input className="relative left-3" type="checkbox" />
          <span className="block w-full text-center text-xl font-semibold">Nombre</span>
          <span className="block w-full text-center text-xl font-semibold">ID</span>
          <span className="block w-full text-center text-xl font-semibold">especie</span>
          <span className="block w-full text-center text-xl font-semibold">Editar</span>
        </div>
        <div className="bg-white text-white w-full flex flex-col pt-14">
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