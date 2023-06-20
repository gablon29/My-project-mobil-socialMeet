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

const registerUser = async (email, password, firstName, lastName, phone) => {
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
    });

    await newUser.save();

    return { message: 'User created successfully', user: newUser };
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
      expiresIn: '1h',
    });

    // Guardar el token en el modelo de usuario
    user.tokens.push({ token });
    await user.save();

    return { token, user };
  } catch (error) {
    throw error;
  }
};

const findUser = async (email) => {
  try {
    const userInDB = await UserModel.findOne({ email: email });
    return userInDB;
  } catch (error) {
    throw error;
  }
};

const findUserName = async (email) => {
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
};