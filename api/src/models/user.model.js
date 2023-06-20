const mongoose = require('mongoose');
const validator = require('validator')
const { toJSON/* , paginate */ } = require('./plugins');
const userSchema = mongoose.Schema(
  {
    userType: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user'
    },
    firstName: {
      type: String,
      required: true,
      
      minlength: 1,
      maxlength: 30
    },
    lastName: {
      type: String,
      required: true,
      
      minlength: 1,
      maxlength: 30
    },
    email: {
      type: String,
      required: true,
      // unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Invalid email');
        }
      },
    },
    email_verified: {
      type: Boolean
    },
    password: {
      type: String
    },
    phone: {
      type: String,
      required: true,

    },
    profilePic: {
      type: String,
      default: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
      validate(value) {
        if (!value.match(/^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/)) {
          throw new Error('image must be correct and complete url direction');
        }
      },
    },
    pets: {
      type: Array, //ids de mascotas
      default: [] 
    },
    pushToken: {
      type: Array, // Token de verificacion para notificaciones push
      default: []
    },
    Notifications: {
      type: Array, // Array de notificaciones que llegan al usuario
      default: []
    },
    tokens: [
      {
        token: {
          type: String,
        },
      },
    ],
    country:{
      type: String,
      default: "España"
    },
    province:{
      type: String,
    },
    city:{
      type: String,

    },
    zipcode:{
      type: String,
    },
    address: {
      type: String,
      default: "Sin direccion especificada"
    },
    tokens: [
      {
         token: {
            type: String,
         },
      },
   ],
  },
  {
    timestamps: {
      createdAt: 'created_at', // Use `created_at` to store the created date
      updatedAt: 'updated_at' // and `updated_at` to store the last updated date
    }
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
