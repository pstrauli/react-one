import React from 'react'
import { render } from 'react-dom'

let bookList = [
  {"title": "Lowborn", "author": "Kerry Hudson", "pages": 187},
  {"title": "The Denial Of Death", "author": "Ernest Becker", "pages": 266},
  {"title": "1984", "author": "George Orwell", "pages": 156},
  {"title": "Hulk", "author": "Stan Lee", "pages": 11}

]
// array of data

const Book = ({title, author, pages}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages} pages</p>
    </section>
  )
}
// variable called Book with 3 parameters, returns HTML populated by those parameters

const Library = ({books}) => {
  return (
    <div>
      {books.map(
        (book, i) => <Book 
                        key={i}
                        title={book.title} 
                        author={book.author} 
                        pages={book.pages}/>
      )}
    </div>
  )
}
// variable called Library
// takes argument of books which in render method is equated with the variable booKlist with 
// all the info in it.
// returns a div containing a new array created by .map() which takes books (aka bookList) and 
// creates for each iteration an HTML tag 

render(
  <Library books={bookList} />,
  document.getElementById('root'))
