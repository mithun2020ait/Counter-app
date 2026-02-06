import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }   

    const reset = () => {
        setCount(0);
    }

    return (
        <div className='count-container'>
            <h2 className='counter-display'> {count}</h2>
            <button className='count-button' onClick={decrement}>Decrement</button>
            <button className='count-button' onClick={reset}>Reset</button>
            <button className='count-button' onClick={increment}>Increment</button>
            
        </div>
    );
}

export default Counter;