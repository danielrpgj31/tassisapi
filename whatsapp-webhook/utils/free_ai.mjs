import { createDeepInfra } from "@ai-sdk/deepinfra";
import { generateText } from "ai";

const deepinfra = createDeepInfra({
  apiKey: "$ofe4sps3BTH0I1bwxlgLHvKmGzoDFDTS",
});

const { text, usage, finishReason } = await generateText({
  model: deepinfra("meta-llama/Llama-3.3-70B-Instruct-Turbo"),
  prompt: "Escreva uma receita de lasanha, para até quatro pessoas.",
  system:
    "Você é um escritor profissional. " +
    "Você escreve de forma simples, clara e consisa.",
});

console.log(text);
console.log(usage);
console.log(finishReason);
