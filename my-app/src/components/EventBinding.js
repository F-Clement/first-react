import React from "react";

class EventBinding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello",
            buttonText: "Exit",
        };
        // this.handleClick = this.handleClick.bind(this) bind method in constructor for large apps 
    }

    // handleClick() {
    //     this.setState({
    //         introduction: "Good Bye",
    //         buttonText: "Enter",
    //     });
    //     console.log(this.state.introduction);
    //     console.log(this.state.buttonText);
    // }


    // Defining event handlers as arrow functions.
    handleClick = () => {
        this.setState({
            introduction: "Good Bye",
            buttonText: "Enter",
        });
        console.log(this.state.introduction);
        console.log(this.state.buttonText);
    }

    render() {
        return(
            <div>
                <h1>{this.state.introduction}, {this.props.name} {this.props.greeting} </h1>
                {/* using arrow fxns <button onClick={() => this.handleClick()}>{this.state.buttonText}</button> */}
                {/* bind on call to handler <button onClick={this.handleClick.bind(this)}>{this.state.buttonText}</button> */}
                {/* bind added to constructor<button onClick={this.handleClick}>{this.state.buttonText}</button> */}
                 {/* define handlers as arrow fxns <button onClick={this.handleClick}>{this.state.buttonText}</button> */}
            </div>
        )
    }
}

export default EventBinding