const { 
    findImgComments,
    postComment,
    updateComment,
    deleteComment,
    uploadPhoto,
    findImgs
 } = require('../controllers/socialComments');
const { response } = require('../utils');

module.exports = {

    find_comments: async (req, res) => {
        const comments = await findImgComments(req.params.id);
        response(res, 200, comments);

    },
    create_comment: async (req, res) => {
       try {
        const petId = req.params.petId;
        const imageId = req.params.imageId;
        const { sender, comment } = req.body;
        await postComment(petId, imageId, sender, comment);

      return res.status(201).json({ message: 'Comentario agregado exitosamente' });
        } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error en el servidor' });
  }
    },

    edit_comment: async (req, res) => {
        const newData = req.body;
        console.log(newData);

        const updatedComment = await updateComment(newData, req.params.id);
        
        response(res, 200, updatedComment);
    },

    delete_comment: async (req, res) => {
        try {
            const petId = req.params.petId;
            const imageId = req.params.imageId;
            const commentId = req.params.commentId;
        
            const pet = await deleteComment(petId, imageId, commentId);
        
            return res.status(200).json({ message: 'Comentario eliminado exitosamente' });
          } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error en el servidor' });
          }
    },

    post_photo: async (req, res) => {
        try {
            const { newImages, pet } = req.body;

            await uploadPhoto(newImages, pet.id);      
        
            return res.status(201).json({ message: 'Imagen subida exitosamente' });
          } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error en el servidor' });
          }
    },

    delete_photo: async (req, res) => {
        try {
            const petId = req.params.petId;
            const imageIdsToDelete = req.body.imageIds; // Suponiendo que el cliente envía un array de IDs de imágenes a eliminar
        
            const pet = await deletePhoto(petId, imageIdsToDelete)

            // Eliminar las imágenes de la galería de la mascota
            
            return res.status(200).json({ message: 'Imágenes eliminadas exitosamente' });
          } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error en el servidor' });
          }
    },

    get_gallery: async (req, res) => {
        const gallery = await findImgs();
        response(res, 200, gallery);
    }

}