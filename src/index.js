import React from 'react'
import { render } from 'react-dom'

const Book = ({title, author, pages}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages} pages</p>
    </section>
  )
}

const Library = () => {
  return (
    <div>
      <Book title="1984" author="George Orwell" pages={184}/>
      <Book title="The Denial Of Death" author="Ernest Becker" pages={266}/>
      <Book title="Lowborn" author="Kerry Hudson" pages={187}/>
    </div>
  )
}

render(
  <Library />,
  document.getElementById('root'))
