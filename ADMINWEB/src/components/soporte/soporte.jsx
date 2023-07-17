import { authSetError, authSetLoading } from "@/redux/reducer/reducerAuth";
import { setTickets } from "@/redux/reducer/reducerUsuarios";
import react, {useState, useEffect} from "react"
import { useSelector, useDispatch } from "react-redux";
import { getAllTickets } from "../../../utils/metodos/adminMetodos";

export const Soporte = () => {

    const tickets = useSelector((state) => state.reducerUsuarios.tickets);
const dispatch = useDispatch()
const [getTickets, setGetTickets] = useState(false)
useEffect(() => {
    if(!getTickets){
         getAllTickets({
          loading: (v) => dispatch(authSetLoading(v)),
          error: (msg) => dispatch(authSetError(msg)),
          success: async (res) =>  res.length && dispatch(setTickets(res), setGetTickets(true)),
        });
      }
  }, []);

    return(
        <>
        
        </>
    )
}


