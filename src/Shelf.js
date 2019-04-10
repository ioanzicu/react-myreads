import React, { Component } from 'react'

class Shelf extends Component {

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.booksList[0].shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">

            {this.props.booksList[0].books.map( (book) =>
              <li key={book.title}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={book.style}></div>
                    <div className="book-shelf-changer">
                      <select>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading" onClick={() => this.props.addToCurrentlyReading(book)}>Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.author}</div>
                </div>
              </li>
            )}

          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf
