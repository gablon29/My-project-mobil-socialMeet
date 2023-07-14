const { filterByOwner } = require('../controllers/petController');
const { loginUser, registerUser, recoverPassword, sendEmail , checkVerifCode} = require('../controllers/userController');
const UserModel = require('../models/user.model');
const { response } = require('../utils');
const { ClientError } = require('../utils/errors');

module.exports = {
  get_my_data: async (req, res) => {
    const { userId } = req.user;
    const user = await UserModel.findById(userId);
    const user2 = await UserModel.findById(userId);

    if (!user) throw new ClientError('Usuario no encontrado', 500);
    const { userType, firstName, lastName, email, profilePic, pets, id, phone } = user;
    const userPets = await filterByOwner(id);
    response(res, 200, userPets, user2);
  },

  register_new: async (req, res, next) => {
    const { email, password, firstName, lastName, phone, country, province, zipcode } = req.body;
    if (!firstName) throw new ClientError('firstName is missing', 500);
    if (!lastName) throw new ClientError('lastName is missing', 500);
    if (!email) throw new ClientError('email is missing', 500);
    if (!password) throw new ClientError('password is missing', 500);
    if (!phone) throw new ClientError('phone is missing', 500);
    if (!country) throw new ClientError('country is missing', 500);
    if (!province) throw new ClientError('province is missing', 500);
    if (!zipcode) throw new ClientError('zipcode is missing', 500);
    //if (!city ) throw new ClientError('city is missing', 500);
    //if (!address ) throw new ClientError('address is missing', 500);

    const result = await registerUser(email, password, firstName, lastName, phone, country, province, zipcode);

    response(res, 200, result);
  },

  login: async (req, res, next) => {
    const { email, password } = req.body;
    const result = await loginUser(email, password);
    //SE COMENTAN 2 LINEAS
    // if (!user) // LA VALIDACION DEL USER YA SE REALIZA EN EL CONTROLADOR TIRABA ERROR PORQUE NO ESTABA DEFINIDA
    //   throw new ClientError('Usuario ' + email + ' no encontrado', 400);
    response(res, 200, result);
  },

  send_recover_email: async (req, res) => {
    console.log(req.body);
    const result = await sendEmail(req.body.email);
    response(res, 200, result);
  },

  check_code: async (req, res) => {
    const result = await checkVerifCode(req.body.email, req.body.code);
    response(res, 200, result);
  },
  
  recover_my_password: async (req, res) => {
    const { email, password,code } = req.body;
    const result = await recoverPassword(email, password, code);
    response(res, 200, result);
  },

  retrieve_notifications: async (req, res) => {
    const { email } = req.query; // Usar req.query en lugar de req.body
    const user = await UserModel.findOne({ email });
    if (!user) throw new ClientError('Usuario no encontrado', 500);
    // Obtener el array de notificaciones del usuario
    const notifications = user.Notifications;
    response(res, 200, notifications);
  },
  editUser: async (req, res) => {
    const userId = req.user.userId;
    const { firstName, email, lastName, phone, profilePic, country, province, city, address } = req.body;
    const updateUser = await editUser(userId, {
      firstName,
      email,
      lastName,
      phone,
      profilePic,
      country,
      province,
      city,
      address
    }, res);
    response(res, 200, updateUser);
  },
};
