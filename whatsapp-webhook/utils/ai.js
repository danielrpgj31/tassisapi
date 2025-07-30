const axios = require('axios');

const apiKey =  process.env.OPENAI_API_KEY;
if (!apiKey) {
  console.error('Chave da API do OpenAI não está definida. Por favor, defina a variável de ambiente OPENAI_API_KEY.');
  process.exit(1);
}

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
