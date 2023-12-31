import React, { useState } from "react";
import axios from "axios";


export const SelectedPet = ({ pets, chipId }) => {
  const [petSelected, setPetSelected] = useState(null);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [steps, setSteps] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [address, setAddress] = useState("");
  const [info, setInfo] = useState("");


  const activarChip = async () => {
    const chipData = {
      chipId: chipId,
      telefono: phone,
      email: email,
      veterinaria: firstName,
      veterinariaAdress: address,
      information: info,
      petId: petSelected,
    };
    const token = localStorage.getItem("token");
  
    try {
      const response = await axios.put("https://whopaws-production.up.railway.app/api/pet-info", {chipData: chipData}, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      // Hacer algo con la respuesta si es necesario
      localStorage.removeItem("token");
      window.location.reload();
    } catch (error) {
      console.error("Error al activar el chip:", error);
    }
  };
  
  return (
    <div className="h-screen relative">
      <div className="w-full justify-center flex relative top-12">
        <img src="/whopaws.png" alt="Whopaws" width="251" height="63"/>
      </div>
      {steps === 0 ? (
        <div className="flex flex-col justify-center items-center">
          <p className="font-semibold text-xl my-20">Selecciona una de tus mascotas</p>
          <div className="flex flex-row flex-wrap justify-center gap-4">
          {pets.map((item, idx) => (
  <div
    key={idx}
    onClick={() => setPetSelected(item.id)}
    className={`relative ${petSelected === item.id ? "border-1 border-black bg-rosa rounded-2xl w-20 h-20" : "bg-rosa rounded-2xl w-20 h-20"}`}
  >
    <img
      className={`w-full h-full rounded-2xl cursor-pointer ${petSelected === item.id ? "border-4 border-black" : "bg-rosa rounded-2xl w-20 h-20"}`}
      src={item.profilePic}
      alt={item.name}
    />
  </div>
))}

          </div>
          <button className="bg-white border-2 border-naranja shadow-md shadow-zinc-700 text-naranja font-semibold text-base p-2 rounded-full w-32 mt-20" onClick={() => setSteps(1)}>Siguiente</button>
        </div>
      ) : null}

      {steps === 1 ? (
        <div className="flex items-center flex-col mt-10">
          <div className="flex items-center my-2">
            <p className="font-semibold text-xl my-10">Datos de contacto de emergencia</p>
          </div>
          <div className="max-sm:w-80 w-96 flex flex-col items-center">
            <p className="font-poppinsBold relative left-7 font-semibold w-full">Teléfono</p>
            <input
              placeholder=""
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-11/12 rounded-2xl bg-rosa h-8 px-4 mb-4 outline-none"
              maxLength={30}
            />
            <p className="font-poppinsBold relative left-7 font-semibold w-full">Email</p>
            <input
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-11/12 rounded-2xl bg-rosa h-8 px-4 mb-4 outline-none"
              type="email"
            />
          </div>
          <button className="bg-white border-2 border-naranja shadow-md shadow-zinc-700 text-naranja font-semibold text-base p-2 rounded-full w-32 mt-10" onClick={() => setSteps(2)}>Siguiente</button>
        </div>
      ) : null}

      {steps === 2 ? (
        <div className="flex flex-col mt-20 justify-center items-center">
          <div className="ml-12 mr-12 mb-10">
            <p className="font-semibold text-xl text-center">¿Cuál es su centro veterinario habitual?</p>
          </div>
          <div className="max-sm:w-80 w-96 flex flex-col items-center">
            <p className="font-poppinsBold relative left-7 font-semibold w-full">Nombre de la clínica</p>
            <input
              placeholder=""
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-11/12 rounded-2xl h-8 px-4 mb-4 bg-rosa"
            />
            <p className="font-poppinsBold relative left-7 font-semibold w-full">Dirección de la clínica</p>
            <input
              placeholder=""
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-11/12 rounded-2xl bg-rosa h-8 px-4 mb-4"
            />
          </div>
          <button className="bg-white border-2 border-naranja shadow-md shadow-zinc-700 text-naranja font-semibold text-base p-2 rounded-full w-32 mt-10" onClick={() => setSteps(3)}>Siguiente</button>
        </div>
      ) : null}

      {steps === 3 ? (
        <div className="flex flex-col items-center mt-16">
          <div>
            <p className="font-semibold text-xl text-center">¿Alguna información importante a tener en cuenta?</p>
            <p className="font-normal text-sm text-center">Medicamentos, enfermedades, dolencias...</p>
          </div>
          <textarea
            placeholder=""
            value={info}
            onChange={(e) => setInfo(e.target.value)}
            className="rounded-lg bg-rosa w-72 h-64 p-2 mb-4 mt-5 outline-none resize-none"
          > 
          </textarea>
          <button className="bg-white border-2 border-naranja shadow-md shadow-zinc-700 text-naranja font-semibold text-base p-2 rounded-full w-32 " onClick={() => activarChip()}>Activar chip</button>
        </div>
      ) : null}

    </div>
  );
};

