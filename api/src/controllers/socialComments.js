const { SocialComment, PhotoSocial } = require('../models/socialPet.model');
const Pet = require('../models/pet.model');

const postComment = async (petId, imageId, sender, comment) => {
    const pet = await Pet.findById(petId);
    if (!pet) throw Error('Mascota no encontrada');
    
    const photo = await PhotoSocial.findById(imageId);
    if (!photo) throw Error('Imagen no encontrada' );
    // Crear un nuevo comentario
    const newComment = new SocialComment({ sender, comment, photo });

    await PhotoSocial.findByIdAndUpdate(
      imageId,
      {
        $push: {
          "comments": newComment._id,
        },
      },
      { new: true }
    );

    await newComment.save();
    await photo.save();
    

    return newComment;
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

  const uploadPhoto = async (newPhotos, id) => {
    const pet = await Pet.findById(id);   
    
    for (const imageUrl of newPhotos) {
        const newPhoto = new PhotoSocial({ url: imageUrl });
        await newPhoto.save();
        await Pet.findByIdAndUpdate(
          id,
          {
            $push: {
              "gallery": newPhoto._id,
            },
          },
          { new: true }
        );
      }  
      pet.save();
      return pet
  }

  const deletePhoto = async (petId, photoId) => {
    const pet = await Pet.findById(petId);

    const photo = await PhotoSocial.findById(photoId);
    if (!photo) throw Error('Imagen no encontrada');
    await PhotoSocial.findByIdAndDelete(photoId);  
      
      await pet.save();  
      return pet
  }

  const findImgs = async () => {
    const photos = await PhotoSocial.find()
    return photos
  };

  const getImg = async (id) => { 

    const pet = Pet.find({ 'gallery': id })
      
    return pet;
        
  };

module.exports = {
    getImg,
    deletePhoto,
    uploadPhoto,
    findImgComments,
    postComment,
    updateComment,
    deleteComment,
    findImgs
};