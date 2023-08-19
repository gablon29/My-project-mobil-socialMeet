const { SocialComment, PhotoSocial } = require('../models/socialPet.model');
const Pet = require('../models/pet.model');

const postComment = async (petId, imageId, sender, comment) => {
    const pet = await Pet.findById(petId);

    if (!pet) {
      throw Error('Mascota no encontrada');
    }

    const image = pet.gallery.id(imageId);
    if (!image) {
      throw Error('Imagen no encontrada' );
    }

    // Crear un nuevo comentario
    const newComment = new SocialComment({ sender, comment });
    image.comments.push(newComment);
    await pet.save();
};

const updateComment = async (newData, id) => {
    const updatedComment = await SocialComment.findByIdAndUpdate(id, newData)

    return updatedComment;
};

const deleteComment = async (petId, imageId, commentId) => {
    const pet = await Pet.findById(petId);
    if (!pet) {
        throw Error("Mascota no encontrada")
      }
  
      const image = pet.gallery.id(imageId);
      if (!image) {
        throw Error('Imagen no encontrada');
      }
  
      const comment = image.comments.id(commentId);
      if (!comment) {
        throw Error('Comentario no encontrado');
      }
  
      // Aquí deberías implementar la lógica para eliminar el comentario
    comment.remove();
    await pet.save();
}

const findImgComments = async (id) => {
    const comments = await Pet.findOne({ gallery: { _id: id } });
    return comments;
  };

  const uploadPhoto = async (newImages, petId) => {
    const pet = await Pet.findById(petId);   
    
    for (const imageUrl of newImages) {
        const newPhoto = new PhotoSocial({ url: imageUrl });
        await newPhoto.save();
        await Pet.findByIdAndUpdate(
          petId,
          {
            $push: {
              "gallery": newPhoto._id,
            },
          },
          { new: true }
        );
      }  
      console.log(pet);
      return pet
  }

  const deletePhoto = async (petId, imageIdsToDelete) => {
    const pet = await Pet.findById(petId);
    for (const imageId of imageIdsToDelete) {
        const image = pet.gallery.id(imageId);
        if (image) {
          image.remove();
        }
      }  
      await pet.save();  
      return pet
  }

  const findImgs = async () => {
    const photos = await PhotoSocial.find()
    return photos
  };

module.exports = {
    deletePhoto,
    uploadPhoto,
    findImgComments,
    postComment,
    updateComment,
    deleteComment,
    findImgs
};