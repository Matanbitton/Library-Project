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

const addBookButton = document.querySelector('.new-book');
addBookButton.addEventListener('click', () => {
    let newBook = new book()
   
})

function userReadBookStat() {
    let readBook = true;
    if (confirm("Have You Read The Book?")) {
        return readBook;
    }
    readBook = false;
    return readBook;
}


const book1 = new book("Lord Of The Rings", "J.R.R. Tolkien",295)
const book2 = Object.create(book1);
book1.addBookToLibrary()
book2.addBookToLibrary();

console.log(book1.info())
console.log(book1.author)
console.log(book2.author)

console.log(myLibrary)