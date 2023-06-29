import { useEffect } from 'react';
import axios from 'axios';

export const useNotificationSender = () => {
    const sendNotification = async (token, title, body) => {
      const notification = {
        to: token,
        title,
        body,
      };

      try {
        await axios.post('https://whopaws-production.up.railway.app/api/send/send-notification', notification);
        console.log('Notificación enviada');
      } catch (error) {
        console.error('Error al enviar la notificación:', error);
      }
    };

    // Devolvemos el método sendNotification para poder utilizarlo desde el componente
    return {
      sendNotification,
    };

};

