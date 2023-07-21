import React, { useEffect, useState } from "react";
import axios from "axios";
import { NoPet } from "./NoPet";
import { SelectedPet } from "./SelectedPet";
export const SelectPet = ({chipId}) => {

const [pets, setPets] = useState()

useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        
        // Realizar la petición a la API con el token en los headers
        const response = await axios.get("https://whopaws-production.up.railway.app/api/pet/byowner", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        // Actualizar el estado con los datos recibidos de la API
        setPets(response.data.payload);
      } catch (error) {
        // Manejar errores si los hay
        console.error("Error al obtener la lista de mascotas:", error);
      }
    };
    fetchData();
  }, []); //

console.log(pets)
    return(
        <>
        {
            !pets ?
            <NoPet/>
            : 
            <SelectedPet pets={pets} chipId={chipId}/>
        }
        </>
    )
}