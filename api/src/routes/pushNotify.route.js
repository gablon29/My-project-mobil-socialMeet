const {
  sendNotification,
  saveDeviceToken,
} = require('../controllers/notificationController');
const { response } = require('../utils');
const { ClientError } = require('../utils/errors');


module.exports ={
pushear: async (req, res) => {
  // Declaramos los datos que deben llegar por body
  // Si falta algo lanzamos un error
  const { title, body, token, email } = req.body;
  if (!email || !title || !body || !token)
    throw new ClientError('Faltan datos para notificaciones', 400);
  // Guardamos las solicitudes en el usuario que las recibe
  // await saveNotificationsInDB(title, body, email);
  // Enviamos notificaciones  await sendNotification(token, body, title);
  response(
    res,
    200,
    'Notificación push enviada y datos de notificación guardados en la base de datos'
  );
},

sendear: async (req, res) => {
  const { token, title, body } = req.body;
  // Enviamos la notificación
  await sendNotification(token, title, body);
  response(
    res,
    200,
    'Notificación push enviada correctamente'
  );
},

guardar_token: async (req, res) => {
  const { email, token } = req.body;
  // Guardamos el token de registro en la base de datos del usuario
  await saveDeviceToken(req, res);
  response(
    res,
    200,
    'Token guardado en base de datos'
  );
},
}


