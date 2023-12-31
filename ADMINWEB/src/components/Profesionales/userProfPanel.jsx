import react from "react"

export const UserProfesion = ({userProfesion}) => {
console.log(userProfesion, "USERPROFESION")
let veterinario = userProfesion[0].professions.veterinario.isRegister
let cuidador = userProfesion[0].professions.cuidador.isRegister
let peluquero = userProfesion[0].professions.peluquero.isRegister
let paseador = userProfesion[0].professions.paseador.isRegister
let educador = userProfesion[0].professions.educador.isRegister
let tienda = userProfesion[0].professions.tienda.isRegister
console.log(veterinario, "VETERINARIO")
    return(
        <div className="flex mt-10 pb-10 items-center justify-center flex-wrap col-start-1 col-end-2 row-start-2 row-end-3 gap-12 sticky bottom-0 overflow-x-auto">
        {
            userProfesion.map((data, index)=>(
                <div key={index}className="w-60 h-80 bg-celeste flex justify-around items-center flex-col rounded-xl">
                    <div className="w-16 h-16 bg-black rounded-full">
                        <img src={data.profilePic} alt={data.name} className="w-full h-full rounded-full"/>
                    </div>
                    <ul className="list-none text-white text-xl">
                        <li>Profesión:</li>
                        <li>{ veterinario && "veterinario"}</li>
                        <li>{ cuidador && "cuidador"}</li>
                        <li>{ peluquero && "peluquero"}</li>
                        <li>{ paseador && "paseador"}</li>
                        <li>{ educador && "educador"}</li>
                        <li>{ tienda && "tienda"}</li>
                    </ul>
                    <button className="bg-white rounded-3xl w-8/12 h-8 text-base font-semibold">Ver su perfil</button>
                </div>
            ))
        }
    </div>
    )
}