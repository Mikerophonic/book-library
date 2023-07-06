let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${read}`
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

const book1 = new Book("Harry Potter", "JK Rowling", "300", "not read yet");
const book2 = new Book("Lord of the Rings", "JRR Tolkien", "1000", "read");
const book3 = new Book("made up book", "H.F. Corn Syrup", "42069", "not read yet");

//UI logic

function listBooks(myLibrary) {
    let booksDiv = document.getElementById("books-list")
    booksDiv.innertext = null;
    const ul = document.createElement("ul");
    myLibrary.forEach(function (book, index) {
        const title = myLibrary[index].title;
        const li = document.createElement("li");
        li.append(title);
        ul.append(li);
    })
    booksDiv.append(ul);
}
