import HeaderAdmin from "../all/HeaderAdmin";
import ButtonCustom from "../all/ButtonCustom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSetError, authSetLoading, setProfessional } from "@/redux/reducer/reducerAuth";
import { setPets } from "@/redux/reducer/reducerUsuarios";
import { getAllPets, getAllProfessions } from "../../../utils/metodos/userMetodos";
import { useParams } from "react-router-dom";
import { useRouter } from "next/router";
import { UserRightPanel } from "../usuarios/UserRightPanel";
import { UserProfesion } from "./userProfPanel";

const User = () => {
    const router = useRouter();
    const { id } = router.query;

    const profesion = useSelector((state) => state.reducerAuth.professions);
   
    const usuarios = useSelector((state) => state.reducerUsuarios.usuarios);

    const [activeBtn, setActiveBtn] = useState("profesión")
    const generalBtnClass = "w-28 rounded-lg h-14 font-bold text-base"

console.log(profesion)
let userProfile = usuarios.filter((ele) => ele.id === id)
let userProfesion = profesion.filter((ele) => ele.id === id)

console.log(userProfesion)
const dispatch = useDispatch()
useEffect(() => {
    getAllProfessions({
        success : (m) => dispatch(setProfessional(m)),
        loading: (v) => console.log(v)
        , error : (c) => console.log(c), 
    })
},[])


    return (
        <div className="grid col-start-1 col-end-2 row-start-1 row-end-3 grid-cols-[256px_1fr] grid-rows-[25vh_75vh] bg-white">
            <div className="grid col-start-1 col-end-3 row-start-1 row-end-2">
                <HeaderAdmin />
            </div>
            <div className="grid ml-10 col-start-1 col-end-3 row-start-2 row-end-3 bg-white grid-rows-[70px_1fr] grid-cols-[65%_35%] relative bottom-2">
                <div className="flex border-b-2 border-black col-start-1 col-end-2 row-start-1 row-end-2 sticky top-0 gap-2">
                    <button onClick={()=>setActiveBtn("profesión")} className={`${activeBtn === "profesión" ? "bg-naranja text-white" : "bg-white text-black"} ${generalBtnClass}`}>Profesión</button>
                </div>
                {
                    activeBtn === "profesión" ?
       <UserProfesion userProfesion={userProfesion}/>
                    :
                    
                    <p>Cargando...</p>
                }
                        {/* <div className="flex mb-5 justify-center items-center col-start-2 col-end-3 row-start-1 row-end-3 sticky right-0">
                       <UserRightPanel userProfile={userProfile}/>
                       
                        </div> */}

                        </div>
        </div>
    );
}
 
export default User;