const UserModel = require('../models/user.model');
const ProfessionalModel = require('../models/professionals.model');
const { response } = require('../utils');
const { ClientError } = require('../utils/errors');
//const { deletePet } = require('../controllers/deletePet.js');
const Purchase = require('../models/purchase.model');

module.exports = {
  purchase: async (req, res) => {
    const userId = req.user.userId;
    const { comprador, seller, producto, idProductStripe, cantidad, precioTotal, direccion, ciudad, pais, succesPayment } = req.body;
    const userExists = await UserModel.findById(userId);
    if (!userExists) {
      return response(res, 404, 'Usuario no encontrado');
    }
    const newPurchase = new Purchase({
      user: userId,
      comprador,
      seller,
      producto,
      idProductStripe,
      cantidad,
      precioTotal,
      direccion,
      ciudad,
      pais,
      succesPayment,
    });

    const savedPurchase = await newPurchase.save();

    // Agregar la compra al usuario
   let compradorModel = await UserModel.findById(user)
   comprador.purchases.push(savedPurchase._id)
   comprador.wallet.retenido += Number(precioTotal)

await compradorModel.save()
    await ProfessionalModel.findByIdAndUpdate(professional, {
      $push: { purchases: savedPurchase._id },
    });

    return response(res, 201, savedPurchase);
  },
  getPurchases: async (req, res) => {
    const userId = req.user.userId;

    const userExists = await UserModel.findById(userId);
    if (!userExists) {
      return response(res, 404, 'Usuario no encontrado');
    }

    const purchases = await Purchase.find({ user: userId });

    return response(res, 200, purchases);
  },
  getPurchasesById: async (req, res) => {
    const purchaseId = req.body;

    const purchase = await Purchase.findById(purchaseId);
    if (!purchase) {
      return response(res, 404, 'Compra no encontrada');
    }

    return response(res, 200, purchase);
  },
  getAllPurchase: async (req, res) => {
    //admin falta validacion
    const purchases = await Purchase.find();

    return response(res, 200, purchases);
  },

  sellerMager: async (req, res) => {
    const purchaseId = req.params.purchaseId;
    const { comprador, seller, producto, idProductStripe, cantidad, precioTotal, direccion, ciudad, pais, succesPayment, status, trackingNumber } = req.body;

    const updates = {
      comprador,
      seller,
      producto,
      idProductStripe,
      cantidad,
      precioTotal,
      direccion,
      ciudad,
      pais,
      succesPayment,
      status,
      trackingNumber,
    };
    const purchase = await Purchase.findByIdAndUpdate(purchaseId, updates, { new: true });
  
    if (!purchase) return response(res, 404, 'Compra no encontrada');
    return response(res, 200, purchase);
  },
};
