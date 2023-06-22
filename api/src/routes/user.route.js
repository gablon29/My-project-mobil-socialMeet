const express = require('express');
const {
  findUser,
  createNewUser,
  loginUser,
  registerUser
} = require('../controllers/userController');
const { checkJwt } = require('../utils/jwtUtils');
const { limit5cada30minutos } = require('../utils/rate-limiters');

const router = express.Router();


router.get('/user', checkJwt, async (req, res) => {
  try {
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Devuelve la información del usuario
    res.json("funciona");
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

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


router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await loginUser(email, password);
    res.status(200).json(result);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});
router.post('/', checkJwt, async (req, res) => {
  try {
    const newUser = Object.assign(req.body, {
      email: req.user.email,
      email_verified: req.user.email_verified,
    });
    const createdUser = await createNewUser(newUser);
    res.status(200).send(createdUser);
  } catch (error) {
    res.status(501).send({ error: error.message });
  }
});


router.get('/checkemail', limit5cada30minutos, async (req, res) => {
  try {
    const { email } = req.query;
    const user = await findUser(email);
    if (user) res.send({ message: 'checked', payload: true });
    else res.send({ message: 'checked', payload: false });
  } catch (error) {
    res.status(501).send({ error: error.message });
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