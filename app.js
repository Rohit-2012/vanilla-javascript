const titleEl = document.getElementById("title");
const authorEl = document.getElementById("author");
const isbnEl = document.getElementById("isbn");
const list = document.getElementById("book-list");

// Book class: Represents a book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI class: Handles UI tasks
class UI {
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><button class="delete">❌</button></td>
        `;
    list.appendChild(row);
  }

  static clearInputFields() {
    titleEl.value = "";
    authorEl.value = "";
    isbnEl.value = "";
  }

  static deleteBook(elem) {
    if (elem.classList.contains("delete")) {
      elem.parentElement.parentElement.remove();
    }
  }
}

// Store class: Handles Storage
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();

    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  static deleteBookFromLocalStorage(isbn) {
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
  }
}

// Event: Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks());

// Event: Add a book
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const title = titleEl.value;
  const author = authorEl.value;
  const isbn = isbnEl.value;

  if (title === "" || author === "" || isbn === "") {
    alert("Please fill out all fields");
  } else {
    const book = new Book(title, author, isbn);
    UI.addBookToList(book);
    Store.addBook(book);
    UI.clearInputFields();
  }
});

// Event: Remove a book
document.getElementById("book-list").addEventListener("click", (e) => {
  const rowEl = e.target;
    UI.deleteBook(rowEl);
  Store.deleteBookFromLocalStorage(
    rowEl.parentElement.previousElementSibling.textContent
    );
});
