import react from "react"

export const UserProfesion = ({userProfesion}) => {


    return(
        <div className="flex mt-10 pb-10 items-center justify-center flex-wrap col-start-1 col-end-2 row-start-2 row-end-3 gap-12 sticky bottom-0 overflow-x-auto">
        {
            userProfesion.map((data, index)=>(
                <div key={index}className="w-60 h-80 bg-celeste flex justify-around items-center flex-col rounded-xl">
                    <div className="w-16 h-16 bg-black rounded-full">
                        <img src={data.profilePic} alt={data.name} className="w-full h-full rounded-full"/>
                    </div>
                    <ul className="list-none text-white text-xl">
                        <li>Nombre: {data.name}</li>
                        <li>Especie: {data.specie}</li>
                        <li>Raza: {data.breed}</li>
                        <li>Edad: {data.age.years} años y {data.age.months} meses </li>
                    </ul>
                    <button className="bg-white rounded-3xl w-8/12 h-8 text-base font-semibold">Ver su perfil</button>
                </div>
            ))
        }
    </div>
    )
}