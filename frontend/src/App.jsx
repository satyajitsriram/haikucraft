import { useState } from 'react'

function App() {
  const [season, setSeason] = useState('')
  const [cuttingWord, setCuttingWord] = useState('')
  const [haikus, setHaikus] = useState([])
  const [loading, setLoading] = useState(false)

  const generateHaiku = async () => {
    if (!season.trim() || !cuttingWord.trim()) return
    setLoading(true)
    try {
      const res = await fetch("http://localhost:8000/haiku", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: `Season: ${season}, Cutting word: ${cuttingWord}` }),
      })
      const data = await res.json()
      setHaikus(prev => [...prev, { season, cuttingWord, text: data.haiku }])
    } catch (err) {
      console.error("Error:", err)
    } finally {
      setSeason('')
      setCuttingWord('')
      setLoading(false)
    }
  }

  const clearHaikus = () => {
    setHaikus([])
    setSeason('')
    setCuttingWord('')
  }

  const canGenerate = season.trim() && cuttingWord.trim()

  return (
    <div style={{
      padding: '2rem',
      fontFamily: 'serif',
      minHeight: '100vh',
      backgroundColor: '#121212',
      color: '#fff'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌸 HaikuCraft</h1>

      <div style={{ marginBottom: '1rem' }}>
        <input
          value={season}
          onChange={e => setSeason(e.target.value)}
          placeholder="Enter a seasonal reference..."
          style={{
            padding: '0.6rem',
            width: '280px',
            marginRight: '1rem',
            borderRadius: '6px',
            border: '1px solid #ccc',
            backgroundColor: '#222',
            color: 'white',
          }}
        />
        <input
          value={cuttingWord}
          onChange={e => setCuttingWord(e.target.value)}
          placeholder="Enter a cutting word..."
          style={{
            padding: '0.6rem',
            width: '250px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            backgroundColor: '#222',
            color: 'white',
          }}
        />
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <button
          onClick={generateHaiku}
          disabled={!canGenerate || loading}
          style={{
            padding: '0.6rem 1.2rem',
            marginRight: '1rem',
            backgroundColor: canGenerate ? '#1f1f1f' : '#555',
            color: '#fff',
            border: '1px solid #ccc',
            borderRadius: '6px',
            cursor: canGenerate ? 'pointer' : 'not-allowed',
          }}
        >
          {loading ? "Composing..." : "Generate"}
        </button>

        <button
          onClick={clearHaikus}
          style={{
            padding: '0.6rem 1.2rem',
            backgroundColor: '#8b0000',
            color: '#fff',
            border: '1px solid #ccc',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Clear
        </button>
      </div>

      <div>
        {haikus.map((h, i) => (
          <div
            key={i}
            style={{
              background: '#282828',
              padding: '1rem',
              borderRadius: '8px',
              marginBottom: '1rem',
              color: '#eee',
            }}
          >
            <div><strong style={{ color: '#8ab4f8' }}>Season:</strong> {h.season}</div>
            <div><strong style={{ color: '#f7c96e' }}>Cutting Word:</strong> {h.cuttingWord}</div>
            <pre style={{ marginTop: '0.5rem', whiteSpace: 'pre-line' }}>{h.text}</pre>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App