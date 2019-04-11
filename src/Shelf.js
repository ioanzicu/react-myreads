import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Shelf extends Component {

  static propTypes = {
      booksList: PropTypes.array.isRequired,
      moveToCurrentlyReadingShelf: PropTypes.func.isRequired,
      moveToWantToReadShelf: PropTypes.func.isRequired,
      moveToReadShelf: PropTypes.func.isRequired,
      onDeleteBook: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">

          {this.props.booksList.map( (book) =>
            book.shelfName === this.props.shelfName && (
              <li key={book.title}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{width: 128, height: 188, backgroundImage: `url(${book.url})`}}></div>
                    <div className="book-shelf-changer">
                      <select autofocus>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading" onClick={() => this.props.moveToCurrentlyReadingShelf(book)}>Currently Reading</option>
                        <option value="wantToRead" onClick={() => this.props.moveToWantToReadShelf(book)}>Want to Read</option>
                        <option value="read" onClick={() => this.props.moveToReadShelf(book)}>Read</option>
                        <option value="none" onClick={() => this.props.onDeleteBook(book)}>None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.author}</div>
                </div>
              </li>
            )
          )}

          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf
