import { useState } from 'react'
import './App.css'
import { IncrementButton, DecrementButton, ResetButton, SaveResultButton } from './components/Button'

function App() {
  const [count, setCount] = useState(0)
  const [results, setResults] = useState([])

  const increment = (step) => {
    setCount(count + step)
  }

  const reset = () => {
    setCount(0)
  }


  const decrement = (step) => {
    setCount(count - step)
  }

  const onSaveResult = (result) => {
    setResults([...results, result])
  }

  return (
    <div className='App'>
    <h1>Counter: {count}</h1>

      <div className='increment'>
      <IncrementButton step={1} increment={increment} />
      <IncrementButton step={10} increment={increment} />
      <IncrementButton step={100} increment={increment} />
      </div>

      <div className='reset'>
      <ResetButton reset={reset}>Reset</ResetButton>
      </div>

      <div className='decrement'>
      <DecrementButton step={1} decrement={decrement} />
      <DecrementButton step={10} decrement={decrement} />
      <DecrementButton step={100} decrement={decrement} />
      </div>

      <div className='save-result'>
        <SaveResultButton count={count} onSaveResult={onSaveResult} />
      </div>

      <div className='results'>
        <h2>Saved Results:</h2>
        <ul>
          {results.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default App