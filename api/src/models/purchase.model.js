const mongoose = require('mongoose');

const purchaseSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    comprador: {
      type: String,
    },
    vendedor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Professional',
      required: true
    },
    seller: {
        type: String,
        default: "Whopaws"
    },
    producto: {
      type: String,
      required: true,
    },
    idProductStripe: {
        type: String,
        required: true,
      },
    cantidad: {
      type: Number,
    },
    precioTotal: {
      type: Number,
      required: true,
    },
    direccion:{
      type: String,
         required: true,
    },
    ciudad: {
        type: String,
        required: true,
    },
    pais: {
        type: String,
        required: true,
    },
    succesPayment: {
      type: Boolean
    },
    status:{
      type: String,
      enum:["pendiente", "enviado", "entregada"],
      default: "pendiente"
    },
    trackingNumber:{
      type: String,
      default: "Recibira su tracking al enviar su compra"
    },

    stripeOrder: { 
      type: Object
    },

    date: {
      type: Date,
      default: Date
    }

  },
  {
    timestamps: true,
  }
);

const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = Purchase;