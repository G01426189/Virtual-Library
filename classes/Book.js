// import the Media class:
const Media = require('./Media');
// create your Book class:
class Book extends Media (author, numPages, rating, title, year, genre){
    super(title, year, genre)
    author = this.author
    numPages = this.numPages
    rating = this.rating
}
summary(){
    return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`;
  }
  static highestRating(books) {
    let maxRating = -Infinity;
    let bookWithHighestRating = null;
    books.forEach(book => {
      if (book.rating > maxRating) {
        maxRating = book.rating;
        bookWithHighestRating = book;
      }
    });
    return bookWithHighestRating;
  }



// don't change below
module.exports = Book;
