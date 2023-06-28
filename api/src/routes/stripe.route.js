const express = require('express');
const {
	handl
} = require('../controllers/userController');
const { checkJwt } = require('../utils/jwtUtils');
const { limit5cada30minutos } = require('../utils/rate-limiters');
const UserModel = require('../models/user.model');
const { processPurchase, stripeCallback } = require('../controllers/stripeController');

const router = express.Router();


router.post('/donate', async (req, res) => {
	return await processPurchase(req, res)
})

app.use("/callback", express.raw({ type: "*/*" }));
app.post("/callback", async (req, res) => {
	return await stripeCallback(req, res)
})

module.exports = router;