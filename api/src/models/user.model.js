const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON /* , paginate */ } = require('./plugins');
const { ClientError } = require('../utils/errors');
const SupportTicket = require("./supportTicket.model")
const userSchema = mongoose.Schema(
  {
    userType: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    firstName: {
      type: String,
      required: true,

      minlength: 1,
      maxlength: 30,
    },
    lastName: {
      type: String,
      required: true,

      minlength: 1,
      maxlength: 30,
    },
    email: {
      type: String,
      required: true,
      // unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new ClientError('Email no valido.', 400);
        }
      },
    },
    email_verified: {
      type: Boolean,
    },
    latest_email_verification_code: {
      type: String,
    },
    password: {
      type: String,
    },
    phone: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
     
    },
    pets: {
      type: Array, //ids de mascotas
      default: [],
    },
    pushToken: {
      type: Array, // Token de verificacion para notificaciones push
      default: [],
    },
    Notifications: {
      type: Array,
      default: [],
    },
    deviceTokens: [
      {
        type: String,
      },
    ],
    country: {
      type: String,
      default: 'España',
    },
    province: {
      type: String,
    },
    zipcode: {
      type: String,
    },
    stripe:{
      customer: {type: String},
      creditCardTokens: [{type:String}]

    },
    
    wallet: {
      type: Number
    },

    shippingaddresss: {
      address: { city: String, country: String, line1: String, line2: String, postal_code: String, state: String },
      tracking_number : { type: String },
      name: { type: String },
      phone: { type: String },
    },

    purchases:{
      default: {}
    },
    
    addresses:{
      type: Array,
      default: [],
    },
    tokens: [
      {
        token: {
          type: String,
        },
      },
    ],
    supportTickets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SupportTicket' }],

  },
  {
    timestamps: {
      createdAt: 'created_at', // Use `created_at` to store the created date
      updatedAt: 'updated_at', // and `updated_at` to store the last updated date
    },
  }
);
//userSchema.index({Location: '2dsphere' });

userSchema.plugin(toJSON);
//userSchema.plugin(paginate);

userSchema.statics.isEmailTaken = async function (email, excludeUserId) {
  const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
  return !!user;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
