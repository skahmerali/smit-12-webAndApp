import React, { useState } from 'react';

export default function Counter() {
    const [counter, setCounter] = useState(0)
    const increment = () => {
        setCounter(counter + 1)
    }
    const decrement = () => {
        setCounter(counter - 1)
    }
    console.log('Re render', counter)
    return (
        <div style={{ background: 'red' }}>

            <button>Red</button>
            <button>Blue</button>
            <button>Green</button>
            <button>Orange</button>

            <button disabled={counter == 10} onClick={increment}>+</button>
            <h1>{counter}</h1>
            <button disabled={counter == 0} onClick={decrement}>-</button>
        </div>
    )
}


