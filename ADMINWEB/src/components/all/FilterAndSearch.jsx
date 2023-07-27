import React from "react";

export const FilterAndSearch = ({handleSearch, searchTerm}) => {


    return(
        <>
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
      </>
    )
}