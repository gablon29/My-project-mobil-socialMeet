import express from 'express'

import user from './user.route'
import pet from './pet.route'
import admin from './admin.route'
import notify from './pushNotify.route'
import purchases from './purchases.route'

import chips from '../controllers/chipsController'
// import stripeControllers  from '../controllers/stripe'
import vivaWalletControllers from '../controllers/vivaWallet'
import support from "../routes/support.route"
import professionals from './professionals.route'
import services from './services.route'

import notificationController from '../controllers/notificationController'

import { catchedAsync } from '../utils'
import { checkJwt } from '../utils/jwtUtils'
import { limit5cada30minutos } from '../utils/rate-limiters'


const isLoggedIn = checkJwt


const router = express.Router();

// ------------->  NOTIFICTIONS  <-------------
router.post('/api/save-device-token', catchedAsync(notificationController.saveDeviceToken));
router.post('/api/send/push-notify', catchedAsync(notify.pushear));
router.post('/api/send/send-notification', catchedAsync(notify.sendear)); //enviar notificaciones
	//"title":"hola",
	//"body": "probando",
	//"token": "Zd4nb1N8w_eugGXqG8zLeX",
	//"userId": "64a6164ba52364fa38c73153"
router.post('/api/send/save-device-token', catchedAsync(notify.guardar_token));


// ------------->  USER  <-------------
router.get('/api/user/user', isLoggedIn, catchedAsync(user.get_my_data));
router.get('/api/user/notifications', isLoggedIn, catchedAsync(user.retrieve_notifications));
router.post('/api/user/login', catchedAsync(user.login));
router.post('/api/user/register', catchedAsync(user.register_new));
router.post('/api/user/sendemail',limit5cada30minutos ,catchedAsync(user.send_recover_email));
router.post('/api/user/check-code', catchedAsync(user.check_code));
router.post('/api/user/recovery', catchedAsync(user.recover_my_password));
router.put('/api/user/edit', isLoggedIn, catchedAsync(user.editUser));
router.post('/api/user/saveDeviceToken', isLoggedIn, catchedAsync(user.saveDeviceToken));
router.post('/api/user/save-new-adress', isLoggedIn, catchedAsync(user.saveNewAdress));
router.put('/api/user/delete-adress', isLoggedIn, catchedAsync(user.deleteAdress));


// ------------->  PET  <-------------
router.get('/api/pet/byowner', isLoggedIn, catchedAsync(pet.all_my_pets));
router.get('/api/pet/my/:id', isLoggedIn, catchedAsync(pet.my_pet));
router.post('/api/pet/add', isLoggedIn, catchedAsync(pet.create_pet));
router.put('/api/pet/profile', isLoggedIn, catchedAsync(pet.edit_pet));
router.delete('/api/pet/delete', isLoggedIn, catchedAsync(pet.delete_my_pet));
router.get('/api/pet/with-chip', isLoggedIn, catchedAsync(pet.all_pets_with_chip));


// ------------->  ADMIN  <-------------
router.get('/api/admin/push', /* isLoggedIn, */ catchedAsync(admin.sendOneNotification));
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

router.put('/api/admin/purchases', /* isLoggedIn, */ catchedAsync(admin.allSales));
router.get('/api/admin/getUserById', /* isLoggedIn, */ catchedAsync(admin.get_by_id));


// // ------------->  STRIPE  <-------------
// router.get('/api/stripe/getpubkey',isLoggedIn, catchedAsync(stripeControllers.getApiKey));
// router.get('/api/stripe/allproducts',isLoggedIn, catchedAsync(stripeControllers.getAllProducts));
// router.get('/api/stripe/product/:productId',isLoggedIn, catchedAsync(stripeControllers.getProductById));
// router.post('/api/stripe/start-pay-process',isLoggedIn, catchedAsync(stripeControllers.postStartBuyProcess));
// router.post('/stripe/callback', express.raw({ type: 'application/json' }), catchedAsync(stripeControllers.postHandleStripeEvents));
// router.post('/api/stripe/createProduct', catchedAsync(stripeControllers.createProducts));

// ------------->  VIVA WALLET  <-------------
router.get('/api/viva-wallet/get-api-key',isLoggedIn, catchedAsync(vivaWalletControllers.getApiKey));
router.post('/api/viva-wallet/create-payment',isLoggedIn, catchedAsync(vivaWalletControllers.createPayment));

// ------------->  CHIPS  <-------------
router.get('/api/pet-info', catchedAsync(chips.ruta_incorrecta)); //xd
router.get('/api/pet-info/:chipId', catchedAsync(chips.buscar_por_id));
router.put('/api/pet-info', isLoggedIn, catchedAsync(chips.asignar_id_chip_nuevo));


// ------------->  Compras  <-------------

router.post('/api/new-purchase', isLoggedIn, catchedAsync(purchases.purchase));
router.get('/api/user-purchase', isLoggedIn, catchedAsync(purchases.purchase));
router.get('/api/purchase-data', isLoggedIn, catchedAsync(purchases.getPurchasesById))

//ruta de admin obtener todas las compras
router.get('/api/admin-all-purchases', isLoggedIn, catchedAsync(purchases.getAllPurchase));
router.put('/api/manage-purchase', isLoggedIn, catchedAsync(purchases.sellerMager));


// ------------->  SOPORTE CON EL ADMIN  <-------------
//usuario abre un ticket

router.post('/api/open-ticket', isLoggedIn, catchedAsync(support.sendTicket)); //funcionando
//usuario responde al admin
router.put('/api/resp-ticket', isLoggedIn, catchedAsync(support.ResponderTicket));
//usuario ve todos los tickets mapear en pantalla
router.get('/api/getuser-tickets', isLoggedIn, catchedAsync(support.getAllTicketsUser));
//usuario ve el ticket de el abierto para responder
router.get('/api/specific-ticket', isLoggedIn, catchedAsync(support.openTicket));

//admin
router.get('/api/get-alltickets', isLoggedIn, catchedAsync(support.getAllTicketsAdmin));
router.post('/api/resp-tickets',  catchedAsync(support.respondToTicket));


// ------------->  Professionals  <-------------
router.post('/api/professional/register', isLoggedIn, catchedAsync(professionals.register));
router.put('/api/professional/edit', isLoggedIn, catchedAsync(professionals.editProfessional));
router.get('/api/professional/data', isLoggedIn, catchedAsync(professionals.getProfessionalData));
router.get('/api/professional/all', isLoggedIn, catchedAsync(professionals.getAllProfessionals));
router.put('/api/professional/caracter',isLoggedIn, catchedAsync(professionals.editCaracter))
//----- Date Routes --------
router.post('/api/professional/disponibilidad', isLoggedIn, catchedAsync(professionals.addAvailability));
router.get('/api/professional/disponibilidad/:professionalId/:date', isLoggedIn, catchedAsync(professionals.getAvailability));
router.put('/api/professional/disponibilidad/:professionalId/:date', isLoggedIn, catchedAsync(professionals.editAvailability));
//----- Professions --------
router.get('/api/professional/profession/pending', isLoggedIn, catchedAsync(professionals.getPendingProfessionalsProfession));
router.put('/api/professional/profession/allow', isLoggedIn, catchedAsync(professionals.allowProfessionalProfession));
router.post('/api/professional/profession/add', isLoggedIn, catchedAsync(professionals.registerProfession));
router.put('/api/professional/profession/edit', isLoggedIn, catchedAsync(professionals.editProfession));
router.get('/api/professional/profession/services', isLoggedIn, catchedAsync(professionals.getServices))

//----- Professions --------
router.get('/api/professional/purchases', isLoggedIn, catchedAsync(professionals.getPurchasesProfesional)) //si se le pasa un estado como filter por body también se encarga de hacer el filtrado


// ------------->  Services  <-------------
router.get('/api/service/all', isLoggedIn, catchedAsync(services.all));
router.get('/api/service/byName', isLoggedIn, catchedAsync(services.byName));
router.get('/api/service/byId', isLoggedIn, catchedAsync(services.byId))
router.post('/api/service/add', isLoggedIn, catchedAsync(services.addService));

module.exports = router;
