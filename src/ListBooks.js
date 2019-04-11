import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf.js'
import PropTypes from 'prop-types'

class ListBooks extends Component {

  static propTypes = {
      booksList: PropTypes.array.isRequired,
      moveToCurrentlyReadingShelf: PropTypes.func.isRequired,
      moveToWantToReadShelf: PropTypes.func.isRequired,
      moveToReadShelf: PropTypes.func.isRequired,
      onDeleteBook: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>

            <Shelf
              booksList={this.props.booksList}
              moveToCurrentlyReadingShelf={(book) => {
                  this.props.moveToCurrentlyReadingShelf(book)
              }}
              moveToWantToReadShelf={(book) => {
                  this.props.moveToWantToReadShelf(book)
              }}
              moveToReadShelf={(book) => {
                  this.props.moveToReadShelf(book)
              }}
              onDeleteBook={(book) => {
                  this.props.onDeleteBook(book)
              }}
              title={'Currently Reading'}
              shelfName={'currently reading'}
            />

            <Shelf
              booksList={this.props.booksList}
              moveToCurrentlyReadingShelf={(book) => {
                  this.props.moveToCurrentlyReadingShelf(book)
              }}
              moveToWantToReadShelf={(book) => {
                  this.props.moveToWantToReadShelf(book)
              }}
              moveToReadShelf={(book) => {
                  this.props.moveToReadShelf(book)
              }}
              onDeleteBook={(book) => {
                  this.props.onDeleteBook(book)
              }}
              title={'Want To Read'}
              shelfName={'want to read'}
            />

            <Shelf
              booksList={this.props.booksList}
              moveToCurrentlyReadingShelf={(book) => {
                  this.props.moveToCurrentlyReadingShelf(book)
              }}
              moveToWantToReadShelf={(book) => {
                  this.props.moveToWantToReadShelf(book)
              }}
              moveToReadShelf={(book) => {
                  this.props.moveToReadShelf(book)
              }}
              onDeleteBook={(book) => {
                  this.props.onDeleteBook(book)
              }}
              title={'Read'}
              shelfName={'read'}
            />

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
