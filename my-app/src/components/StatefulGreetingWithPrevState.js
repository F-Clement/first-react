import React from "react";

class StatefulGreetingWithPrevState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello",
            buttonText: "Exit",
            count: 0,
        };
    }

    handleClick() {
        this.setState((prevState, prevProps)=> {
            console.log("Previous State:", prevState)
            console.log("previous Props", prevProps)

            return {
                introduction: prevState.introduction === "Hello" ? "Good Bye" : "Hello",
                buttonText: prevProps.buttonText === "Exit" ? "Enter" : "Exit",
            }

        })
    }

    incrementCount() {
        this.setState((prevState, prevProps) => {
            console.log("Previous State:", prevState)
            console.log("previous Props:", prevProps)
            return {
                count: prevState.count + 1
            }
        })
    }

    incrementFive() {
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
    }

    render() {
        return(
            <div>
                <h1>{this.state.introduction}  {this.props.name} {this.props.greeting} </h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.incrementFive()}>IncrementFive</button>
                <p>You have clicked the button <span>{this.state.count} times</span></p>
            </div>
        )
    }
}

export default StatefulGreetingWithPrevState