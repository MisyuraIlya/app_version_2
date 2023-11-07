import { useState } from 'react'

function App() {
  const [count, setCounter] = useState(0)
  const name = 'as'
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hello world {process.env.NODE_ENV} {process.env.name} {name}
        </h1>
        <button onClick={() => setCounter((c) => c + 1)}>{count}</button>
      </header>
    </div>
  )
}

export default App
