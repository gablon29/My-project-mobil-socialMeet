import express from 'express'

import user from './user.route'
import pet from './pet.route'
import admin from './admin.route'
import notify from './pushNotify.route'

import chips from '../controllers/chipsController'
import stripeControllers  from '../controllers/stripe'

import notificationController from '../controllers/notificationController'

import { catchedAsync } from '../utils'
import { checkJwt } from '../utils/jwtUtils'
import { limit5cada30minutos } from '../utils/rate-limiters'


const isLoggedIn = checkJwt


const router = express.Router();

// ------------->  NOTIFICTIONS  <-------------
router.post('/api/save-device-token', catchedAsync(notificationController.saveDeviceToken));
router.post('/api/send/push-notify', catchedAsync(notify.pushear));
router.post('/api/send/send-notification', catchedAsync(notify.sendear));
router.post('/api/send/save-device-token', catchedAsync(notify.guardar_token));


// ------------->  USER  <-------------
router.get('/api/user/user', isLoggedIn, catchedAsync(user.get_my_data));
router.get('/api/user/notifications', isLoggedIn, catchedAsync(user.retrieve_notifications));
router.post('/api/user/login', catchedAsync(user.login));
router.post('/api/user/register', catchedAsync(user.register_new));
router.post('/api/user/sendemail',limit5cada30minutos ,catchedAsync(user.send_recover_email));
router.post('/api/user/check-code', catchedAsync(user.check_code));
router.post('/api/user/recovery', catchedAsync(user.recover_my_password));
router.put('/api/user/edit',isLoggedIn, catchedAsync(user.editUser));


// ------------->  PET  <-------------
router.get('/api/pet/byowner', isLoggedIn, catchedAsync(pet.all_my_pets));
router.get('/api/pet/my/:id', isLoggedIn, catchedAsync(pet.my_pet));
router.post('/api/pet/add', isLoggedIn, catchedAsync(pet.create_pet));
router.put('/api/pet/profile', isLoggedIn, catchedAsync(pet.edit_pet));
router.delete('/api/pet/delete', isLoggedIn, catchedAsync(pet.delete_my_pet));


// ------------->  ADMIN  <-------------
router.delete('/api/admin/deletepet', /* isLoggedIn, */ catchedAsync(admin.delete_by_id));
router.get('/api/admin/pets', /* isLoggedIn, */ catchedAsync(admin.list_all_pets));
router.get('/api/admin/users', /* isLoggedIn, */ catchedAsync(admin.list_all_users));
router.get('/api/admin/checkPetsByEmail', /* isLoggedIn, */ catchedAsync(admin.find_all_pets_by_email));

router.get('/api/admin/find', /* isLoggedIn, */ catchedAsync(admin.list_damaged_pets));
router.get('/api/admin/fix', /* isLoggedIn, */ catchedAsync(admin.edit_damaged_pet));

router.get('/api/admin/userban', /* isLoggedIn, */ catchedAsync(admin.list_all_banned_users));
router.put('/api/admin/ban', /* isLoggedIn, */ catchedAsync(admin.ban_user_by_email));
router.put('/api/admin/desbanear', /* isLoggedIn, */ catchedAsync(admin.unban_user_by_email));

router.put('/api/admin/addAmin', /* isLoggedIn, */ catchedAsync(admin.give_admin_powers));
router.put('/api/admin/desAmin', /* isLoggedIn, */ catchedAsync(admin.remove_admin_powers));


// ------------->  STRIPE  <-------------
router.get('/api/stripe/getpubkey',isLoggedIn, catchedAsync(stripeControllers.getApiKey));
router.get('/api/stripe/allproducts',isLoggedIn, catchedAsync(stripeControllers.getAllProducts));
router.get('/api/stripe/product/:productId',isLoggedIn, catchedAsync(stripeControllers.getProductById));
router.post('/api/stripe/start-pay-process',isLoggedIn, catchedAsync(stripeControllers.postStartBuyProcess));
router.post('/stripe/callback', express.raw({ type: 'application/json' }), catchedAsync(stripeControllers.postHandleStripeEvents));


// ------------->  CHIPS  <-------------
router.get('/api/pet-info', catchedAsync(chips.ruta_incorrecta)); //xd
router.get('/api/pet-info/:chipId', catchedAsync(chips.buscar_por_id));
router.put('/api/pet-info', isLoggedIn, catchedAsync(chips.asignar_id_chip_nuevo));



module.exports = router;
