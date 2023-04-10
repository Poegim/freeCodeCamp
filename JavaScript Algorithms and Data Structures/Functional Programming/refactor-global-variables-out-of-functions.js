// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList, bookName) {

  let localBookList = [...bookList]
  localBookList.push(bookName);
  return localBookList;
  
  // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
  
  let localBookList = [...bookList]
  const book_index = localBookList.indexOf(bookName);

  if (book_index >= 0) {

    localBookList.splice(book_index, 1);
    return localBookList;

    // Change code above this line
    }
}