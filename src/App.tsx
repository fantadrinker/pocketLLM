import { useState } from 'react'
import './App.css'
import { chat } from './lib/chatHelper'

function App() {

  const [loading, setLoading] = useState<boolean>(false)
  const [chatResponse, setChatResponse] = useState<string | null>(null)

  const [ping, setPing] = useState<string>('ping')
  return (
    <>
      <input />
      <span>{chatResponse ?? "nothing response"}</span>
      <div className="card">
        <button onClick={async () => {
          setLoading(true)
          try {
            // const result = await window.electron.chat('How to do my expenses?')
            const result = await chat('How to do my expenses')
            setChatResponse(result)
          } catch(e) {
            console.error(e)
          } finally {
            setLoading(false)
          }
        }}
          disabled={loading}>
          Chat
        </button>
        <button onClick={async () => {
          const pong = await window.electron.ping()
          setPing(pong)
        }}>
          ping: {ping}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
