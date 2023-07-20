import React, { useState } from "react";
import axios from "axios"
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
      const response = await axios.put("http://localhost:8080/api/pet-info", chipData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      // Hacer algo con la respuesta si es necesario
    } catch (error) {
      console.error("Error al activar el chip:", error);
    }
  };
  


  return (
    <>
      {steps === 0 ? (
        <div className="flex flex-row flex-wrap justify-center my-4">
          {pets.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setPetSelected(item.id)}
              className={`w-20 h-20 rounded-full cursor-pointer ${
                petSelected === item.id ? "border-4 border-blue-500" : ""
              }`}
            >
              <img
                src={item.profilePic}
                alt={item.name}
                style={{ height: 80, width: 80 }}
                className="rounded-full object-cover"
              />
            </div>
          ))}
          <button onClick={() => setSteps(1)}>Siguiente</button>
        </div>
      ) : null}

      {steps === 1 ? (
        <div>
          <div className="flex items-center my-2">
            <p className="text-xl font-poppinsBold text-black mt-12 ml-26 mr-26 text-center">Datos de contacto de emergencia</p>
          </div>
          <div className="mx-2">
            <p className="font-poppinsBold">Teléfono</p>
            <input
              placeholder=""
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-full bg-gris h-8 px-4 mb-4"
            />
            <p className="font-poppinsBold">Email</p>
            <input
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-full bg-gris h-8 px-4 mb-4"
            />
          </div>
          <button onClick={() => setSteps(2)}>Siguiente</button>
        </div>
      ) : null}

      {steps === 2 ? (
        <div>
          <div className="ml-12 mr-12">
            <p className="text-xl font-poppinsBold text-black  mr-26 text-center">¿Cuál es su centro veterinario habitual?</p>
          </div>
          <div className="mt-7  mx-2">
            <p className="font-poppinsBold">Nombre de la clínica</p>
            <input
              placeholder=""
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full rounded-full bg-gris h-8 px-4 mb-4"
            />
            <p className="font-poppinsBold">Dirección de la clínica</p>
            <input
              placeholder=""
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full rounded-full bg-gris h-8 px-4 mb-4"
            />
            <button onClick={() => setSteps(3)}>Siguiente</button>
          </div>
        </div>
      ) : null}

      {steps === 3 ? (
        <div>
          <div>
            <p className="text-xl font-poppinsBold text-black mt-12 text-center">¿Alguna información importante a tener en cuenta?</p>
            <p className="text-md font-poppins  mt-2 ml-26 mr-26 text-center">Medicamentos, enfermedades, dolencias...</p>
          </div>
          <input
            placeholder=""
            value={info}
            onChange={(e) => setInfo(e.target.value)}
            className="w-full rounded-lg bg-gris h-28 px-4 mb-4 mt-5"
          />
          <button onClick={() => activarChip()}>Activar chip</button>
        </div>
      ) : null}

    </>
  );
};

