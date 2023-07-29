import mongoose from 'mongoose'
import { toJSON } from './plugins';

const chatSchema = new mongoose.Schema({
  user1: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to your User model for the first user
      required: true,
    },
    socketId: {
      type: String,
    },
  },
  user2: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to your User model for the first user
      required: true,
    },
    socketId: {
      type: String,
    },
  },

  messages: [
    {
      type: {
        String,
        enum: ['string', 'object','number','boolean','function'],
        default: 'string'
      },
      payload: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
      sender: {
        type: String,
        required: true,
      },
      timestamp: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});
chatSchema.plugin(toJSON);
//petSchema.plugin(paginate);

const Chat = mongoose.model('Chat', chatSchema);

export default Chat;
