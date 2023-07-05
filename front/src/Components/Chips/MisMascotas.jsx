import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RenderMascota } from "./RenderMascota";
import { RegisterMascota } from "./RegisterMascota";

import { buscar_chipId, buscar_todas_mis_mascotas, checkear_si_esta_logeado } from "../../utils/axiosHandlers";



export const MisMascotas = (props) => {

  const [todas_mis_mascotas, set_todas_mis_mascotas] = useState(null)
  const [owner, set_owner] = useState(null)
  const [loading, setLoading] = useState(true)

  const obtenerMascota = async () => {
    const payload = await buscar_todas_mis_mascotas()
    if(Array.isArray(payload)&&payload.length > 0){
      set_todas_mis_mascotas(payload)
      const payload_userdata = await checkear_si_esta_logeado()
      set_owner(payload_userdata)
 
    }else{
      console.log("respuesta de MisMascotas: "+ payload)
      alert("No se han podido cargar las mascotas")
    }
    setLoading(false)
  };
  useEffect(() => {
    setLoading(true) 
    if(loading)
    obtenerMascota().catch((err) => {
      console.log(err.message)
      setLoading(false)
    },[])
  }, []);


  return (
    <div >
      {todas_mis_mascotas && owner ? todas_mis_mascotas.map(pet=><RenderMascota key={pet.id} mascota={pet} owner={owner}  />): <RenderMascota/>}
    </div>
  );
};
