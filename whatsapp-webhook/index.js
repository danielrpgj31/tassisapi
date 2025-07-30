const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config(); // carrega o .env para process.env
const app = express();

const port = process.env.PORT || 3000;

// Token que você define no painel do WhatsApp Meta
const VERIFY_TOKEN = 'seu_token_secreto';

app.use(bodyParser.json());

// Verificação do webhook (GET)
app.get('/webhook', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  console.log('Verificando webhook:', { mode, token, challenge });
  console.log('Mode:', mode);
  console.log('Token:', token);
  

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    console.log('WEBHOOK_VERIFIED');
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

// Recebimento de mensagens (POST)
app.post('/webhook', (req, res) => {
  console.log('Mensagem recebida:', JSON.stringify(req.body, null, 2));
  res.sendStatus(200); // Meta exige 200 OK
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
