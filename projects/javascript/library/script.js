const library = [];

class Book {
  constructor(name, author, releaseDate) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.releaseDate = releaseDate;
    this.isRead = "Unread";
  }
  read() {
    if (this.isRead === "Unread") {
      this.isRead = "Read";
    } else {
      this.isRead = "Unread";
    }
  }
}

function addBookToLibrary(book) {
  library.push(book);
}

function displayBooks(library) {
  const booksContainer = document.getElementById("books");
  booksContainer.innerHTML = "";
  for (let book in library) {
    const bookContainer = document.createElement("div");
    bookContainer.className = "book-container";
    bookContainer.id = `${library[book].id}`;

    const bookName = document.createElement("p");
    bookName.textContent = library[book].name;
    bookName.className = "book-name";

    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = library[book].author;
    bookAuthor.className = "book-author";

    const releaseDate = document.createElement("p");
    releaseDate.className = "book-release-date";
    releaseDate.textContent = library[book].releaseDate;

    let isReadButton = document.createElement("button");
    isReadButton.className = "is-read-button";
    isReadButton.textContent = "Read";
    isReadButton.addEventListener("click", (button) => {
      const id = button.target.parentElement.id;
      const book = library.find((b) => b.id === id);
      const readText =
        button.target.parentElement.querySelector(".unread, .read");
      if (book) {
        book.read();
        readText.textContent = book.isRead;
        readText.className = book.isRead === "Read" ? "read" : "unread";
      }
    });

    let isReadText = document.createElement("p");
    isReadText.className = library[book].isRead === "Read" ? "read" : "unread";

    isReadText.textContent = library[book].isRead;

    let removeButton = document.createElement("button");
    removeButton.className = "remove-button";
    removeButton.textContent = "Remove Book";

    booksContainer.appendChild(bookContainer);
    bookContainer.appendChild(bookName);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(releaseDate);
    bookContainer.appendChild(isReadButton);
    bookContainer.appendChild(removeButton);
    bookContainer.appendChild(isReadText);

    removeButton.addEventListener("click", () => {
      booksContainer.removeChild(bookContainer);
      library.splice(library.indexOf(book), 1);
    });
  }
}

const newBookButton = document.getElementById("add-book");
newBookButton.onclick = () => {
  const form = document.getElementById("form-container");
  form.style.display = "block";
};

const form = document.getElementById("book-form");
const formContainer = document.getElementById("form-container");
const submitButton = document.getElementById("submit");

submitButton.onclick = () => {
  const answers = form.getElementsByTagName("input");
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  const book = new Book(answers[0].value, answers[1].value, answers[2].value);
  addBookToLibrary(book);
  displayBooks(library);
  formContainer.style.display = "none";
};
