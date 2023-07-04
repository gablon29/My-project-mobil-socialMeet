import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RenderMascota } from "./RenderMascota";
import { RegisterMascota } from "./RegisterMascota";
import axios from "axios";
export const Mascotas = () => {
  const { id } = useParams();
  const [mascota, setMascota] = useState(null);
  const [loading, setLoading] = useState(true);
  const[needRegister, setNeedRegister] = useState(false)
const [petid, setPetid] = useState("")


useEffect(() =>  {

 setPetid(id)
},[])


useEffect(() => {
  const obtenerMascota = async () => {
    try {
      const response = await axios.get(`/api/pet-info/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setLoading(false);
      setMascota(response.data.payload)
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  obtenerMascota();
}, [id]);
  // si no llega informacion se va renderizar otro componente
  // bienvenidoa  whopaws 

console.log(mascota)

  return (
    <>
    {mascota.owner ? <RenderMascota mascota={mascota} id={id}/> : <RegisterMascota id={id} petid={petid}/>}
    </>
  );
};