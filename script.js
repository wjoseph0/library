let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
}

Book.prototype.toggleRead = function() {
  if (this.read === false) {
    this.read = true;
  }

  else if (this.read === true) {
    this.read = false;
  }
};

function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function displayMyLibrary() {
  const booksContainer = document.querySelector("#books-container");
  
  if(myLibrary.length === 0) {
    booksContainer.textContent = "No books yet!";
  }
  else {booksContainer.textContent = ""}

  let index = 0;
  myLibrary.forEach(bookObj => {
    let bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    let bookInfoDiv = document.createElement("div");
    bookInfoDiv.id = "bookObjInfoDiv";
    let bookTitle = document.createElement("p");
    bookTitle.textContent = `"${bookObj.title}"`;
    bookInfoDiv.appendChild(bookTitle);

    let bookAuthor = document.createElement("p");
    bookAuthor.textContent = bookObj.author;
    bookInfoDiv.appendChild(bookAuthor);

    let bookPages = document.createElement("p");
    bookPages.textContent = `${bookObj.pages} pages`;
    bookInfoDiv.appendChild(bookPages);

    bookDiv.appendChild(bookInfoDiv);


    let buttonsDiv = document.createElement("div");
    buttonsDiv.id = "bookObjButtonsDiv";

    let readButton = document.createElement("button");
    readButton.textContent = "NOT READ";
    readButton.style.backgroundColor = "orange";
    readButton.style.border = "none";
    readButton.style.borderRadius = "10px";
    readButton.style.fontSize = "16px";

    let delButton = document.createElement("button");
    delButton.textContent = "x";
    delButton.id = index;
    delButton.style.fontSize = "26px";
    delButton.style.border = "none";
    delButton.style.borderRadius = "10px";
    delButton.style.backgroundColor = "pink";

    buttonsDiv.appendChild(readButton);
    buttonsDiv.appendChild(delButton);
    bookDiv.appendChild(buttonsDiv);

    booksContainer.appendChild(bookDiv);
    index++;

    readButton.addEventListener("click", () => {
      bookObj.toggleRead();
      if (bookObj.read === false) {
        readButton.style.backgroundColor = "orange";
        readButton.textContent = "NOT READ";
        readButton.style.fontSize = "16px";
      }
      else if (bookObj.read === true) {
        readButton.style.backgroundColor = "#90ee90";
        readButton.textContent = "READ";
        readButton.style.fontSize = "16px";
      }
    });

    delButton.addEventListener("click", () => {
      myLibrary.splice(delButton.id, 1);
      displayMyLibrary();
    });
  })
}

function showForm() {
  const body = document.querySelector("body");

  let formContainer = document.createElement("form")
  formContainer.id = "form-container";


  let titleLabelContainer = document.createElement("div");
  titleLabelContainer.classList.add("form-labels");
  let titleLabel = document.createElement("div");
  titleLabel.textContent = "Title:";
  let titleInput = document.createElement("input");
  titleInput.id = "title-input";
  titleInput.required = true;
  titleInput.style.margin = "20px 20px 20px 0px";
  titleInput.style.textAlign = "center";
  titleInput.style.fontSize = "24px";
  titleLabelContainer.appendChild(titleLabel);
  formContainer.appendChild(titleLabelContainer);
  formContainer.appendChild(titleInput);
  

  let authorLabelContainer = document.createElement("div");
  authorLabelContainer.classList.add("form-labels");
  let authorLabel = document.createElement("div");
  authorLabel.textContent = "Author:";
  let authorInput = document.createElement("input");
  authorInput.required = true;
  authorInput.style.margin = "20px 20px 20px 0px";
  authorInput.style.textAlign = "center";
  authorInput.style.fontSize = "24px";
  authorLabelContainer.appendChild(authorLabel);
  formContainer.appendChild(authorLabelContainer);
  formContainer.appendChild(authorInput);
  

  let pagesLabelContainer = document.createElement("div");
  pagesLabelContainer.classList.add("form-labels");
  let pagesLabel = document.createElement("div");
  pagesLabel.textContent = "Pages:";
  let pagesInput = document.createElement("input");
  pagesInput.setAttribute("type", "number")
  pagesInput.required = true;
  pagesInput.style.margin = "20px 20px 20px 0px";
  pagesInput.style.textAlign = "center";
  pagesInput.style.fontSize = "24px";
  pagesLabelContainer.appendChild(pagesLabel);
  formContainer.appendChild(pagesLabelContainer);
  formContainer.appendChild(pagesInput);
 

  let cancelButton = document.createElement("button");
  cancelButton.style.backgroundColor = "pink";
  cancelButton.style.border = "none";
  cancelButton.textContent = "Cancel";


  let submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.style.backgroundColor = "lightgreen";
  submitButton.style.border = "none";
  submitButton.textContent = "Add";
  formContainer.appendChild(cancelButton);
  formContainer.appendChild(submitButton);
  
  body.appendChild(formContainer);


  cancelButton.addEventListener("click", event => {
    body.removeChild(formContainer);
  });

  formContainer.addEventListener("submit", () => {
    addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, false);
    body.removeChild(formContainer);
    displayMyLibrary();
  });
}

const addBookButton = document.querySelector("#add-book-button");
addBookButton.addEventListener("click", () => {showForm()});

displayMyLibrary();