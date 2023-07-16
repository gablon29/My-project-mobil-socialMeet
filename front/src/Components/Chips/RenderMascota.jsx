import React, { useEffect } from "react";
import { useState } from "react";
import { activar_pet } from "../../utils/axiosHandlers";
export const RenderMascota = ({ mascota, owner,detalloso=true }) => {

  const [chipId, setChipId] = useState("");
  const [petId, setPetId] = useState("");

  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleActivar = () => {
    setShowPopup(true);
    return;
  };
  const handleVer = () => {};

  const handleConfirm = () => {
    setLoading(true);

      activar_pet(chipId, mascota.id)
        .then((response) => {
          mascota.chip = chipId
          setShowPopup(false)
          setLoading(false);
        })
        .catch((error) => {

          setLoading(false);
          alert("Error al activar el chip", error.message);
        });
    
  };

  // Render the component with popup input if showPopup is true
  const handleChipIdChange = (event) => {
    setChipId(event.target.value);
  };

  if (showPopup) {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
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
          <input
            type="text"
            value={chipId}
            onChange={handleChipIdChange}
            placeholder="Enter Chip ID"
            className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleConfirm}
            className="btn btn-primary ml-3"
            
          >
            Confirm
          </button>
        </div>
      </div>
    );
  }
  // explicacion, si se cumplen estas condiciones, retorna ese componente, sino, retorna el por defecto de más abajo
  if (mascota && owner && !detalloso) {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src={mascota.profilePic}
          alt="Sunset in the mountains"
        />
        
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{mascota.name}</div>
          <p className="text-gray-700 text-base">{mascota.information}</p>
          
          {(mascota.chip + "").length<10 ? <p className="text-red-600">Debe de asociar un chip correcto mayor a 10 caracteres</p>:<p><strong>Chip asociado a esta mascota: </strong> {mascota.chip}</p>}
        </div>
        <div className="px-6 pt-4 pb-2">
          
          {(mascota.chip + "").length<10 ? (
            <button
              onClick={(e) => handleActivar()}
              className="btn btn-primary"
            >
              asociar chip
            </button>
          ) : (
            <button
              onClick={(e) => handleVer()}
              className="h-12 w-40 rounded-xl cursor-default bg-orange-400"
            >
              Chip Activo
            </button>
          )}
        </div>
      </div>
    );
  }
  if (mascota && owner)
    return (
      <div className="ml-5 mt-5 border border-double border-orange-500 p-2 card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={mascota.profilePic} alt="/default_pet_image.png" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{mascota.name}</h2>
          <p>Dueño: {owner.firstName}</p>
          <div className="card-actions justify-end">
            Chip asociado a la mascota: {mascota.chip}
          </div>
        
            <button
              onClick={(e) => handleVer()}
              className="bg-orange-400 cursor-default"
            >
              Chip Activo
            </button>
          
        </div>
      </div>
    );
  else
    return (
      <div className="card w-96 h-auto bg-base-100 shadow-xl">
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
      </div>
    );
};
