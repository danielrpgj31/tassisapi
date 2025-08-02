const axios = require('axios');

async function main() {
  const response = await axios.post('http://localhost:11434/api/generate', {
    model: 'frutaria',
    prompt: "Bom dia, o que você tem de frutas hoje?",
    stream: false
  });

  console.log(response.data.response);
}

main();
