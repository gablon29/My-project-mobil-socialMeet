const express = require('express');
const router = express.Router();
const axios = require('axios');
const {  sendNotification,
    saveDeviceToken, } = require('../controllers/notificationController');

router.post("/push-notify", async (req, res) => {
  try {
    // Declaramos los datos que deben llegar por body
    // Si falta algo lanzamos un error
    const { title, body, token, email } = req.body;
    if (!email || !title || !body || !token) {
      throw new Error("Faltan datos requeridos para enviar la notificación");
    }
    // Guardamos las solicitudes en el usuario que las recibe
    // await saveNotificationsInDB(title, body, email);
    // Enviamos notificaciones  await sendNotification(token, body, title);

    res.status(200).json({ message: "Notificación push enviada y datos de notificación guardados en la base de datos" });
  } catch (error) {
    res.status(400).json({ error: "Error al enviar la notificación push: " + error.message });
  }
});

router.post('/send-notification', async (req, res) => {
  const { token, title, body } = req.body;
  try {
    // Enviamos la notificación
    await sendNotification(token, title, body);
    res.status(200).json({ message: 'Notificación enviada correctamente' });
  } catch (error) {
    res.status(400).json({ error: 'Error al enviar la notificación: ' + error.message });
  }
});

router.post('/save-device-token', async (req, res) => {
  const { email, token } = req.body;
  try {
    // Guardamos el token de registro en la base de datos del usuario
    await saveDeviceToken(email, token);
    res.status(200).json({ message: 'Token de registro guardado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar el token de registro' });
  }
});

module.exports = router;