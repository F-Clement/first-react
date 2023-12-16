import React from 'react'

function EventsFuctional() {

    function clickHandler() {
        console.log("clicked the EventsFunctional button")
    }

  return (
    <div>
        <button onClick={clickHandler}>EventsFuctional</button>
    </div>
  )
}

export default EventsFuctional