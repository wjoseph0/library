let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read,
  this.info = function() {
    return `${title} by ${author}, ${pages} pages, ${read}`
  }
}

function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function displayMyLibrary() {
  const booksContainer = document.querySelector("#books-container");
  
  if(myLibrary.length === 0) booksContainer.textContent = "No books yet!";
  else {booksContainer.textContent = ""}

  myLibrary.forEach(bookObj => {
    let bookDiv = document.createElement("div");
    bookDiv.textContent = bookObj.info();
    bookDiv.classList.add("book");
    booksContainer.appendChild(bookDiv);
  })
}

function showForm() {
  const body = document.querySelector("body");

  let formContainer = document.createElement("div")
  formContainer.id = "form-container";

  // let titleContainer = document.createElement("div");
  // titleContainer.classList.add("form-section-container");
  let titleLabelContainer = document.createElement("div");
  titleLabelContainer.classList.add("form-labels");
  let titleLabel = document.createElement("div");
  titleLabel.textContent = "Title:";
  let titleInput = document.createElement("input");
  titleInput.id = "title-input";
  titleLabelContainer.appendChild(titleLabel);
  formContainer.appendChild(titleLabelContainer);
  formContainer.appendChild(titleInput);
  // formContainer.appendChild(titleContainer);

  // let authorContainer = document.createElement("div")
  // authorContainer.classList.add("form-section-container");
  let authorLabelContainer = document.createElement("div");
  authorLabelContainer.classList.add("form-labels");
  let authorLabel = document.createElement("div");
  authorLabel.textContent = "Author:";
  let authorInput = document.createElement("input");
  authorLabelContainer.appendChild(authorLabel);
  formContainer.appendChild(authorLabelContainer);
  formContainer.appendChild(authorInput);
  // formContainer.appendChild(authorContainer);

  // let pagesContainer = document.createElement("div");
  // pagesContainer.classList.add("form-section-container");
  let pagesLabelContainer = document.createElement("div");
  pagesLabelContainer.classList.add("form-labels");
  let pagesLabel = document.createElement("div");
  pagesLabel.textContent = "Pages:";
  let pagesInput = document.createElement("input");
  pagesInput.setAttribute("type", "number")
  pagesLabelContainer.appendChild(pagesLabel);
  formContainer.appendChild(pagesLabelContainer);
  formContainer.appendChild(pagesInput);
  // formContainer.appendChild(pagesContainer);

  // let readContainer = document.createElement("div");
  // readContainer.classList.add("form-section-container");
  let readLabelContainer = document.createElement("div");
  readLabelContainer.classList.add("form-labels");
  let readLabel = document.createElement("div");
  readLabel.textContent = "Have you read it?";
  let readInput = document.createElement("input");
  readInput.setAttribute("type", "checkbox");
  readLabelContainer.appendChild(readLabel);
  formContainer.appendChild(readLabelContainer);
  formContainer.appendChild(readInput);
  // formContainer.appendChild(readContainer);

  // let formActionContainer = document.createElement("div");
  // formActionContainer.style.backgroundColor = "blue";
  let cancelButton = document.createElement("button");
  cancelButton.style.backgroundColor = "pink";
  cancelButton.style.border = "none";
  cancelButton.textContent = "Cancel";
  let submitButton = document.createElement("button");
  submitButton.style.backgroundColor = "lightgreen";
  submitButton.style.border = "none";
  submitButton.textContent = "Add";
  formContainer.appendChild(cancelButton);
  formContainer.appendChild(submitButton);
  // formContainer.appendChild(formActionContainer)

  body.appendChild(formContainer);

  cancelButton.addEventListener("click", event => {
    body.removeChild(formContainer);
  });

  submitButton.addEventListener("click", () => {
    addBookToLibrary(titleInput, authorInput, pagesInput, readInput);
    body.removeChild(formContainer);
    displayMyLibrary();
  });
}

const addBookButton = document.querySelector("#add-book-button");
addBookButton.addEventListener("click", () => {showForm()});

displayMyLibrary();