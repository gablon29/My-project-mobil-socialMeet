import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useEffect } from "react";
import { Login } from "./Login";
import { SelectPet } from "./SelectPet";
import { buscar_chipId } from "../../utils/axiosHandlers";

export const RegisterChip = () => {

    const [pet, setPet] = useState();
    const [owner, setOwner] = useState();
    const { chipId } = useParams();
    const [newChip, setNewChip] = useState();
    const [login, setLogin] = useState(false)

    /* console.log(chipId)
    useEffect(() => {
      buscar_chipId({
        chipId,
        succes: (v) => {
          setPet(v.pet);
          setOwner(v.owner);
        },
        error: (v) => {
          console.log(v);
        },
        loading: (v) => {
          console.log(v);
        },
      });
      setNewChip(chipId);


    }, [chipId]);   */
    
let token = localStorage.getItem("token")
    return(
        <>
        {pet && owner ?
          <p>mostrar info de la mascota</p>   
          :
          token ? 
          <SelectPet chipId={chipId}/>
          :
          <Login/>
        }      
        </>
    )
}