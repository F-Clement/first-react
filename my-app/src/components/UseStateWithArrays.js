import React, { useState } from 'react';

function UseStateWithArrays() {

    const [nums, setNums] = useState([1, 2, 3]);

    const addNums = () => {
        setNums([...nums, nums.length + 1]);
    };

    const buggyPushNums = () => {
        nums.push(nums.length + 1);
        setNums(nums);
        console.log(nums);
    };

    const removeLastNum = () => {
        setNums(
            nums.filter((item, idx) => {
                return idx !== nums.length - 1;
            })
        );

    };





    return (

        <div>
            <button onClick={addNums}> Add Item </button>
            <button onClick={buggyPushNums}>Push Nubs</button>
            <button onClick={removeLastNum}>Remove Item</button>
            {nums.map(num => <li key={num}>{num}</li>)}
        </div>
    );
}

export default UseStateWithArrays;