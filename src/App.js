import React, { Component} from 'react'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks.js'
import ListBooks from './ListBooks.js'
import * as BooksAPI from './BooksAPI'
import './App.css'

const currentlyReading = [
    {
      "style": { width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' },
      "title": 'To Kill a Mockingbird',
      "author": 'Harper Lee'
      // shelf: currentlyReading
    },
    {
      "style": { width: 128, height: 188, backgroundImage: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")' },
      "title": 'Ender\'s Game',
      "author": 'Orson Scott Card'
      // shelf: currentlyReading
    }

    // @TODO1 - create a object with all Books
    // @TODO2 - map books depending on their shelf name
    // @TODO3 - build quick live search, using filter(() => ())
    // @TODO4 - make the books to be changable their location from one shelf to another
    // based on the status property - shelf
    // @TODO5 - integrate the API
]


class BooksApp extends Component {
  state = {}

  render() {

    // Fetch API
    // let booksAPI = BooksAPI.getAll().then((response) => response)
    //                  .then(function(response) {
    //                     response.map(book => {
    //                       console.log(book.title);
    //                       console.log(book.authors);
    //                       console.log('----------')
    //                     })
    //                   });

    return (
      <div className="app">
       {/* Main Page
       <Route exact path="/" component={ListBooks}/>
       */}

       <Route exact path="/" render={() => (
         <ListBooks
            currentlyReading={currentlyReading}
         />
       )}/>

       {/* Search Page */}
       <Route path="/search" component={SearchBooks}/>
      </div>
    )
  }
}

export default BooksApp
