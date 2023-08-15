import react from "react"

export const UserProfesion = ({userProfesion}) => {
console.log(userProfesion)
let veterinario = userProfesion.professions.veterinario.isRegister
let cuidador = userProfesion.professions.cuidador.isRegister
let peluquero = userProfesion.professions.peluquero.isRegister
let paseador = userProfesion.professions.paseador.isRegister
let educador = userProfesion.professions.educador.isRegister
let tienda = userProfesion.professions.tienda.isRegister

    return(
        <div className="flex mt-10 pb-10 items-center justify-center flex-wrap col-start-1 col-end-2 row-start-2 row-end-3 gap-12 sticky bottom-0 overflow-x-auto">
        {
            userProfesion.map((data, index)=>(
                <div key={index}className="w-60 h-80 bg-celeste flex justify-around items-center flex-col rounded-xl">
                    <div className="w-16 h-16 bg-black rounded-full">
                        <img src={data.profilePic} alt={data.name} className="w-full h-full rounded-full"/>
                    </div>
                    <ul className="list-none text-white text-xl">
                        <li>Profesión: {veterinario && "veterinario" || cuidador && "cuidador" || peluquero && "peluquero" || paseador && "paseador" || educador && "educador" || tienda && "tienda" ||}</li>
                    </ul>
                    <button className="bg-white rounded-3xl w-8/12 h-8 text-base font-semibold">Ver su perfil</button>
                </div>
            ))
        }
    </div>
    )
}