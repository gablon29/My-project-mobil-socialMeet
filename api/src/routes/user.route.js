const express = require('express');
const {
  loginUser,
  registerUser
} = require('../controllers/userController');
const { checkJwt } = require('../utils/jwtUtils');
const { limit5cada30minutos } = require('../utils/rate-limiters');
const UserModel = require('../models/user.model');

const router = express.Router();

//Devuelve el usuario con token para reloguearlo si tiene login
router.get('/user', checkJwt, async (req, res) => {
  try {
    const { userId } = req.user; 
    const user = await UserModel.findOne({ _id: userId });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Devuelve la información del usuario
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});
//registro de usuario
router.post('/register', async (req, res) => {
  const {  email,
    password,
    firstName,
    lastName,
    phone,
    country,
    province,
    city,
    zipcode,
    address} = req.body;

  try {
    const result = await registerUser( email,
      password,
      firstName,
      lastName,
      phone,
      country,
      province,
      city,
      zipcode,
      address);
    res.status(200).json(result);
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: error.message });
  }
});

//login de usuario
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await loginUser(email, password);
    res.status(200).json(result);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});


// router.put('/profile', checkJwt, async (req, res) => {
//   try {
//     const newUserData = req.body;
//     const updatedUser = await updateUser(newUserData, req.user.email);
//     res.status(200).send({ message: 'usuario editado', payload: updatedUser });
//   } catch (err) {
//     res.status(501).send({ error: err.message });
//   }
// });

module.exports = router;