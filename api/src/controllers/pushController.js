const { findUser, updateUserNotifications } = require('../controllers/userController');
const axios = require('axios');

const sendNotifications = async (token, body, title) => {
 
    //  El array de tokens es mapeado
    //  a cada token le asignamos un titulo y una descripcion
    //  y guardamos todo como un array de objetos en Notifications
    const Notifications = await token.map(eachToken => {
  
      if (eachToken) {
        let currentNotificationMessage = {
          to: eachToken,
          title,
          body,
        }
  
        const response = axios.post("https://exp.host/--/api/v2/push/send", currentNotificationMessage, {
          headers: {
            'host': 'exp.host',
            'accept': 'application/json',
            'accept-encoding': 'gzip, deflate',
            'content-type': 'application/json'
          }
        });
        if(response.error) throw new Error(data.message);
        return response.payload;
      }
  
      // return response;
    })
    const sentNotifications = await Promise.all(Notifications);

}
// Guardamos las solicitudes en el user que las recibe
const saveNotificationsInDB = async (title, body, email) => {
    let currentNotificationData = [{ title, body }]
    const oldUserData = await findUser(email)
      // console.log("oldUser: ", oldUserData);
      //las ultimas notificaciones se guardan primero para tenerlas arriba de todo en la lista de notificaciones
      const newUserData = [...currentNotificationData, ...oldUserData.Notifications];
      const updatedUserData = await updateUserNotifications(newUserData, email)

}



module.exports={
  sendNotifications, 
  saveNotificationsInDB
}