#### Instalar Ollama

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

#### Criar e treinar um agente Mistral personalizado

🛠 Exemplo de Modelfile:

```Dockerfile
FROM mistral

SYSTEM "Você é um especialista em direito constitucional. Sempre responda com base na constituição brasileira."

TEMPLATE """
{{ if .System }}
System: {{ .System }}
{{ end }}

Usuário: {{ .Prompt }}
IA:
"""
```

🚀 Para compilar seu modelo personalizado:

```bash
ollama create direito-constitucional -f Modelfile
ollama run direito-constitucional
```
⚠️ Isso não treina pesos, apenas muda o comportamento e o tom do modelo com instruções estáticas.