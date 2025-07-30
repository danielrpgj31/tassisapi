const axios = require('axios');

const apiKey = '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'; // Substitua pela sua chave real

async function chamarChatGPT() {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: 'Diga oi!' }]
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('Resposta da IA:', response.data.choices[0].message.content);
  } catch (error) {
    console.error('Erro ao chamar a API:', error.response?.data || error.message);
  }
}

chamarChatGPT();
