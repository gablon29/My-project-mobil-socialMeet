const express = require('express');
//agregar mas importaciones de ruta aca:
const user = require('./user.route');
const pet = require('./pet.route');
const admin = require('./admin.route')
const notify = require('./pushNotify.route');
const stripe = require('./stripe.route');

const { limit5cada30minutos } = require('../utils/rate-limiters');
const notificationController = require('../controllers/notificationController');

const { catchedAsync } = require('../utils');
const { checkJwt } = require('../utils/jwtUtils');
const isLoggedIn = checkJwt


const router = express.Router();
//notifications
router.post('/save-device-token', catchedAsync(notificationController.saveDeviceToken));
router.post('/send/push-notify', catchedAsync(notify.pushear));
router.post('/send/send-notification', catchedAsync(notify.sendear));
router.post('/send/save-device-token', catchedAsync(notify.guardar_token));


//user GET?   Tiene q estar logeado?==checkJwt    siempre abrazarlo con catchedAsync
router.get('/api/user/user', isLoggedIn, catchedAsync(user.get_my_data));
router.get('/api/user/notifications', isLoggedIn, catchedAsync(user.retrieve_notifications));
//login not required in those:
router.post('/api/user/login', catchedAsync(user.login));
router.post('/api/user/register', catchedAsync(user.register_new));
router.post('/api/user/recovery', catchedAsync(user.recover_my_password));

//pet handling
router.get('/api/pet/byowner', isLoggedIn, catchedAsync(pet.all_my_pets));
router.post('/api/pet/add', isLoggedIn, catchedAsync(pet.create_pet));
router.put('/api/pet/profile', isLoggedIn, catchedAsync(pet.edit_pet));


// admin routes
router.delete('/api/admin/deletePet', isLoggedIn, catchedAsync(admin.delete_by_id));
router.get('/api/admin/getAllPets', isLoggedIn, catchedAsync(admin.list_all_pets));
router.get('/api/admin/userban', isLoggedIn, catchedAsync(admin.list_all_banned_users));
router.put('/api/admin/ban', isLoggedIn, catchedAsync(admin.ban_user_by_email));
router.put('/api/admin/desbanear', isLoggedIn, catchedAsync(admin.unban_user_by_email));
router.get('/api/admin/checkPetsByEmail', isLoggedIn, catchedAsync(admin.find_all_pets_by_email));
router.put('/api/admin/desAmin', isLoggedIn, catchedAsync(admin.give_admin_powers));
router.put('/api/admin/desAmin', isLoggedIn, catchedAsync(admin.remove_admin_powers));


//stripe
router.use('/stripe/start-pay-process', catchedAsync(stripe.iniciar_proceso_de_compra));
router.use('/stripe/callback', express.raw({ type: 'application/json' }),
  catchedAsync(stripe.ruta_donde_recibiremos_eventos));

module.exports = router;
