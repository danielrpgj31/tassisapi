const axios = require('axios');

/**
 * Envia uma mensagem de texto via API do WhatsApp Business (Meta)
 * 
 * @param {string} mensagem - Texto da mensagem a ser enviada
 * @returns {Promise<string>}
 */
async function enviarMensagemWhatsApp(mensagem, destino) {
  const url = `https://graph.facebook.com/v22.0/742728438919396/messages`;

  try {
    const response = await axios.post(
      url,
      {
        messaging_product: 'whatsapp',
        to: `${process.env.PHONE_DESTINATION}`,
        type: 'text',
        text: { body: mensagem }
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.WHATSAPP_TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error('Erro ao enviar mensagem:', error.response?.data || error.message);
    throw error;
  }
}

module.exports = { enviarMensagemWhatsApp };
