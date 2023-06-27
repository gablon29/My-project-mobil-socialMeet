const express = require('express');
//agregar mas importaciones de ruta aca:
const userRoute = require('./user.route');
const petRoute = require('./pet.route');
const pushNotify = require('./pushNotify.route');
const stripeBuyCheckoutRoute = require('./stripeBuyCheckout.route');
const { route } = require('./user.route');

const router = express.Router();
//agregar middleware de rutas aca:
router.use('/api/user', userRoute);
router.use('/api/pet', petRoute);
router.use('/api/send', pushNotify);
router.use('/api/stripe-buy-checkout', stripeBuyCheckoutRoute);

module.exports = router;
