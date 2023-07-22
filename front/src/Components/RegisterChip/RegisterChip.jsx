import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Login } from "./Login";
import { SelectPet } from "./SelectPet";
import { Petinformation } from "./Petinformation";

export const RegisterChip = () => {
  const { chipId } = useParams();
  const [loading, setLoading] = useState(false);
  const [pet, setPet] = useState(null);
  const [owner, setOwner] = useState(null);
  const [newChip, setNewChip] = useState(null);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const fetchPetInfo = async () => {
      setLoading(true);

      try {
        const response = await axios.get(`https://whopaws-production.up.railway.app/api/pet-info/${chipId}`, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        const { pet, owner } = response.data.payload;
        setPet(pet);
        setOwner(owner);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching pet information:", error);
        setLoading(false);
      }
    };

    fetchPetInfo();
  }, [chipId]);

  let token = localStorage.getItem("token");

  return (
    <>
      {loading ? (
        <p>Cargando...</p>
      ) : pet && owner ? (
        <Petinformation pet={pet} owner={owner} />
      ) : login ? (
        <SelectPet chipId={chipId} />
      ) : (
        <Login setLogin={setLogin} />
      )}
    </>
  );
};