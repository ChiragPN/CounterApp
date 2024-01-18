import CounterButtons from "./CounterButtons";
import React, { useState } from 'react'

function CounterComponent() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount)

    const increaseBy = (bt) => {
        setCount(prevCount => prevCount + bt)
    }

    const decreaseBy = (bt) => {
        setCount(prevCount => prevCount - bt)
    }

    const reset = () => {
        setCount(initialCount)
    }

  return (
    <div>
        <h1 className="counterTitle">Counter App</h1>
        <div className="counterDisplay">
            <h2>Count: {count}</h2>
        </div>
        <CounterButtons bt={1} increaseBy={increaseBy} decreaseBy={decreaseBy} reset={reset}/>
        <CounterButtons bt={2} increaseBy={increaseBy} decreaseBy={decreaseBy} reset={reset}/>
        <CounterButtons bt={5} increaseBy={increaseBy} decreaseBy={decreaseBy} reset={reset}/>
        <button className="reset-btn" onClick={reset}>RESET</button>
    </div>
  )
}

export default CounterComponent