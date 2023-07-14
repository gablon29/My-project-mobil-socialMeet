const { updatePet, filterByOwner, createPet, petByOwner, deletePetOwner } = require('../controllers/petController');
const { response } = require('../utils');

module.exports = {
  create_pet: async (req, res) => {
    const pet = req.body;
    console.log(req.body);
    const newPet = await createPet(pet, req.user.userId);
    response(res, 200, newPet);
  },

  //logged, user, modifica el PET con lo q le pase por body
  edit_pet: async (req, res) => {
    const newData = req.body;
    console.log(newData);
    const updatedPet = await updatePet(newData, req.body.id, req.user.userId);

    response(res, 200, updatedPet);
  },

  all_my_pets: async (req, res) => {
    const pets = await filterByOwner(req.user.userId);
    response(res, 200, pets);
  },

  my_pet: async (req, res) => {
    const { id } = req.params;
    const { userId } = req.user;
    const pet = await petByOwner(id, userId);
    response(res, 200, pet[0]);
  },

  delete_my_pet: async (req, res) => {
    const { id } = req.query
    const { userId } = req.user;
    const deletedPet = await deletePetOwner(id, userId);
    response(res, 200, deletedPet);
  },
};
