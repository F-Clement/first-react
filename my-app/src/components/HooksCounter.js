import React, { useState } from 'react';

function HooksCounter() {

    // count is a stationary property
    // setCount is a method to update count
    // useState initializes count to 0
    const [count, setCount] = useState(0);


    return (
        <div>
            <h2>Hello I am a functional component with hooks</h2>
            <p>You clicked {count} times.</p>

            <button onClick={() => setCount(count => count + 1)}>
                Increment Counter
            </button>


        </div>
    );
}

export default HooksCounter;