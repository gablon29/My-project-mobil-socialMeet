import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const Notifications = () => {
  const [notifications, setNotifications] = React.useState([]);

  useEffect(() => {
    // Aquí puedes realizar la lógica para obtener las notificaciones desde tu servidor o base de datos
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('http://localhost:3000/notifications');
        setNotifications(response.data.notifications);
      } catch (error) {
        console.error('Error al obtener las notificaciones:', error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <View>
      <Text>Lista de notificaciones:</Text>
      {notifications.map((notification) => (
        <View key={notification.id}>
          <Text>{notification.title}</Text>
          <Text>{notification.body}</Text>
        </View>
      ))}
    </View>
  );
};

export default Notifications;