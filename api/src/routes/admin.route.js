const UserModel = require('../models/user.model');
const PetModel = require('../models/pet.model');
const { response } = require('../utils');
const { ClientError } = require('../utils/errors');
//const { deletePet } = require('../controllers/deletePet.js');

module.exports ={
/* 
delete_by_id: async (req, res) => {
  const deletedPet = await deletePet(req.body.id);
  response(res, 200, deletedPet);
}, */

list_all_pets: async (req, res) => {
  const allPets = await PetModel.find().sort([['created_at', 1]]);
  response(res, 200, allPets);
},

list_all_banned_users: async (req, res) => {
  const allPetsReports = await UserModel.find({ tipo: 'inhabilitado' });
  response(res, 200, allPetsReports);
},
ban_user_by_email: async (req, res) => {
  const { OwenerEmail } = req.body;
  const userABanear = await UserModel.updateOne(
    { email: OwenerEmail },
    { tipo: 'inhabilitado' }
  );
  response(res, 200, userABanear);
},

unban_user_by_email: async (req, res) => {
  const { OwenerEmail } = req.body;
  const userAdesBanear = await UserModel.updateOne(
    { email: OwenerEmail },
    { tipo: 'User' }
  );
  response(res, 200, userAdesBanear);
},

find_all_pets_by_email: async (req, res) => {
  const { OwnerEmail } = req.body;
  const findPets = await PetModel.find({ owner: OwnerEmail });
  if (!findPets) throw new ClientError('No tenemos mascotas con ese email');
  response(res, 200, findPets);
},

give_admin_powers: async (req, res) => {
    const { OwenerEmail } = req.body;
    const checkUser = await UserModel.findOne({
      _email: req.user.email,
      tipo: 'Admin',
    });
    if (!checkUser) throw new ClientError('No eres admin');
      const userAAdmin = await UserModel.updateOne(
        { email: OwenerEmail },
        { tipo: 'Admin' }
      );
      response(res, 200, 'El usuario ahora es admin');
},

remove_admin_powers: async (req, res) => {

    const { OwenerEmail } = req.body;
    const checkUser = await UserModel.findOne({
      _email: req.user.email,
      tipo: 'Admin',
    });
    if (!checkUser) throw new ClientError('No eres admin');
      const userAAdmin = await UserModel.updateOne(
        { email: OwenerEmail },
        { tipo: 'User' }
      );
      response(res, 200, 'El admin ahora es usuario');

},

}
