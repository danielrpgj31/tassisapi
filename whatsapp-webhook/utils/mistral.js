const axios = require('axios');

/**
 * Envia uma pergunta para o modelo 'mistral' e retorna a resposta.
 * @param {string} pergunta - A pergunta a ser enviada ao modelo.
 * @returns {Promise<string>} - A resposta do modelo.
 */
async function perguntaIA(pergunta) {
  const resposta = await axios.post('http://localhost:11434/api/generate', {
    model: 'frutaria',
    prompt: pergunta,
    stream: false
  });

  return resposta.data.response;
}

module.exports = perguntaIA;

