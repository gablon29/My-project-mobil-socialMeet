import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Mascotas = () => {
  const { id } = useParams();
  const [mascota, setMascota] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerMascota = async () => {
      try {
        const response = await fetch(`/pet-info`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ chipId: id }),
        });

        if (!response.ok) {
          throw new Error('Error al obtener la información de la mascota');
        }

        const data = await response.json();
        setMascota(data.pet);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    obtenerMascota();
  }, [id]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!mascota) {
    return <p>No se encontró la mascota</p>;
  }

  return (
    <>
      <p>Información de la mascota:</p>
      <p>Nombre: {mascota.name}</p>
      <p>Edad: {mascota.age}</p>
      {/* Renderizar el resto de la información de la mascota */}
    </>
  );
};