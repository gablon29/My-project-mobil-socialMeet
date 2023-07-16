import { authSetError, authSetLoading } from "@/redux/reducer/reducerAuth";
import { setTickets } from "@/redux/reducer/reducerUsuarios";
import react, {useState, useEffect} from "react"
import { useSelector, useDispatch } from "react-redux";
import { getAllTickets } from "../../../utils/metodos/adminMetodos";

export const Soporte = () => {

    const tickets = useSelector((state) => state.reducerUsuarios.tickets);
const dispatch = useDispatch()
useEffect(() => {
    const allSuport = async () => {
      try {
        await getAllTickets({
          loading: (v) => dispatch(authSetLoading(v)),
          error: (msg) => dispatch(authSetError(msg)),
          success: async (res) => dispatch(setTickets(res)),
        });
      } catch (error) {
        // Manejar el error, si es necesario
      }
    };
  
    allSuport();
  }, [getAllTickets, authSetLoading, authSetError, setTickets, dispatch]);

    return(
        <>
        
        </>
    )
}


