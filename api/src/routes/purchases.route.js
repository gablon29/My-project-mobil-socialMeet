const UserModel = require('../models/user.model');
const PetModel = require('../models/pet.model');
const { response } = require('../utils');
const { ClientError } = require('../utils/errors');
//const { deletePet } = require('../controllers/deletePet.js');
const Purchase = require('../models/purchase.model');

module.exports ={


purchase:  async (req, res) => {
      const {
        user,
        seller,
        producto,
        idProductStripe,
        cantidad,
        precioTotal,
        direccion,
        ciudad,
        pais
      } = req.body;
  
      const newPurchase = new Purchase({
        user,
        seller,
        producto,
        idProductStripe,
        cantidad,
        precioTotal,
        direccion,
        ciudad,
        pais
      });
  
      const savedPurchase = await newPurchase.save();
      res.status(201).json(savedPurchase);
   
  },
    }
