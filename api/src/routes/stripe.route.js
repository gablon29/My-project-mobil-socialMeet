const { processPurchase, stripeCallback } = require('../controllers/stripeController');


module.exports = {
  get_pub_jey: async (req, res) => {
    return await getApiKey(req, res)
  },
  iniciar_proceso_de_compra: async (req, res) => {
    return await processPurchase(req, res)
  },

  ruta_donde_recibiremos_eventos: async (req, res) => {
    return await stripeCallback(req, res)
  }
}
