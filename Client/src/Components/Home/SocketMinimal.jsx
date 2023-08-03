import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import io from 'socket.io-client';
import { BACK_URL } from '../../config/env';

//SOCKET.IO MAGIC
// Function to get the IP address from a URL
function getIpAddressFromUrl(url) {
  const match = url.match(/^(?:https?:)?\/\/([^:/?#]+)/i);
  return match ? match[1] : null;
}

const SOCKET_URL = 'http://192.168.0.12:8081';

const SocketMinimal = () => {
  const [connected, setConnected] = useState(false);
  const ipAddress = getIpAddressFromUrl(BACK_URL);
  const socket = io.connect(`http://${ipAddress}:8081`, {
    transports: ['websocket'],
    reconnectionAttempts: 15,
  });

  const sendMessage = (messageData) => {
    if (socket) {
      socket.emit('send-message', messageData);
    }
  };

  const onSendMessageButtonPress = () => {
    const messageData = {
      content: 'Hello, server!',
      sender: 'John Doe',
    };

    sendMessage(messageData);
  };

  const onConnectSocket = () => {
    if (socket) {
      socket.on('connect', () => {
        socket.emit('i-am-connected');
        setConnected(true);
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

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 20, backgroundColor: 'blue' }}>
      <Text style={{ fontSize: 24 }}>{connected ? 'Connected' : 'Disconnected'}</Text>
      <TouchableOpacity onPress={onSendMessageButtonPress}>
        <View>
          <Text>Enviar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SocketMinimal;
