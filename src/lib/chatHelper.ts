
interface OllamaChatOptions {
  stream: boolean
  model: string
}

async function ollamaChat(
  messages: string[],
  options: OllamaChatOptions
) {
  const result = await fetch(`http://localhost:11434/api/chat`, {
    body: JSON.stringify({
      messages: messages.map((msg) => {
        return {
          role: 'user',
          content: msg
        }
      }),
      ...options
    }),
    method: 'POST',
  })
  return result.json().then((body) => {
    return body?.message?.content
  })
}


export async function chat(message: string) {
  return ollamaChat([message], {
    stream: false,
    model: 'qwen:0.5b'
  })
}