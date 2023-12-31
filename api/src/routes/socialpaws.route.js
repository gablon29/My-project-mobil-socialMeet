const { 
    findImgComments,
    postComment,
    updateComment,
    deleteComment,
    deletePhoto,
    uploadPhoto,
    findImgs,
    getImg
 } = require('../controllers/socialComments');
const { response } = require('../utils');

module.exports = {

    find_comments: async (req, res) => {
        const comments = await findImgComments(req.params.id);
        response(res, 200, comments);

    },
    create_comment: async (req, res) => {
       try {        
        const { sender, comment, photoId } = req.body;
        const newComment = await postComment( sender, comment, photoId );

        return res.status(201).json(newComment);
        } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error en el servidor' });
  }
    },

    edit_comment: async (req, res) => {
        const newData = req.body;
        const updatedComment = await updateComment(newData, req.params.id);
        
        response(res, 200, updatedComment);
    },

    delete_comment: async (req, res) => {
        try {
            const { commentId } = req.params;        
            await deleteComment( commentId );
        
            return res.status(200).json({ message: 'Comentario eliminado exitosamente' });
          } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error en el servidor' });
          }
    },

    post_photo: async (req, res) => {
        try {
            const { newPhotos, pet } = req.body;
            await uploadPhoto(newPhotos, pet.id);      
        
            return res.status(201).json({ message: 'Imagen subida exitosamente' });
          } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error en el servidor' });
          }
    },

    delete_image: async (req, res) => {
        try {
          
            const { petId, imageId } = req.params;        
            const pet = await deletePhoto(petId, imageId)
            
            return res.status(200).json({ message: 'Imágenes eliminadas exitosamente' });
          } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error en el servidor' });
          }
    },

    get_gallery: async (req, res) => {
        const gallery = await findImgs();
        if(gallery.length <= 0) return res.status(400).json("No hay galeria");
        console.log(gallery);
        response(res, 200, gallery)
    },

    get_photo: async (req, res) => {
      try {
        const photo = await getImg(req.params.id);
        return res.status(200).json(photo);
      } catch (error) {
        
        console.log(error);
      }     
    }

}