import React from 'react'

function RederingLists() {
    const bookList = [
        'to kill a mockingbird',
        'the great gatsby',
        'the catcher in the rye'
    ]

    const books = [
        {
            title: 'to kill a mockingbird',
            author: 't writer',
            pages: 206

        },
        {
            title: 'the great gatsby',
            author: 'g writer',
            pages: 200
        },
        {
            title: 'the catcher in the rye',
            author: 'c writer',
            pages: 201
        }
    ]
  return (
    <div>
        {bookList.map(book => {
            return <h2>{book}</h2>
        })}

        <hr/>
        {books.map(book => {
            return(
                <div>
                    <h5>{book.title}</h5>
                    <p>{book.author}</p>
                    <p>{book.pages}</p>
                </div>
            )
        })}
    </div>
  )
}

export default RederingLists