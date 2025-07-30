const axios = require('axios');

async function main() {
  const response = await axios.post('http://localhost:11434/api/generate', {
    model: 'frutaria-2',
    prompt: "Qual valor de 4k de manga?",
    stream: false
  });

  console.log(response.data);
}

main();
