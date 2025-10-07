const library = [];

function Book(name, author, releaseDate) {
  this.id = crypto.randomUUID();
  this.name = name;
  this.author = author;
  this.releaseDate = releaseDate;
  this.isRead = "Unread";
  this.read = () => {
    if (this.isRead === "Read") {
      this.isRead = "Unread";
    } else {
      this.isRead = "Read";
    }
  };
}

function addBookToLibrary(book) {
  library.push(book);
}

function displayBooks(library) {
  const booksContainer = document.getElementById("books");
  booksContainer.innerHTML = "";
  for (book in library) {
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

    var isReadButton = document.createElement("button");
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

    isReadText = document.createElement("p");
    isReadText.className = "unread";

    isReadText.textContent = library[book].isRead;

    removeButton = document.createElement("button");
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
newBookButton.addEventListener("click", () => {
  const form = document.getElementById("form-container");
  form.style.display = "block";
});

const form = document.getElementById("book-form");
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", () => {
  const answers = form.getElementsByTagName("input");
  const book = new Book(answers[0].value, answers[1].value, answers[2].value);
  addBookToLibrary(book);
  displayBooks(library);
});
