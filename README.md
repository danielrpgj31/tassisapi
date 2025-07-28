### Referências

- [Como usar webhooks na API do WhatsApp Business](https://business.whatsapp.com/blog/how-to-use-webhooks-from-whatsapp-business-api)
- [Facebook for Developers - Apps](https://developers.facebook.com/apps/)
- [Seu Authtoken no Ngrok](https://dashboard.ngrok.com/get-started/your-authtoken)
- [Gerenciador de Números do WhatsApp Business](https://business.facebook.com/latest/whatsapp_manager/phone_numbers)
- [Gerenciador do WhatsApp Business](https://business.facebook.com/latest/whatsapp_manager/)
- [Configurações da Conta do WhatsApp Business](https://business.facebook.com/latest/settings/whatsapp_account)

### Comandos

#### Teste de chamada do webhook

```bash
curl "https://ec2-54-86-175-192.compute-1.amazonaws.com:3000/webhook?hub.mode=subscribe"

curl "http://localhost:3000/webhook?hub.mode=subscribe&hub.verify_token=seu_token_secreto"

curl "https://8c70434db9c5.ngrok-free.app/webhook?hub.mode=subscribe&hub.verify_token=seu_token_secreto"
```

#### Transferência de arquivos de projeto

```bash
scp -i tassis-aws-key.pem ./whatsapp-webhook/index.js ubuntu@ec2-54-86-175-192.compute-1.amazonaws.com:/home/ubuntu/whatsapp-webhook
```