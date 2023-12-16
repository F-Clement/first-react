import React, { Component } from 'react'

export class EventsClass extends Component {

    clickHandler() {
        console.log("Clicked the EventsClass button")
    }


  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>EventsClass</button>
      </div>
    )
  }
}

export default EventsClass