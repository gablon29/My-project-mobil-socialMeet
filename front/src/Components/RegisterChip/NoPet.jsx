import React from "react";

export const NoPet = () => {


    return(
        <div className="flex flex-col items-center">
            <img src="/whopaws.png" alt="" width="251" height="63" className="mt-10"/>
            <img src="/dogSad.png" alt="" width="193" height="200" className="mt-10 relative right-2"/>
            <div className="flex flex-col items-center mt-10">
                <h3 className="font-bold text-2xl text-naranja">OOOPPPPSSSS!</h3>
                <p className="font-medium text-base leading-8 w-72">Parece que aún no tienes ninguna mascota, crea una mascota desde la app de Whopaws y vuelve para vincularle este chip.</p>
            </div>
        </div>
    )
}