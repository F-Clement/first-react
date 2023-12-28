import React, { Component } from 'react';

export class ControlledForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            category: 'website',
            comments: ''

        };
    }

    handleNamechange = (event) => {
        this.setState({
            name: event.target.value
        });

    };

    handleComments = (event) => {
        this.setState({
            comments: event.target.value
        });
    };

    handleCategory = (event) => {
        this.setState({
            category: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    };


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Please fill out the form below.</h2>
                    <div>
                        <label htmlFor='id.name'>Your Name:</label>
                        <input
                            value={this.state.name}
                            onChange={this.handleNamechange}
                            id='id.name'
                            name='name'
                            type="text"
                        />
                    </div>
                    <div>
                        <label htmlFor='id.category'>Query Category:</label>
                        <select
                            id='id.category'
                            name='category'
                            value={this.state.category}
                            onChange={this.handleCategory}
                        >
                            <option value='website'>Website Issue</option>
                            <option value='order'>Order Issue</option>
                            <option value='general'>General Query</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='id.comments'>Comments</label>
                        <textarea
                            id='id.comments'
                            name='comments'
                            value={this.state.comments}
                            onChange={this.handleComments}

                        />
                    </div>
                    <input type="submit" value="submit" />
                </form>
            </div >
        );
    }
}

export default ControlledForm;