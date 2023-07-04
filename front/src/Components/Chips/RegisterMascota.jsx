import React from "react";
import { Home } from "../Home";
import { useState } from "react";
import { LoginUser } from "./RegisterMascota/LoginUser";
import { SelectPet } from "./RegisterMascota/SelectPet";

export const RegisterMascota = ({petid, id}) =>{

const [steps, setSteps] = useState(1)


    return(
        <>
        {steps === 1 ? 
        <LoginUser steps={steps} setSteps={setSteps} petid={petid}/>
        : <SelectPet steps={steps} setSteps={setSteps} id={id} petid={petid}/>
    }
        </>
    )
}