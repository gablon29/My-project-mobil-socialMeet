import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Notifications = () => {
  const [notifications, setNotifications] = React.useState([]);
  const authenticatedAuth = useSelector(
    (state) => state.ReducerAuth.authenticatedAuth
  );
  const profile = useSelector((state) => state.ReducerAuth.profile);
  console.log(profile.email)

 
useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(
          `https://whopaws-production.up.railway.app/api/user/notifications?email=${profile.email}`
        );
        if(response.error) throw new Error(data.message);
        console.log(response.data)
        setNotifications(response.data.payload.notifications);
      } catch (error) {
        console.error('Error al obtener las notificaciones:', error);
      }
    };
  
    fetchNotifications();
  }, []);

  return (
    <View>
      <Text>Lista de notificaciones:</Text>
      {notifications?.map((notification) => (
        <View key={notification.id}>
          <Text>{notification.title}</Text>
          <Text>{notification.body}</Text>
        </View>
      ))}
    </View>
  );
};

export default Notifications;
