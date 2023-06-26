const {
  CARGA_TOKEN
} = process.env;
require('dotenv').config(); // Carga las variables de entorno desde .env

const UserModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createNewUser = async (user) => {
  const userExists = await UserModel.findOne({ email: user.email });
  if (userExists) {
    // Update user logic here
    // return await updateUser(user, user.email);
  } else {
    const newUser = new UserModel(user);
    await newUser.save();
    return newUser;
  }
};

const registerUser = async ( email,
  password,
  firstName,
  lastName,
  phone,
  country,
  province,
  city,
  zipcode,
  address) => {
  try {
    // Verificar si el usuario ya existe en la base de datos
    const existingUser = await UserModel.findOne({ email }).maxTimeMS(15000); // Increase timeout to 15 seconds

    if (existingUser) {
      throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear un nuevo usuario en la base de datos
    const newUser = new UserModel({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      phone,
      country,
      province,
      city,
      zipcode,
      address
    });

    await newUser.save();

    const jwtSecretKey = 'MySuperSecretKey123!@';
    // Generar el token JWT
    const token = jwt.sign({ userId: newUser._id }, jwtSecretKey, {
      expiresIn: '300h',
    });

    // Guardar el token en el modelo de usuario
    newUser.tokens.push({ token });
    await newUser.save();

    return { message: 'User created successfully', token, user: newUser };
  } catch (error) {
    throw error;
  }
};

const loginUser = async (email, password) => {
  try {
    // Buscar al usuario en la base de datos
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }

    // Verificar la contraseña
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new Error('Incorrect password');
    }

    const jwtSecretKey = 'MySuperSecretKey123!@';
    // Generar el token JWT
    const token = jwt.sign({ userId: user._id }, jwtSecretKey, {
      expiresIn: '300h',
    });

    // Guardar el token en el modelo de usuario
    user.tokens.push({ token });
    await user.save();

    return { token, user };
  } catch (error) {
    throw error;
  }
};
const recoverPassword = async(email, password) => {

  try {
    // Verificar si el usuario existe en la base de datos
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Hashear la nueva contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Actualizar la contraseña del usuario en la base de datos
    user.password = hashedPassword;
    await user.save();

    const jwtSecretKey = 'MySuperSecretKey123!@';
    const token = jwt.sign({ userId: user._id }, jwtSecretKey, {
      expiresIn: '1h',
    });

    return  'Password recovered successfully', token, user 
  } catch (error) {
    console.log(error);
    return error, 'Something went wrong' 
  }
};

const findUser = async (email) => { //no se usa creo
  try {
    const userInDB = await UserModel.findOne({ email: email });
    return userInDB;
  } catch (error) {
    throw error;
  }
};

const findUserName = async (email) => {  //no se usa creo
  try {
    const userInDB = await UserModel.findOne({ email: email });
    return userInDB.firstName + ' ' + userInDB.lastName;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createNewUser,
  registerUser,
  loginUser,
  findUser,
  findUserName,
  recoverPassword,
};