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
        this.setState({
            introduction: this.state.introduction === "Hello" ? "Good Bye" : "Hello",
            buttonText: this.state.buttonText === "Exit" ? "Enter" : "Exit",
        },() => {
            console.log('new state', this.state.introduction);
            console.log('new state', this.state.buttonText);
        });
        console.log(this.state.introduction);
        console.log(this.state.buttonText);
    }

    incrementCount() {
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count);
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