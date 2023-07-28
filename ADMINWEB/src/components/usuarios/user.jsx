import HeaderAdmin from "../all/HeaderAdmin";
import ButtonCustom from "../all/ButtonCustom";
import { useState } from "react";

const User = () => {

    const [activeBtn, setActiveBtn] = useState("mascota")
    const generalBtnClass = "w-28 rounded-lg h-14 font-bold text-base"

    return (
        <div className="grid col-start-1 col-end-2 row-start-1 row-end-3 grid-cols-[256px_1fr] grid-rows-[25vh_75vh] bg-white">
            <div className="grid col-start-1 col-end-3 row-start-1 row-end-2">
                <HeaderAdmin />
            </div>
            <div className="grid ml-10 col-start-1 col-end-3 row-start-2 row-end-3 bg-white grid-rows-[70px_1fr] grid-cols-[65%_35%] relative bottom-2">
                <div className="flex border-b-2 border-black col-start-1 col-end-2 row-start-1 row-end-2 sticky top-0 gap-2">
                    <button onClick={()=>setActiveBtn("mascota")} className={`${activeBtn === "mascota" ? "bg-naranja text-white" : "bg-white text-black"} ${generalBtnClass}`}>Mascotas</button>
                    <button onClick={()=>setActiveBtn("ticket")} className={`${activeBtn === "ticket" ? "bg-naranja text-white" : "bg-white text-black"} ${generalBtnClass}`}>Tickets</button>
                    <button onClick={()=>setActiveBtn("notas")} className={`${activeBtn === "notas" ? "bg-naranja text-white" : "bg-white text-black"} ${generalBtnClass}`}>Notas</button>
                </div>
                {
                    activeBtn === "mascota" ?
                    <div className="flex mt-10 pb-10 items-center justify-center flex-wrap col-start-1 col-end-2 row-start-2 row-end-3 gap-12 sticky bottom-0 overflow-x-auto">
                        {
                            [1,1,1,1].map((data, index)=>(
                                <div className="w-60 h-80 bg-celeste flex justify-around items-center flex-col rounded-xl">
                                    <div className="w-16 h-16 bg-black rounded-full">
                                        <img src="" alt="" className="w-full h-full rounded-full"/>
                                    </div>
                                    <ul className="list-none text-white text-xl">
                                        <li>Nombre de la mascota</li>
                                        <li>Especie</li>
                                        <li>Raza</li>
                                        <li>Edad</li>
                                    </ul>
                                    <button className="bg-white rounded-3xl w-8/12 h-8 text-base font-semibold">Ver su perfil</button>
                                </div>
                            ))
                        }
                    </div>
                    :
                    activeBtn === "ticket" ?
                    <div className="mt-10 col-start-1 col-end-2 row-start-2 row-end-3 sticky bottom-0 overflow-x-auto grid grid-cols-3 grid-rows-[60px_1fr]">
                        <div className="col-start-1 col-end-4 row-start-1 row-end-2 grid grid-cols-[40%_1fr_1fr]">
                            <span className="font-semibold">Título</span>
                            <span className="font-semibold text-center">Fecha</span>
                            <span className="font-semibold text-center">Atendido por</span>
                        </div>
                        <div className=" col-start-1 col-end-4 row-start-2 row-end-3">
                            {[1,2,3,5,6,7,8,8,8,8,8,8].map((data, index)=>(
                                <div key={index} className="grid grid-cols-[40%_1fr_1fr] grid-rows-1 py-5 border-t-[1px] border-black">
                                    <span className="underline">Nombre</span>
                                    <span className="text-center">27/07/2023</span>
                                    <span className="text-center">Nombre admin</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    :
                    <div className="col-start-1 col-end-2 row-start-2 row-end-3 sticky bottom-0 overflow-x-auto gap-1 grid grid-cols-3 grid-rows-[60%_1fr]">
                        <div className="col-start-1 p-3 col-end-4 row-start-1 row-end-2 sticky bottom-0 overflow-x-auto">
                        {
                                [1,2].map((data, index)=>(
                                    <div key={index} className="w-11/12 h-auto bg-naranja flex justify-center items-center p-3 my-5 rounded-xl" >
                                        <div className="w-[30%] flex flex-col justify-center items-center">
                                            <div className="w-16 h-16 bg-black rounded-full mb-3">
                                                <img src="" alt="" className="w-full h-full rounded-full"/>
                                            </div>
                                            <p>Nombre del admin</p>
                                            <p>28/7/2023</p>
                                        </div>
                                        <div className="bg-white rounded-xl p-2 w-[70%] overflow-hiddenflex flex-col felx-wrap" style={{minHeight: "100px"}}>
                                            <p className="break-words">
                                                lorem100
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="col-start-1 col-end-4 row-start-2 row-end-3 bg-black sticky bottom-0 rounded-xl grid grid-cols-[70%_1fr] grid-rows-1">
                            <div className="col-start-1 col-end-2 row-start-1 row-end-2 flex justify-center item p-4">
                                <textarea name="" id="" className="w-[90%] resize-none rounded-xl outline-none p-3"></textarea>
                            </div>
                            <div className="col-start-2 col-end-3 row-start-1 row-end-2 flex justify-center items-center flex-col">
                                <div className="w-16 h-16 bg-naranja rounded-full mb-3">
                                    <img src="" alt="" className="w-full h-full rounded-full"/>
                                </div>
                                <button className="bg-white rounded-3xl m-2 w-8/12 h-8 text-base font-semibold">Publicar Nota</button>
                            </div>
                        </div>
                    </div>
                }
                <div className="flex mb-5 justify-center items-center col-start-2 col-end-3 row-start-1 row-end-3 sticky right-0">
                    <div className="w-10/12 h-full rounded-lg bg-naranja flex justify-center items-center flex-col">
                        <div className="w-full flex justify-center items-center flex-col mb-10">
                            <div className="w-16 h-16 bg-black rounded-full">
                                <img src="" alt="" className="w-full h-full rounded-full"/>
                            </div>
                            <p>Nombre de usuario</p>
                            <p>id: 4165744134</p>
                            <p>Estado: Activo o Baneado</p>
                        </div>
                        <ul className="list-none relative -left-7 mb-5">
                            <li className="font-semibold text-white">Email</li>
                            <li className="font-semibold text-white">Télefono</li>
                            <li className="font-semibold text-white">País</li>
                            <li className="font-semibold text-white">Ciudad</li>
                            <li className="font-semibold text-white">Localidad</li>
                            <li className="font-semibold text-white">Fecha de Registro</li>
                        </ul>
                        <div className="flex flex-col w-full justify-center items-center">
                            <button className="bg-black text-white m-2 rounded-3xl w-8/12 h-8 text-base font-semibold">Bannear Usuario</button>
                            <button className="bg-white rounded-3xl m-2 w-8/12 h-8 text-base font-semibold">Activar Usuario</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default User;