### Referências

- [Como usar webhooks na API do WhatsApp Business](https://business.whatsapp.com/blog/how-to-use-webhooks-from-whatsapp-business-api)
- [Facebook for Developers - Apps](https://developers.facebook.com/apps/)
- [Seu Authtoken no Ngrok](https://dashboard.ngrok.com/get-started/your-authtoken)
- [Gerenciador de Números do WhatsApp Business](https://business.facebook.com/latest/whatsapp_manager/phone_numbers)
- [Gerenciador do WhatsApp Business](https://business.facebook.com/latest/whatsapp_manager/)
- [Configurações da Conta do WhatsApp Business](https://business.facebook.com/latest/settings/whatsapp_account)
- [OpenAI API Keys](https://platform.openai.com/api-keys)
- [Como adquirir um Access Token para o WhatsApp Business Management API](https://developers.facebook.com/docs/whatsapp/business-management-api/get-started#1--acquire-an-access-token-using-a-system-user-or-facebook-login)

### Comandos

#### Teste de chamada do webhook

```bash
curl "https://ec2-54-86-175-192.compute-1.amazonaws.com:3000/webhook?hub.mode=subscribe"

curl "http://localhost:3000/webhook?hub.mode=subscribe&hub.verify_token=seu_token_secreto"

curl "https://c14d0df33d9d.ngrok-free.app/webhook?hub.mode=subscribe&hub.verify_token=seu_token_secreto"
```

#### Configuração exposição com ngrok (https)

```bash
ngrok config add-authtoken 3036dKrFv7oseRKThMxvjeDYrPv_3FrrFqfDLVRd6auDRiwUi

ngrok http 3000
```

### Resposta automática do webhook (para whatsapp api)

```bash

curl -i -X POST \
  https://graph.facebook.com/v22.0/742728438919396/messages \
  -H 'Authorization: Bearer EAATyVg4kR7ABPBxAZApOR76ZCsnfZAZA1ZBGXzZBU7MhUKfdiHr8ebQgJtYGpSQ80skQlLsoNuorBq8QEsy2VGjdmvZAAGRbsB5B8q3VlCnjC5OhAO3dCyMY4m8Sx4dm95I9nbzYT8IopQ5UalN7PKuGxr2VNiZAA59KeWzKDrwG2TXAeZBwfHewcZBBTVvEWcinW1SZAjCPXRACeaN3If5EZCZC1eoRv1sn2PhZAfr0XtzUXY7VgIHbAPXjLitJJsQmMh' \
  -H 'Content-Type: application/json' \
  -d '{
    "messaging_product": "whatsapp",
    "to": "5531992176885",
    "type": "text",
    "text": {
      "body": "ola você"
    }
  }'

```

#### Transferência de arquivos de projeto

```bash
scp -i tassis-aws-key.pem ./whatsapp-webhook/index.js ubuntu@ec2-54-86-175-192.compute-1.amazonaws.com:/home/ubuntu/whatsapp
```