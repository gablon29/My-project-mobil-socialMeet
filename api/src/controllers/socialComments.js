const SocialComment = require('../models/socialPet.model');

const postComment = async (newData,userId, id) => {
    console.log(newData);
    const {
        comment
    } = newData;
    
    const newComment = await SocialComment.create({
        photo: id,
        sender: userId,
        comment 
    })

    return newComment
};

const updateComment = async (newData, id) => {
    console.log(newData);
    const updatedComment = await SocialComment.findByIdAndUpdate(id, newData)

    return updatedComment;
};

const deleteComment = async (id) => {

    const deleted = await SocialComment.findByIdAndDelete(id);

    return deleted;
}

module.exports = {
    postComment,
    updateComment,
    deleteComment
};