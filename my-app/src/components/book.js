import React from 'react'

function book(props) {
  return (
    <div> 
            return(
                <div>
                    <h5>{props.book.title}</h5>
                    <p>{props.book.author}</p>
                    <p>{props.book.pages}</p>
                </div>
            )
    </div>
  )
}

export default book