const jwt = require('jsonwebtoken');
const { ClientError } = require('./errors');

const jwtSecretKey = 'MySuperSecretKey123!@';

require('dotenv').config();
const generateToken = (payload) => {
  return jwt.sign(payload, jwtSecretKey, { expiresIn: '1h' });
};

const verifyToken = (token) => {
    return jwt.verify(token, jwtSecretKey);
};

const checkJwt = (req, res, next) => {
  const token = req.headers.authorization?.split('Bearer ')[1];
  if (!token)
    throw new ClientError('Missing token! Authorization=undefined', 400);
  try {
    const decodedToken = verifyToken(token);
    if(!("userType" in decodedToken) || !("email" in decodedToken)){
      throw new ClientError('Debe actualizar su token, vuelva a logearse', 400);
    }
    req.user = decodedToken;
    next();
   
  } catch (error) {
    throw new ClientError('Debe volver a logearse.', 400);
  }
};
const socketAuthMiddleware = (socket, next) => {
  const token = socket.handshake.auth.token;

  if (!token) {
    return next(new Error('Authentication error: No token provided.'));
  }

  jwt.verify(token, jwtSecretKey, (err, decoded) => {
    if (err) {
      return next(new Error('Authentication error: Invalid token.'));
    }

    // Attach the decoded data to the socket object so you can use it in the socket event handlers
    socket.user = decoded;
    next();
  });
}


//userType
//if (!isAdmin) throw new ClientError('You are not an admin!', 400);

const checkAdmin = async (req, res, next) => {
  const isAdmin = req.user.userType === 'admin'
  if (!isAdmin) return next(new ClientError('You are not an admin!', 400))
  next();
};

module.exports = {
  generateToken,
  verifyToken,
  checkJwt,
  checkAdmin,
  socketAuthMiddleware,
};
