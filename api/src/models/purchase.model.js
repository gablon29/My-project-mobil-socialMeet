const mongoose = require('mongoose');

const purchaseSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    seller: {
        type: "String",
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
      required: true,
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
    }


  },
  {
    timestamps: true,
  }
);

const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = Purchase;