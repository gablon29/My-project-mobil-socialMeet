import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RenderMascota } from "./RenderMascota";
import { RegisterMascota } from "./CheckChipId";

import { buscar_chipId, checkear_si_esta_logeado } from "../../utils/axiosHandlers";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { log } from "react-modal/lib/helpers/ariaAppHider";



export const Mascota = ({set_quiere_logearse}) => {
  const history =useHistory()

  const { chipId } = useParams();
  const [mascota, setMascota] = useState(null)
  const [owner, setOwner] = useState(null)
  const [loading, setLoading] = useState(true)
 
  set_quiere_logearse(false)
  const [needRegisterChip, setNeedRegisterChip] = useState(false)


  const obtenerMascota = async () => {
    const payload = await buscar_chipId(chipId)
    setLoading(false)

    if(payload.pet && payload.owner){
      setMascota(payload.pet)
      setOwner(payload.owner) 
    }else{
      await checkear_si_esta_logeado().catch(()=>{
        setNeedRegisterChip(true)
      })
    }
  };

  useEffect(() => {
    setLoading(true) 
    //con lo siguiente logre reducit el numero de peticiones  a 2 en lugar de 4 o a lo mejor me estoy imaginando cosas son las 3 am
    if(!loading) //porq sino hace 4 peticiones porq el componente se monta 4 veces siempre, siempre fue asi react.
    obtenerMascota().catch((err) => {
      console.log(err.message)
      setLoading(false)
    },[])
  }, []);

  useEffect(() => {
    obtenerMascota()
  }, [chipId])

  return (
    <>
      {!mascota && !owner &&<RegisterMascota set_quiere_logearse={set_quiere_logearse} chipId={chipId} />}
     
      {mascota && owner &&  <RenderMascota mascota={mascota} owner={owner} />}
    </>
  );
};
