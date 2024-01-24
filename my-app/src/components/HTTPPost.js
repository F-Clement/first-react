import React, { Component } from 'react';
import axios from 'axios';

export class HTTPPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            apiResponse: null,
            error: null

        };
    }

    postToApi = () => {
        axios.post(
            'https://jsonplaceholder.typicode.com/posts',
            {
                title: 'Hello World',
                body: 'It works',
                userId: 123
            }
        )
            .then(response => {
                this.setState({
                    apiResponse: response.data
                });
            })
            .catch(error => {
                this.setState({
                    error: error.message
                });
            });

    };
    render() {
        const apiResponse = this.state.apiResponse;
        return (
            <div>
                <button onClick={this.postToApi}>
                    Create Post
                </button>
                {
                    apiResponse
                        ? (
                            <div>
                                <h1>{apiResponse.title}</h1>
                                <p>Post ID: {apiResponse.id}</p>
                                <p>{apiResponse.body}</p>
                                <p>User ID: {apiResponse.userId}</p>
                            </div>
                        )
                        : <p>{this.state.error}</p>
                }
            </div>
        );
    }
}

export default HTTPPost;