import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export const SelectPet = ({ steps, setSteps, petid, id }) => {
  const [mascotas, setMascotas] = useState();
  const { safdasf } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get("/api/pet/byowner", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        setMascotas(response.data.payload);
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const activar = (petid) => {
    const token = localStorage.getItem("token");

    axios
      .put(
        "/api/pet-info",
        {
          chipId: petid,
          petId: petid,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        // Lógica adicional en caso de éxito
        alert("Chip activado con éxito");
      })
      .catch((error) => {
        // Lógica adicional en caso de error
        console.error(error);
      });
  };
  return (
    <>
      <p>Selecciona la mascota a la cual activaremos el chip</p>
      {mascotas?.map((ele) => (
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            class="w-full"
            src={ele.profilePic}
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{ele.name}</div>
            <p class="text-gray-700 text-base">{ele.information}</p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <button onClick={() => activar(ele.id)}>activar</button>
          </div>
        </div>
      ))}
    </>
  );
};
