import React, { useState, useEffect } from 'react';

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);

    useEffect(() => {
        console.log("Count 1 effect");
        document.title = count;
    }, [count]);


    useEffect(() => {
        console.log('Creating timer');
        const interval = setInterval(() => {
            console.log("Interval Executed");
            //while learning we had + 1 but it doubles the count for me
            //So when I used 0.5 it worked.
            setTime(time => time + 1);
        }, 1000);
        return () => {
            //cleanup function
            console.log("Cleaning up");
            clearInterval(interval);
        };

    }, []);


    return (
        <div>
            <button onClick={
                () => setCount(count => count + 1)
            }>
                Increment Count ({count})
            </button>

            <h2>Time is {time}</h2>
        </div>
    );
}

export default UseEffectCounter;