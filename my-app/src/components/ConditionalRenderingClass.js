import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: true,
         isLoggedIn: true,
      }
    }


    render() {
        return (
        <div>
            <h1>
                {this.state.isLoaded ? "Data Loaded" : "Loading..."}
            </h1>
            {this.state.isLoggedIn ? (
                <div>
                    <p>Welcome to the Site. Please complete the steps below</p>
                    <ol>
                        <li>confirm your email</li>
                        <li>Confirm your password</li>
                        <li>Please subscribe to our newsletter</li>
                    </ol>
                </div>
            ) : (<p>Please Sign in.</p>)}
        </div>
        )
    }
}

export default ConditionalRenderingClass