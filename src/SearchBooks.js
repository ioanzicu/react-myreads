import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class SearchBooks extends Component {

  static propTypes = {
      books: PropTypes.array.isRequired,
  }

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query })
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

  render() {
    const { books } = this.props
    const { query } = this.state

    let showingBooks
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showingBooks = books.filter( (book) => match.test(book.title) )
    } else {
      showingBooks = books
    }

    showingBooks.sort(sortBy('title'))

    return (
      <div className="search-books">
        <div className="search-books-bar">
         <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">

        {showingBooks.length !== books.length && (
          <div className='showing-books'>
            <span>Now showing {showingBooks.length} of <b>{books.length}</b> total</span>
            <button onClick={this.clearQuery}>Show all</button>
          </div>
        )}

          <ol className="books-grid">
            {showingBooks.map( (book) =>
              <li key={book.title}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                      <div className="book-shelf-changer">
                          <select>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading" onClick={() => this.props.moveToCurrentlyReadingShelf(book)}>Currently Reading</option>
                            <option value="wantToRead" onClick={() => this.props.moveToWantToReadShelf(book)}>Want to Read</option>
                            <option value="read" onClick={() => this.props.moveToReadShelf(book)}>Read</option>
                            <option value="none" onClick={() => this.props.onDeleteBook(book)}>None</option>
                          </select>
                      </div>
                    </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors.join(', ')}</div>
                </div>
              </li>
            )}
          </ol>

        </div>
      </div>
    )
  }
}

export default SearchBooks
