import React from "react";

// function FunctionalGreeting() {
//     return <h1>Hello from React</h1>
// }

const FunctionalGreetingWithProps = (props) => <h1>Hello, {props.name} {props.greeting}</h1>

export default FunctionalGreetingWithProps