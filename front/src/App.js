import "./App.css";
import { Route, Switch } from "react-router";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { buscar_chipId } from "./utils/axiosHandlers";
import { RegisterChip } from "./Components/RegisterChip/RegisterChip";

axios.defaults.baseURL = "https://whopaws-production.up.railway.app";

function App() {
  const location = useLocation();
  const [pet, setPet] = useState();
  const [owner, setOwner] = useState();
  const { chipId } = useParams();
  const [newChip, setNewChip] = useState()
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
    setNewChip(chipId)
  }, [chipId]);

  return (
    <>
    {owner && pet ? 
    <p>mostrar componente que renderice la informacion de la mascota</p>
 :
      <RegisterChip chipId={chipId}/>

    }
    </>
  );
}

export default App;