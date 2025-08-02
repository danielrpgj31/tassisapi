const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config(); // carrega o .env para process.env
const perguntaIA = require('./utils/mistral');
const { enviarMensagemWhatsApp } = require('./utils/whatsapp');
const app = express();

const port = process.env.PORT || 3000;

// Token que você define no painel do WhatsApp Meta
const VERIFY_TOKEN = process.env.VERIFY_TOKEN;
const DESTINO = process.env.PHONE_DESTINATION;

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
app.post('/webhook', async (req, res) => {
  var respostaIA = ""

  console.log('Mensagem recebida:', JSON.stringify(req.body, null, 2));

  // Recupera o campo text.body do primeiro message, se existir
  const messages = req.body.entry?.[0]?.changes?.[0]?.value?.messages;
  let textBody = null;
  if (messages && messages.length > 0 && messages[0].text && messages[0].text.body) {
    
    textBody = messages[0].text.body;
    console.log('#################################################### INICIO DO PROCESSO ####################################################');

    // ####### Pergunta para a Inteligência Artificial (Ollama)
    try {

      console.log('>> Mensagem recebida. Questão submetida para a IA...');
      respostaIA = await perguntaIA(textBody);
      console.log('>> Resposta recebida:', respostaIA);

    } catch (error) {
      console.error('!! Erro ao obter resposta da IA:', error.message);
    }

    // ####### Envia resposta ao zap
    try {
      const resposta_envio_zap = await enviarMensagemWhatsApp(respostaIA, process.env.PHONE_DESTINATION);
      console.log('>> Resposta do Envio Zap:', resposta_envio_zap);
      // Aqui você pode integrar o envio da resposta para o WhatsApp, se desejar
    } catch (error) {
      console.error('!! Erro ao obter resposta do envio zap:', error.message);
    }

  } else {
    console.log('!! Nenhuma mensagem de texto encontrada.');
  }

  res.sendStatus(200); // Meta exige 200 OK
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
