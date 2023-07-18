import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTickets, sendAnswer } from "../../../utils/metodos/adminMetodos";
import { authSetError, authSetLoading } from "@/redux/reducer/reducerAuth";
import { setTickets } from "@/redux/reducer/reducerUsuarios";

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
    <>
      <div className="flex-1 bg-gray-200 p-4">
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
        <div className="flex-1 bg-gray-100 p-4">
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
            className="w-full h-20 p-2 border border-gray-300 rounded-md mt-4"
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
    </>
  );
};