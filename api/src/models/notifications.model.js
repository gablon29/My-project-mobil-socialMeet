const mongoose = require('mongoose');
const { toJSON /* , paginate */ } = require('./plugins');
const notificationSchema = mongoose.Schema(
  {
    userId: {
      type: String,
    },
    typeNot: {
      type: String,
    },
    titleNot: {
      type: String,
    },
    bodyNot: {
      type: String,
    },
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

const User = mongoose.model('Notifications', notificationSchema);

module.exports = User;
