import React from 'react'

function UserMessage(props) {
  return (
    <div>
        {props.isLoggedIn ? (
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

export default UserMessage