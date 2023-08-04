import axios from "axios";
import { emailSendVerifCode } from "../utils/sendInBlueEmail";

require('dotenv').config(); // Carga las variables de entorno desde .env

const UserModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { ClientError } = require('../utils/errors');
const { SENDINBLUE_KEY, JWT_RANDOM_PASSWORD } = require('../config/env');



//------------------ REGISTER -------------------
const registerUser = async (email, password, firstName, lastName, phone, country, province, zipcode) => {
  const existingUser = await UserModel.findOne({ email }).maxTimeMS(15000); // Increase timeout to 15 seconds
  if (existingUser) throw new ClientError('Este usuario ya existe', 500);
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new UserModel({
    email,
    password: hashedPassword,
    firstName,
    lastName,
    phone,
    country,
    province,
    zipcode,
  });

  await newUser.save();
  const jwtSecretKey = 'MySuperSecretKey123!@';
  const token = jwt.sign({ userId: newUser._id, email: newUser.email,userType:newUser.userType }, jwtSecretKey, {
    expiresIn: '3000h',
  });

  newUser.tokens.push({ token });
  newUser.Notifications.push('Bienvenido a Whopaws');

  await newUser.save();
  return {
    ok: true,
    message: 'User created successfully',
    token,
    user: {
      userType: newUser.userType,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      profilePic: newUser.profilePic,
      pets: newUser.pets,
      id: newUser.id,
    },
  };
};
//^^^^^^^^^^ REGISTER ^^^^^^^^^^

const loginUser = async (emailParam, password) => {
  if (!emailParam || !password) throw new ClientError('No ha llegado el email o el password', 400);
  const user = await UserModel.findOne({ email: emailParam });
  if (!user) throw new ClientError('El usuario no se encuentra registrado', 500);
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) throw new ClientError('Contraseña incorrecta', 500);
  const jwtSecretKey = 'MySuperSecretKey123!@';
  const token = jwt.sign({ userId: user._id, email: user.email,userType:user.userType }, jwtSecretKey, {
    expiresIn: '3000h',
  });
  if (user.tokens && user.tokens.length == 0) {
    user.tokens.push({ token });
  } else {
    user.tokens = [{ token }];
  }

  await user.save();
  const { userType, firstName, lastName, email, profilePic, pets, id, country, phone, province  } = user;
  return {
    token,
    user: { userType, firstName, lastName, email, profilePic, pets, id, country, phone, province },
  };
};
//^^^^^^^^^^ LOGIN ^^^^^^^^^^

const checkVerifCode = async (email, code) => {
  const user = await UserModel.findOne({ email }).maxTimeMS(15000); // Increase timeout to 15 seconds
  if (user.latest_email_verification_code !== code) throw new ClientError("Código de verificación incorrecto", 400)
  return "Código correcto!"
};


//sendEmail: Envia un email, con un código generado, y tambien lo guarda en la DB del usuario
const sendEmail = async (email) => {
  const user = await UserModel.findOne({ email }).maxTimeMS(15000); // Increase timeout to 15 seconds
  if (!user) throw new ClientError('Este email no se encuentra registrado: '+email, 400);

  //GENERA CODIGO ALEATORIO
  const length = 6; // Longitud del código //no cambiar
  const characters = '0123456789';
  let code = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters.charAt(randomIndex);
  }
  //------------------------

  const result_data =await emailSendVerifCode(email,code)
 
  user.latest_email_verification_code = code;
  await user.save();
  return result_data;
};
//^^^^^^^^^^ SEND EMAIL ^^^^^^^^^^


//recoverPassword, recibe email y nueva contraseña, requiere el codigo de activacion recibido por mail
//sigue siendo inseguro, pero un raate limiter a esta ruta de 10 peticiones por cada 5 horas estaria bien.
const recoverPassword = async (email: string, password, code) => {
  const user = await UserModel.findOne({ email: email.toLowerCase() });
  if (!user) throw new ClientError('Usuario ' + email + ' no registrado', 400);
  if (user.latest_email_verification_code !== code || user.latest_email_verification_code == 'already used' ) throw new ClientError('Codigo verificación incorrecto ' + code, 400);
  const hashedPassword = await bcrypt.hash(password, 10);
  user.password = hashedPassword;
  user.latest_email_verification_code = 'already used'
  await user.save();
  const token = jwt.sign({ userId: user._id, email: user.email,userType:user.userType }, JWT_RANDOM_PASSWORD, {
    expiresIn: '300h',
  });
  user["_doc"].password = undefined //Para no enviar password al user
  return {message: 'Contraseña recuperada correctamente', token, user};
};
//^^^^^^^^^^ RECOVER PASSWORD ^^^^^^^^^^

const findUser = async (email) => {
  const userInDB = await UserModel.findOne({ email: email });
  return userInDB;
};

const findUserName = async (email) => {
  const userInDB = await UserModel.findOne({ email: email });
  return userInDB.firstName + ' ' + userInDB.lastName;
};

const editUser = async (userId, info, res) => {
  const user = await UserModel.findOne({ _id: userId });
  if (!user) {
    return res.status(404).json({ error: 'El usuario no está registrado' });
  }
  user.firstName = info.firstName || user.firstName;

  user.email = info.email || user.email;
  user.lastName = info.lastName || user.lastName;
  user.phone = info.phone || user.phone;
  user.profilePic = info.profilePic || user.profilePic;
  user.country = info.country || user.country;
  user.province = info.province || user.province;

  await user.save();

  return user;
};

module.exports = {
  registerUser,
  loginUser,
  findUser,
  findUserName,
  editUser,
  recoverPassword,
  checkVerifCode,
  sendEmail,
};

// const uno = { userType, firstName, lastName, email, profilePic, pets, id };
