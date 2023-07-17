import { authSetError, authSetLoading } from "@/redux/reducer/reducerAuth";
import { setTickets } from "@/redux/reducer/reducerUsuarios";
import react, {useState, useEffect} from "react"
import { useSelector, useDispatch } from "react-redux";
import { getAllTickets } from "../../../utils/metodos/adminMetodos";

export const Soporte = () => {

    const tickets = useSelector((state) => state.reducerUsuarios.tickets);
const dispatch = useDispatch()
const [getTickets, setGetTickets] = useState(false)



console.log(tickets)
    return(
        <>
        
        </>
    )
}


