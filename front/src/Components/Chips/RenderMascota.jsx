import React, { useEffect } from "react";

export const RenderMascota = ({ mascota }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{mascota && mascota.pet.name}</h2>
        <p>
          {mascota && mascota.owner.phone} {mascota && mascota.owner.firstName}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary"></button>
        </div>
      </div>
    </div>
  );
};
