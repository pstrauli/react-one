import React from 'react'
import { render } from 'react-dom'
import Library from './Library'


let bookList = [
  {"title": "Lowborn", "author": "Kerry Hudson", "pages": 187},
  {"title": "The Denial Of Death", "author": "Ernest Becker", "pages": 266},
  {"title": "1984", "author": "George Orwell", "pages": 156},
  {"title": "Hulk", "author": "Stan Lee", "pages": 11}

]
// array of data


// variable called Book with 3 parameters, returns HTML populated by those parameters




render(
  <Library books={bookList} />,
  document.getElementById('root'))
