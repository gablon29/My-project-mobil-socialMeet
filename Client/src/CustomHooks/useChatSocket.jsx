import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { BACK_URL } from '../config/env';


//SOCKET.IO MAGIC
// Function to get the IP address from a URL
function getIpAddressFromUrl(url) {
  const match = url.match(/^(?:https?:)?\/\/([^:/?#]+)/i);
  return match ? match[1] : null;
}


const useChatSocket = (token) => {
  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState([]);
  const ipAddress = getIpAddressFromUrl(BACK_URL);

  const socket = io.connect(`http://${ipAddress}:8081`, {
    transports: ['websocket'],
    reconnectionAttempts: 15,
    auth: { token }, // Add the token to the 'auth' option
  });

  const sendMessage = (messageData) => {
    typeof x == 'function'
    if (socket) {
      socket.emit('send-message', messageData);
    }
  };

  const onSendMessageButtonPress = (msg) => {
    const messageStruct = {
      type:'string',
      payload: msg || 'Hello, server!',
      destinatarioId: '64a7050999fba3bd0ee78797',
    };

    sendMessage(messageStruct);
  };

  const onConnectSocket = () => {
    if (socket) {
      socket.on('connect', () => {
        socket.emit('i-am-connected');
        setConnected(true);
      });

      socket.on('message-received', (message) => {
        // Handle the received message
        setMessages((prevMessages) => [...prevMessages, message]);
      });
      socket.on('time-msg', (message) => {
        // Handle the received message
        console.log(message);
      });

    }
  };

  // ComponentDidMount equivalent
  useEffect(() => {
    onConnectSocket();
    // ComponentWillUnmount equivalent
    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, []);

  return { connected, messages, onSendMessageButtonPress };
};

export default useChatSocket;
