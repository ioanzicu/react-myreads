import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf.js'
import PropTypes from 'prop-types'

class ListBooks extends Component {

  static propTypes = {
      currentlyReading: PropTypes.array.isRequired,
      addToCurrentlyReading: PropTypes.func.isRequired,
      wantToRead: PropTypes.array.isRequired,
      read: PropTypes.array.isRequired,
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf booksList={this.props.currentlyReading} />
            <Shelf
              booksList={this.props.wantToRead}
              addToCurrentlyReading={this.props.addToCurrentlyReading}
            />
            <Shelf booksList={this.props.read} />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search" className="open-search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
