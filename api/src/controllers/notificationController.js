const admin = require('firebase-admin');
const User = require('../models/user.model');

const sendNotification = async (token, title, body) => {
  const message = {
    notification: {
      title,
      body,
    },
    token,
  };

  try {
    const response = await admin.messaging().send(message);
    console.log('Notificación enviada:', response);
    const user = await User.findOne({ deviceTokens: token });

    if (user) {
      user.Notifications.push({
        title,
        body,
        createdAt: new Date(),
      });

      await user.save();
    }
  } catch (error) {
    console.log('Error al enviar la notificación:', error);
  }
};

const saveDeviceToken = async (req, res) => {
  const { email, token } = req.body;

  try {
    // Buscar al usuario por su correo electrónico
    const user = await User.findOne({ email });

    if (user) {
      // Actualizar los tokens de registro del usuario
      user.deviceTokens.push(token);
      await user.save();

      res.status(200).json({ message: 'Token de registro guardado correctamente' });
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar el token de registro' });
  }
};
module.exports = {
  sendNotification,
  saveDeviceToken,
};