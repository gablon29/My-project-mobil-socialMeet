const {
  updatePet,
  filterByOwner,
  createPet,
} = require('../controllers/petController');
const {response} = require("../utils") 

module.exports = {

create_pet: async (req, res) => {
    const PetData = req.body;
    const newPet = await createPet(PetData, req.user.id);
    response(res,200,/* newPet */PetData);
},

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


