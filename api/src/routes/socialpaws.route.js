const { 
    postComment,
    updateComment,
    deleteComment
 } = require('../controllers/socialComments');
const { response } = require('../utils');

module.exports = {
    create_comment: async (req, res) => {
        const newData = req.body;
        console.log(newData);

        const newComment = await postComment(newData, req.user.userId, req.params.id);
        if (!newComment || !newComment._id){
            return res.status(500).json({
                message: 'Error al crear el comentario'
            });
        }

        response(res, 200, newComment);
    },

    edit_comment: async (req, res) => {
        const newData = req.body;
        console.log(newData);

        const updatedComment = await updateComment(newData, req.params.id);
        
        response(res, 200, updatedComment);
    },

    delete_comment: async (req, res) => {

        const deletedComment = await deleteComment(req.params.id)
        
        response(res, 200, deletedComment);
    },

    post_photo: async (req, res) => {
        

    }
}