const { findUser, updateUserNotifications } = require('../controllers/userController');
const axios = require('axios');
const { ClientError } = require('../utils/errors');
import UserModel from "../models/user.model"

const sendNotifications = async (tokens, body, title, userId) => {
  const notifications = tokens.map((token) => {
    return {
      to: token,
      title,
      body,
    };
  });
let arrayDeTokens = tokens
  try {
    const responses = await Promise.all(
      notifications.map((notification) => {
        return axios.post("https://exp.host/--/api/v2/push/send", notification, {
          headers: {
            'host': 'exp.host',
            'accept': 'application/json',
            'accept-encoding': 'gzip, deflate',
            'content-type': 'application/json',
          },
        });
      })
    );

    const sentNotifications = responses.map((response) => {
      if (response.error) {
        throw new Error(response.data.message);
      }
      return response.data.payload;
    });

    await saveNotificationsInDB(title, body, userId);

    return sentNotifications;
  } catch (error) {
    // Manejar el error de la primera función (sendNotifications)
    console.log(error);
    throw error;
  }
};

const saveNotificationsInDB = async (title, body, userId) => {
  const user = await UserModel.findById(userId)

  let notificacion = {
    asunto: title,
    cuerpo: body
  }
  if (user) {
    // Usuario encontrado en el modelo
    user.Notifications.push(notificacion)
    user.save()
    // Resto del código para actualizar las notificaciones del usuario
  } else {
    // Usuario no encontrado en el modelo
    // Puedes manejar el caso de usuario no encontrado según tus necesidades
    throw ClientError("El usuario no existe", 400)
  }
};



module.exports={
  sendNotifications, 
  saveNotificationsInDB
}