const express = require('express');
const {
  updatePet,
  filterByOwner,
  createPet,
} = require('../controllers/petController');
const { checkJwt } = require('../utils/jwtUtils');
const router = express.Router();

//CREAR PET
router.post('/add', checkJwt, async (req, res) => {
  try {
    const { body, user } = req;
    const newPet = await createPet(body, user.userId);
    
    res.status(200).json(/* newPet */ newPet);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//logged, user, modifica el PET con lo q le pase por body
router.put('/profile', checkJwt, async (req, res) => {
  try {
    //prohibir modificar el owner y la history
    const newData = req.body;
    const updatedPet = await updatePet(newData, req.body.id, req.user.id);
    res.send({ message: 'Mascota modificada', payload: updatedPet });
  } catch (err) {
    res.status(501).send(err.message);
  }
});

router.get('/byowner', checkJwt, async (req, res) => {
  //FUNCA: Trae las mascotas del owner
  try {
    const pets = await filterByOwner(req.user.id);
    res.status(200).json({ pets });
    // if (req.user.id) {
    // } else {
    //   const email = req.user.email;

    //   const allPets = await filterByOwner(email);

    //   res.send(allPets);
    // }
  } catch (error) {
    res.status(501).send(error.message);
  }
});

module.exports = router;
