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
const chips = require('../controllers/chipsController');
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

router.post('/api/user/sendemail', catchedAsync(user.send_recover_email));
router.post('/api/user/check-code', catchedAsync(user.check_code));
router.post('/api/user/recovery', catchedAsync(user.recover_my_password));


//pet handling
router.get('/api/pet/byowner', isLoggedIn, catchedAsync(pet.all_my_pets));
router.get('/api/pet/my/:id', isLoggedIn, catchedAsync(pet.my_pet));
router.post('/api/pet/add', isLoggedIn, catchedAsync(pet.create_pet));
router.put('/api/pet/profile', isLoggedIn, catchedAsync(pet.edit_pet));
router.delete('/api/pet/delete', isLoggedIn, catchedAsync(pet.delete_my_pet));


// admin routes
router.delete('/api/admin/deletepet', /* isLoggedIn, */ catchedAsync(admin.delete_by_id));
router.get('/api/admin/pets', /* isLoggedIn, */ catchedAsync(admin.list_all_pets));
router.get('/api/admin/users', /* isLoggedIn, */ catchedAsync(admin.list_all_users));

router.get('/api/admin/find', /* isLoggedIn, */ catchedAsync(admin.list_damaged_pets));
router.get('/api/admin/fix', /* isLoggedIn, */ catchedAsync(admin.edit_damaged_pet));

router.get('/api/admin/userban', /* isLoggedIn, */ catchedAsync(admin.list_all_banned_users));
router.put('/api/admin/ban', /* isLoggedIn, */ catchedAsync(admin.ban_user_by_email));
router.put('/api/admin/desbanear', /* isLoggedIn, */ catchedAsync(admin.unban_user_by_email));
router.get('/api/admin/checkPetsByEmail', /* isLoggedIn, */ catchedAsync(admin.find_all_pets_by_email));
router.put('/api/admin/addAmin', /* isLoggedIn, */ catchedAsync(admin.give_admin_powers));
router.put('/api/admin/desAmin', /* isLoggedIn, */ catchedAsync(admin.remove_admin_powers));


//stripe
router.post('/api/stripe/save-credit-card',isLoggedIn, catchedAsync(stripe.save_credit_card_token));
router.get('/api/stripe/getpubkey',isLoggedIn, catchedAsync(stripe.get_pub_jey));
router.post('/api/stripe/start-pay-process',isLoggedIn, catchedAsync(stripe.iniciar_proceso_de_compra));
router.post('/stripe/callback', express.raw({ type: 'application/json' }), catchedAsync(stripe.ruta_donde_recibiremos_eventos));


// CHIPS
router.get('/api/pet-info', catchedAsync(chips.ruta_incorrecta));
router.get('/api/pet-info/:chipId', catchedAsync(chips.buscar_por_id));

router.put('/api/pet-info', isLoggedIn, catchedAsync(chips.asignar_id_chip_nuevo));

/* Explicón------------------------

  catchedAsync(argumento) espera que "argumento" sea una funcion asyncrona que tome (req, res).
  ¿Para qué? porque, al pasar a través de es función, le pone un .catch automaticamente y maneja el error.
  
*/


module.exports = router;
