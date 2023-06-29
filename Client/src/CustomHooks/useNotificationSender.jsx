import { useEffect } from 'react';
import axios from 'axios';

const useNotificationSender = () => {
  useEffect(() => {
    const sendNotification = async (token, title, body) => {
      const notification = {
        to: token,
        title,
        body,
      };

      try {
        await axios.post('https://whopaws-production.up.railway.app/send-notification', notification);
        console.log('Notificación enviada');
      } catch (error) {
        console.error('Error al enviar la notificación:', error);
      }
    };

    // Otros métodos o lógica relacionada con el envío de notificaciones

    // Devolvemos los métodos o valores que deseemos utilizar desde el componente
    return {
      sendNotification,
      // Otros métodos o valores
    };
  }, []);

  // Si no necesitamos devolver ningún valor, podemos simplemente omitir el return
};

export default useNotificationSender;