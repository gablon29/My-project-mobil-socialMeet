const { response } = require('../utils');
const { ClientError } = require('../utils/errors');
const PetModel = require('../models/pet.model');
const UserModel = require('../models/user.model')

// chips es un objeto que contiene funciones asyncronsa, cada clave--->función asincrona
// lo malo de este diseño es que es bueno para typescript, pero es malo para javascript
// porque cuando haces req.  no te aparecen lsa sugerencias entonces tenes q andar adivinando.
const chips = {
    //GET recibe params
  buscar_por_id: async (req, res) => {
    const { chipId } = req.params;
    if (!chipId) throw new ClientError('Faltó enviar el id por params /:chipId', 400);
    const pet = await PetModel.findOne({"chip.id": chipId});
    console.log(pet)
    if (!pet) return response(res, 200, { pet: false, owner: false, message: "el PET id no existe, id recibido: "+ chipId});
    let ownerInfo = {};
    if (pet.owner) ownerInfo = await UserModel.findById(pet.owner );
    response(res, 200, { pet, owner: ownerInfo });
  },
  //PUT recibe body
  asignar_id_chip_nuevo: async (req, res) => {
    const {chipData} = req.body;
const {petId} = chipData

    const pet = await PetModel.findById(chipData.petId);
    if (!pet) {
      throw new ClientError('No se ha encontrado una mascota con esa id', 500);
    }
  
    pet.chip.id = chipData.chipId;
    pet.chip.telefono = chipData.telefono;
    pet.chip.email = chipData.email;
    pet.chip.veterinaria = chipData.veterinaria;
    pet.chip.veterinariaAdress = chipData.veterinariaAdress;
    pet.chip.information = chipData.information;

    await pet.save();
    response(res, 200, { pet });
  }
}

module.exports = chips;
