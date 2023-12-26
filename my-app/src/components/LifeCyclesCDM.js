import React, { Component } from 'react';
import LifeCyclesCDMChild from './LifeCyclesCDMChild';

export class LifeCyclesCDM extends Component {

    constructor(props) {
        console.log("Constructor Called");
        super(props);

        this.state = {
            data: 'Loading'
        };
    }

    getData() {
        console.log("getData() Called");
        setTimeout(() => {
            console.log("Data Fetche!");
            this.setState({
                data: "Loaded"
            });
        }, 3000);
    }

    componentDidMount() {
        console.log("Component Mounted");
        this.getData();
    }

    render() {
        console.log("Render method called");
        return (
            <div>
                <h1>{this.state.data}</h1>
                <LifeCyclesCDMChild />
            </div>
        );
    }
}

export default LifeCyclesCDM;
