let myLibrary = [];

function book(title,author,numPages,read){
    this.title = title
    this.author = author
    this.numPages = numPages
    this.read = read;
}
book.prototype.addBookToLibrary = function(){
    myLibrary.push(this);
}

book.prototype.info = function() {
        if (this.read) {
            return `${this.title} by ${this.author},  ${this.numPages} pages, read already.`
        }
        if (!this.read) {
            return `${this.title} by ${this.author},  ${this.numPages} pages, not read yet.`;
        }      
    }
const popUp = document.querySelector('.form-popup');
const modalLayover = document.querySelector('.modal-background')
popUp.style.visibility = 'hidden';
modalLayover.style.visibility = 'hidden';
const wrapper = document.querySelector('.wrapper');


const form = document.getElementById('book-form');


form.addEventListener('submit', (event) =>  {

    event.preventDefault();
    popUp.style.display = 'block';
    const bookName = document.getElementById('book-name').value;
    const bookAuthor = document.getElementById('author-name').value;
    const bookNumPages = document.getElementById('number-of-pages').value;
    let read = document.getElementById('read-validation');
    if(read.checked) {
        read = true;
    }else {
        read = false;
    }
    
    popUp.style.visibility = 'hidden';
    modalLayover.style.visibility = 'hidden';

    alert(`${bookName}, ${bookAuthor}, ${bookNumPages}, ${read}`);
    const book1 = new book(bookName, bookAuthor, bookNumPages, read);
    book1.addBookToLibrary();
});


let addBookButton = document.querySelector('.new-book');
addBookButton.addEventListener("click", () => { 
    form.reset();
    popUp.style.visibility = `visible`;
    modalLayover.style.visibility = 'visible';

})





console.log(myLibrary)