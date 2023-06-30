const {
  updatePet,
  filterByOwner,
  createPet,
} = require('../controllers/petController');
const {response} = require("../utils") 

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
edit_pet: async (req, res) => {
    const newData = req.body;
    const updatedPet = await updatePet(newData, req.body.id, req.user.id);
    response(res,200,updatedPet);
},

all_my_pets: async (req, res) => {
    const pets = await filterByOwner(req.user.id);
    response(res,200,pets);
},

}


