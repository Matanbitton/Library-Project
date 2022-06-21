class Book {
  constructor(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
  }
}
class Library {
  constructor() {
    this.books = [];
  }
  addBookToLibrary = (book) => {
    this.books.push(book);
  };
  getBook(bookName) {
    return this.books.find((book) => book.title == bookName);
  }
  removeFromLibrary(title) {
    this.books = this.books.filter((book) => book.title !== title);
  }
}
const library = new Library();

// this function creates the card component

function createBookCard(book) {
  const card = document.createElement("div");
  card.className = "card";
  card.dataset.title = book.title;

  const cardBookNameSection = document.createElement("p");
  cardBookNameSection.className = "card-book-name";
  cardBookNameSection.innerText = `Book Name: ${book.title}`;

  const cardAuthorNameSection = document.createElement("p");
  cardAuthorNameSection.className = "card-author-name";
  cardAuthorNameSection.innerText = `Author: ${book.author}`;

  const cardNumOfPages = document.createElement("p");
  cardNumOfPages.className = "card-num-of-pages";
  cardNumOfPages.innerText = `Pages: ${book.numPages}`;

  const readButton = document.createElement("button");
  readButton.className = "read-button";
  readButtonState(book, readButton);

  const removeButton = document.createElement("button");
  removeButton.className = "remove";
  removeButton.innerText = "Remove";
  removeButtonFunctionality(card, removeButton);

  card.append(cardBookNameSection);
  card.append(cardAuthorNameSection);
  card.append(cardNumOfPages);
  card.append(readButton);
  card.append(removeButton);
  booksContainer.append(card);
}

function readButtonState(book, button) {
  if (book.read) {
    button.innerText = "Read";
    button.style.backgroundColor = "rgb(49, 206, 49)";
  } else {
    button.innerText = "Didn't Read";
    button.style.backgroundColor = "rgb(218, 79, 79)";
  }
  button.addEventListener("click", () => {
    console.log("clicked");
    if (button.innerText == "Read") {
      book.read = false;
      button.innerText = "Didn't Read";
      button.style.backgroundColor = "rgb(218, 79, 79)";
    } else {
      button.innerText = "Read";
      book.read = true;
      button.style.backgroundColor = "rgb(49, 206, 49)";
    }
  });
}

function removeButtonFunctionality(card, button) {
  button.addEventListener("click", () => {
    card.remove();
    library.removeFromLibrary(card.dataset.title);
  });
}

const popUp = document.querySelector(".form-popup");
const modalLayover = document.querySelector(".modal-background");
const booksContainer = document.querySelector(".books-container");
const form = document.getElementById("book-form");
const bookNameInputField = document.querySelector("#book-name");
const authorNameInputField = document.querySelector("#author-name");
const numOfPagesInputField = document.querySelector("#number-of-pages");

hideForm(popUp);
hideForm(modalLayover);

function setErrorMessagesOnInputs(formInput, errorMessage) {
  formInput.addEventListener("input", () => {
    formInput.setCustomValidity("");
    formInput.checkValidity();
  });

  formInput.addEventListener("invalid", () => {
    if (formInput.value === "") {
      formInput.setCustomValidity(errorMessage);
    }
  });
}

setErrorMessagesOnInputs(bookNameInputField, "Please enter book name");
setErrorMessagesOnInputs(
  authorNameInputField,
  "Please enter the author's name"
);
setErrorMessagesOnInputs(
  numOfPagesInputField,
  "Please enter the number of pages"
);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const bookName = document.getElementById("book-name").value;
  const bookAuthor = document.getElementById("author-name").value;
  const bookNumPages = document.getElementById("number-of-pages").value;
  let read = document.getElementById("read-validation");
  if (read.checked) {
    read = true;
  } else {
    read = false;
  }
  const newBook = new Book(bookName, bookAuthor, bookNumPages, read);

  createBookCard(newBook);
  library.addBookToLibrary(newBook);
  hideForm(popUp);
  hideForm(modalLayover);
});

function showForm(element) {
  element.style.display = "block";
}
function hideForm(element) {
  element.style.display = "none";
}

const addBookButton = document.querySelector(".new-book");
addBookButton.addEventListener("click", () => {
  form.reset();
  showForm(popUp);
  showForm(modalLayover);
});
