import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTickets, sendAnswer } from "../../../utils/metodos/adminMetodos";
import { authSetError, authSetLoading } from "@/redux/reducer/reducerAuth";
import { setTickets } from "@/redux/reducer/reducerUsuarios";
import HeaderAdmin from "../all/HeaderAdmin";
import { FilterAndSearch } from "../all/FilterAndSearch";

export const Soporte = () => {
  const tickets = useSelector((state) => state.reducerUsuarios.tickets);
  const dispatch = useDispatch();
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [newMessage, setNewMessage] = useState("");

  const handleTicketClick = (ticket) => {
    setSelectedTicket(ticket);
  };

  console.log(tickets);

  const handleSendMessage = async () => {
    try {
      await sendAnswer({
        ticketId: selectedTicket._id,
        message: newMessage,
        loading: (isLoading) => dispatch(authSetLoading(isLoading)),
        error: (err) => dispatch(authSetError(err)),
        success: async (res) => {
          await getAllTickets({
            loading: (v) => dispatch(authSetLoading(v)),
            error: (msg) => dispatch(authSetError(msg)),
            success: (res) => dispatch(setTickets(res)),
          });
        },
      });
      setNewMessage("");
    } catch (error) {
      dispatch(authSetError(error.message));
    }
  };

  return (
    <div className="col-start-1 col-end-3 row-start-1 row-end-3 bg-white grid grid-cols-3 grid-rows-[32%_68%]">
      <div className="col-start-1 col-end-4 row-start-1 row-end-2">
        <HeaderAdmin />
        <FilterAndSearch 
          placeholder={"Buscar por remitente..."}
        />
      </div>
      <div className="grid grid-cols-2 grid-rows-1 col-start-1 col-end-4 row-start-2 row-end-3 sticky bottom-0 overflow-x-auto">
        <div className="col-start-1 col-end-2 row-start-2 grid grid-cols-1 sticky top-0 overflow-x-auto">
          {tickets?.map((ticket) => (
            <div
              key={ticket._id}
              className={`p-4 cursor-pointer ${
                selectedTicket && selectedTicket?._id === ticket?._id
                  ? "bg-gray-300"
                  : ""
              }`}
              onClick={() => handleTicketClick(ticket)}
            >
              <h3 className="text-xl font-bold">{ticket.subject}</h3>
              <p>{ticket?.messages && ticket.messages.length > 0 ? ticket.messages[ticket.messages.length - 1]?.text : ''}</p>
            </div>
          ))}
        </div>
        {selectedTicket && (
          <div className="col-start-2 col-end-3 row-start-1 row-end-2 p-3">
            <h3 className="text-2xl font-bold mb-4">
              Selected Ticket: {selectedTicket.subject}
            </h3>
            <div className="space-y-4">
              {selectedTicket?.messages?.map((message) => (
                <div key={message?._id} className="bg-white p-4 rounded-md">
                  <p>{message?.text}</p>
                </div>
              ))}
            </div>
            <textarea
              className="w-full h-20 p-2 border border-gray-300 rounded-md mt-4 resize-none outline-none"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
            ></textarea>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md mt-4"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        )}
      </div>
    </div>
  );
};