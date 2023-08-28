const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const socialCommentSchema = new mongoose.Schema({
        sender:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            autopopulate: true
        },
        comment:{
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now,
            required: true
        },
        photo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'PhotoSocial',
            required:true,
            autopopulate: true
        }
});

socialCommentSchema.plugin(require('mongoose-autopopulate'));
socialCommentSchema.plugin(toJSON);
const SocialComment = mongoose.model('SocialComment', socialCommentSchema);

const photoSocialSchema = mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    comments: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SocialComment',
        autopopulate: true
        }
    ],
    date: {
        type: Date,
        default: Date.now,
        required: true
    }

});

photoSocialSchema.plugin(require('mongoose-autopopulate'));
photoSocialSchema.plugin(toJSON);

const PhotoSocial = mongoose.model('PhotoSocial', photoSocialSchema);

module.exports = {
    SocialComment,
    PhotoSocial
}


