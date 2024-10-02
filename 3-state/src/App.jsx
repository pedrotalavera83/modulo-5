import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // const clickHandlerMas1 = function(){
  //   setCount(count + 1)
  // }
  // const clickHandlerMas10 = function(){
  //   setCount(count + 10)
  // }
  // const clickHandlerMenos1 = function(){
  //   setCount(count - 1)
  // }
  // const clickHandlerMenos10 = function(){
  //   setCount(count - 10)
  // }
  // const clickHandlerReset = function(){
  //   setCount(0)
  // }

  const clickHandler = (cambio) => {
    switch (cambio) {
      case '0':
        setCount(0)
        break;
      case '+1':
        setCount(count + 1)
        break;
      case '+10':
        setCount(count + 10)
        break;
      case '-1':
        setCount(count - 1)
        break;
      case '-10':
        setCount(count - 10)
        break;
      default:
        break;
    }
  }


  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> // otra manera de hacerlo*/}
        <p>count is {count}</p>
        <button onClick={() => clickHandler('+1')}>
          + 1
        </button>
        <button onClick={() => clickHandler('+10')}>
          + 10
        </button>
        <button onClick={() => clickHandler('-1')}>
          - 1
        </button>
        <button onClick={() => clickHandler('-10')}>
          - 10
        </button>
        <button onClick={() => clickHandler('0')}>
          reset
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
