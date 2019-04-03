import React, { Component} from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import SearchBooks from './SearchBooks.js'
import ListBooks from './ListBooks.js'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {}

  render() {
    return (
      <div className="app">
       {/* Main Page */}
       <Route exact path="/" component={ListBooks}/>
       {/* Search Page */}
       <Route path="/search" component={SearchBooks}/>
      </div>
    )
  }
}

export default BooksApp
