import React, { useState } from "react"; 



export const useFilterProfesional = (professions) => {
console.log("HOLA", professions)
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const filteredProfesionales = professions?.filter((profession) =>
    profession?.country?.toLowerCase()?.includes(searchTerm?.toLowerCase())
       || profession?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
    ) 

    return      {searchTerm, handleSearch, filteredProfesionales}

}