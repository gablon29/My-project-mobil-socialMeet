import React, { useEffect } from "react";
import { useState } from "react";
import { activar_pet } from "../../utils/axiosHandlers";
export const RenderMascota = ({ mascota, owner }) => {
  /*
  owner = {email
firstName
id
lastName
pets []
profilePic
userType  "user o admin"}
  */
 const [chipId, setChipId]=useState(null)
let loading = false
const handleActivar =()=>{
  loading=true
  if(chipId)
    activar_pet(chipId,mascota.petId)
      .then((response) => {
        // Lógica adicional en caso de éxito
        loading=false
        alert("Chip activado con éxito");
      })
      .catch((error) => {
        // Lógica adicional en caso de error
        loading=false
        alert("Error al activar el chip")
        alert(error.message)
      });
  };


const handleVer =()=>{
  
}
  // explicacion, si se cumplen estas condiciones, retorna ese componente, sino, retorna el por defecto de más abajo
  if(mascota && !owner){
    return (<div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img
      className="w-full"
      src={mascota.profilePic}
      alt="Sunset in the mountains"
    />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{mascota.name}</div>
      <p className="text-gray-700 text-base">{mascota.information}</p>
    </div>
    <div className="px-6 pt-4 pb-2">
    {mascota.chip?
    <button onClick={(e)=>handleActivar()} className="btn btn-primary">Activar Chip</button>:
      <button onClick={(e)=>handleVer()} className="btn btn-primary bg-orange-400">Chip Activo</button>}
    </div>
  </div>)
  }
  if (mascota && owner) 
  return (<div className="ml-5 mt-5 border border-double border-purple-500 p-2 card w-96 bg-base-100 shadow-xl">
  <figure>
    <img
      src={mascota.profilePic}
      alt="/default_pet_image.png"
    />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{mascota.name}</h2>
    <p>
      {mascota.owner.firstName}
    </p>
    <div className="card-actions justify-end">
    Chip asociado a la mascota: {mascota.chip}
    </div>
  </div>
</div>)
else return (<div className="card w-96 h-auto bg-base-100 shadow-xl">
<figure>
  <img 
  className="card w-36 mt-3 h-auto bg-base-100 shadow-xl"
    src="/default_pet_image.png"
    alt="Sin imagen disponible"
  />
</figure>
<div className="card-body">
  <h2 className="card-title">{"Sin mascota para mostrar"}</h2>
  <p>
    {`Usted no tiene mascotas registradas, por favor, ingrese en la app Whopaws y cree una mascota para poder asignarle un chip.`}
  </p>
</div>
</div>)
};
