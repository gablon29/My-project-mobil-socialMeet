import React, { useState } from "react"; 

export const useFilter = (usuarios) => {

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
    const filteredUsuarios = usuarios.filter((usuario) =>
       usuario?.firstName?.toLowerCase()?.includes(searchTerm?.toLowerCase())
       || usuario?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||  usuario?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
    ) 

    return      {searchTerm, handleSearch, filteredUsuarios}
    
}