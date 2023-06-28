const express = require('express');
const {
	handl
} = require('../controllers/userController');
const { checkJwt } = require('../utils/jwtUtils');
const { limit5cada30minutos } = require('../utils/rate-limiters');
const UserModel = require('../models/user.model');
const { processPurchase, stripeCallback } = require('../controllers/stripeController');

const router = express.Router();


router.post('/start-pay-process', async (req, res) => {
	console.table(req.headers,req.body);
	return await processPurchase(req, res)
})

router.use("/callback", express.raw({type: 'application/json'}));
router.post("/callback", async (req, res) => {
	return await stripeCallback(req, res)
})

module.exports = router;