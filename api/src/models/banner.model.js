const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON /* , paginate */ } = require('./plugins');

const bannersSchema = mongoose.Schema(
  {
    banner: {
      type: Array,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

bannersSchema.plugin(toJSON)

const banners = mongoose.model("Baners", bannersSchema)

module.exports = banners;
