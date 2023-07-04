import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Notifications = () => {
  const [notifications, setNotifications] = React.useState([]);
  const authenticatedAuth = useSelector((state) => state.ReducerAuth.authenticatedAuth);
  const profile = useSelector((state) => state.ReducerAuth.profile);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const token = await AsyncStorage.getItem('Token');
        const response = await axios.get(`/api/user/notifications?email=${profile.email}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('DATAAAAA', response.data);
        if (response.error) throw new Error(data.message);
        setNotifications(response.data.payload);

      } catch (error) {
        console.error('Error al obtener las notificaciones:', error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <View>
      <Text>Lista de notificaciones:</Text>
      {console.log('NOTIFICVACION', notifications, profile)}
      {notifications?.map((notification, _idx) => (
        <View key={_idx}>
          <Text>{notification}</Text>
          {/* <Text>{notification.body}</Text> */}
        </View>
      ))}
    </View>
  );
};

export default Notifications;
