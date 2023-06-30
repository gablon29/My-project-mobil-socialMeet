const { ClientError } = require('../utils/errors');

const idRegex = /^[0-9a-fA-F]{24}$/;
const emailRegex =
  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/;

validateroute = {
  '/user/confirm': (petID, ownEmail, newOwnerEmail) => {
    //si uno de estos test falla, se vuelve true y pasa atravez de un or y tira error
    if (!emailRegex.test(ownEmail))
      throw new ClientError('Tu email está mal escrito', 400);
    if (!emailRegex.test(newOwnerEmail))
      throw new ClientError('El email del nuevo dueño está mal escrito', 400);
    if (!idRegex.test(petID))
      throw new ClientError('petID está mal escrito', 400);
  },
};

module.exports = validateroute;
