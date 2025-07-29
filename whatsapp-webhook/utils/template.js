const axios = require('axios');
const token = process.env.ACCESS_TOKEN;
const phoneId = process.env.PHONE_NUMBER_ID;

async function sendTemplate(phone, templateName) {
  await axios.post(
    `https://graph.facebook.com/${process.env.WABA_VERSION}/${phoneId}/messages`,
    {
      messaging_product: 'whatsapp',
      to: phone,
      type: 'template',
      template: {
        name: templateName,
        language: { code: 'pt_BR' },
      },
    },
    { headers: { Authorization: `Bearer ${token}` } }
  );
}

async function sendText(phone, text) {
  await axios.post(
    `https://graph.facebook.com/${process.env.WABA_VERSION}/${phoneId}/messages`,
    {
      messaging_product: 'whatsapp',
      to: phone,
      type: 'text',
      text: { body: text },
    },
    { headers: { Authorization: `Bearer ${token}` } }
  );
}

module.exports = { sendTemplate, sendText };
