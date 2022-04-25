const myLibrary = [];
let booksCount = -1;

function book(title,author,numPages,read){
    this.title = title
    this.author = author
    this.numPages = numPages
    this.read = read;
}

book.prototype.addBookToLibrary = function(){
    myLibrary.push(this);
}
// this function creates the card component 

function createBookCard(book) {
    booksCount++;

    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.numPlaceInLibrary = booksCount;

    const cardBookNameSection = document.createElement('p')
    cardBookNameSection.className = 'card-book-name';
    cardBookNameSection.innerText = `Book Name: ${book.title}`;

    const cardAuthorNameSection = document.createElement('p')
    cardAuthorNameSection.className = 'card-author-name';
    cardAuthorNameSection.innerText = `Author: ${book.author}` ;

    const cardNumOfPages = document.createElement('p');
    cardNumOfPages.className = 'card-num-of-pages';
    cardNumOfPages.innerText =`Pages: ${book.numPages}`;

    const readButton = document.createElement('button')
    readButton.className = 'read-button';
    console.log(book.read);
    readButtonState(book,readButton);


    const removeButton = document.createElement('button')
    removeButton.className = 'remove';
    removeButton.innerText = 'Remove';
    removeButtonFunctionality(card,removeButton);

    card.append(cardBookNameSection)
    card.append(cardAuthorNameSection)
    card.append(cardNumOfPages)
    card.append(readButton)
    card.append(removeButton)
    booksContainer.append(card)
}

function readButtonState(book,button) {
    if (book.read) {
        button.innerText = "Didn't Read";
        button.style.backgroundColor = "rgb(218, 79, 79)";
    }else {
        button.innerText = "Read";
        button.style.backgroundColor = "rgb(49, 206, 49)";
    }
    button.addEventListener("click", () => {
        

        if(button.innerText == "Read") {
            book.read = true;
            button.innerText = "Didn't Read";
            button.style.backgroundColor = "rgb(218, 79, 79)";
        } else{
           button.innerText = "Read";
           book.read = false;
           button.style.backgroundColor = "rgb(49, 206, 49)";
           
        }
        console.log(book.read)

        console.log(myLibrary)
     
    });
        
}

function removeButtonFunctionality(card,button){
    button.addEventListener("click", () => {
        card.remove();
        console.log(card.dataset.numPlaceInLibrary);
        removeFromLibrary(card.dataset.numPlaceInLibrary);
        
     })
}


const popUp = document.querySelector('.form-popup');
const modalLayover = document.querySelector('.modal-background');
const booksContainer = document.querySelector('.books-container');
const wrapper = document.querySelector('.wrapper');

hideForm(popUp);
hideForm(modalLayover);

const form = document.getElementById('book-form');

form.addEventListener('submit', (event) =>  {
    event.preventDefault();
    
    const bookName = document.getElementById('book-name').value;
    const bookAuthor = document.getElementById('author-name').value;
    const bookNumPages = document.getElementById('number-of-pages').value;
    let read = document.getElementById('read-validation');
    if(read.checked) {
        read = true;
    }else {
        read = false;
    }
    const newBook = new book(bookName, bookAuthor, bookNumPages, read);
    createBookCard(newBook);
    newBook.addBookToLibrary();
    hideForm(popUp);
    hideForm(modalLayover);
});
    

function showForm(element) {
    element.style.display = 'block';
}
function hideForm(element){
    element.style.display = 'none';
}

const addBookButton = document.querySelector('.new-book');
addBookButton.addEventListener("click", () => { 
    form.reset();
    showForm(popUp);
    showForm(modalLayover);
    console.log(myLibrary)
});


function removeFromLibrary(bookPlaceInArray) {
     delete(myLibrary[bookPlaceInArray]);
     console.log(myLibrary);
}   
