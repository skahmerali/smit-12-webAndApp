import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './Signup'


function App() {
  // const [count, setCount] = useState(0)
  // const ref = useRef(null);

  // useEffect(() => {
  //   let userValue = ref.current.style.background = 'green';
  //   // var x = ref.current + 1;
  //   console.log(userValue);
  //   // fetch('https://jsonplaceholder.typicode.com/todos/')
  //   //   .then(response => response.json())
  //   //   .then(json => console.log(json))
  // })

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <input
        type="text"
        ref={ref}
        value={count}
      /> */}

      <Signup />
    </>
  )
}

export default App
