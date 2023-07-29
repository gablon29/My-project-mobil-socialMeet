import Chat from "../models/chatSchema";
import { ClientError } from "../utils/errors";

export const sendSocketMessage = async (userId, messageStruct) => { 
  const { type, payload, destinatarioId } = messageStruct;
  if(!type||!payload||!destinatarioId) throw new ClientError("Debe enviar {type,payload,destinatarioId} ",400)
  const filter = {
    $or: [
      { 'user1.id': userId, 'user2.id': destinatarioId },
      { 'user2.id': destinatarioId, 'user1.id': userId },
    ],
  };

  if (typeof type === 'string' && payload == '') return null;

  const update = {
    $push: {
      messages: {
        type: type || 'string',
        payload: payload || '',
        sender: userId,
        timestamp: new Date(),
      },
    },
  };

  const options = {
    upsert: true,
    new: true, // Return the modified document after update
  };

  const result_data = await Chat.findOneAndUpdate(filter, update, options);

  return result_data;
};
