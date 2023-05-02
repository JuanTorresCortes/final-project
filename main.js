
let canvas = document.querySelector("#canvas");
let form = document.querySelector("#form1");
let input = document.querySelector("#input");
// this is where my myWishList and MyFavoritesList will be rendered
let listCanvas = document.querySelector("#listCanvas"); 
let buttonForWshList = document.querySelector("#renderWishListButton")
let buttonForFavorites = document.querySelector("#renderFavoritesButton")
let displayDiv = document.querySelector("#catDiv");

const bookCategory = [
  {
    title: "Biography",
    src: "img/clay-banks-pNEmlb1CMZM-unsplash.jpg",
  },
  {
    title: "History",
    src: "img/ronda-darby-HbMLSB-uhQY-unsplash.jpg",
  },
  {
    title: "Science",
    src: "img/rohan-makhecha-jw3GOzxiSkw-unsplash.jpg",
  },
  {
    title: "Computer Science",
    src: "img/adi-goldstein-EUsVwEOsblE-unsplash.jpg",
  },
  {
    title: "Wood working",
    src: "img/austin-ramsey-nmXi-HCD_F8-unsplash.jpg",
  },
  {
    title: "For Dummies",
    src: "img/dummy-books-for-dummies.jpg",
  },
  {
    title: "JavaScript",
    src: "img/gabriel-heinzer-g5jpH62pwes-unsplash.jpg",
  },
  {
    title: "HTML",
    src: "img/jackson-sophat-_t-l5FFH8VA-unsplash.jpg",
  },
  {
    title: "CSS",
    src: "img/pankaj-patel-6JVlSdgMacE-unsplash.jpg",
  },
  {
    title: "Engineering",
    src: "img/shane-rounce-1ZZ96uESRJQ-unsplash.jpg",
  },
];

let myFavoritesList = [];
let myWishList = [];


buttonForWshList.addEventListener("click", function () {
    if (myWishList.length === 0) {
      alert("YOU HAVE NO BOOKS SAVED");
    } else {
      renderForWishList(myWishList);
    }
  });

function renderForWishList(myWishList) {

    //container element to hold the cards for each book
    const container = document.createElement("div");
    container.classList.add("row");
    container.style.border = "3px solid red"

    ///button to close list
    let closeButton = document.createElement("button")
    closeButton.innerText = "close wish list"
    closeButton.value = 1;
    closeButton.classList.add("btn", "btn-danger");
    closeButton.addEventListener("click", closeList)
    container.appendChild(closeButton)

    let header = document.createElement("h1");
    header.innerText = "My Wish List"
    container.appendChild(header)

    myWishList.forEach((book, index) => { 
        const bookObj = JSON.parse(book)
        let bookTitle = bookObj.title
        let imgSrc = bookObj.src;
    
        // Create a column element to hold the card
        const col = document.createElement("div");
        // responsive bootstrap grid layout
        col.classList.add("col-6", "col-md-4", "col-lg-3", "mb-4");
    
    //     // Create a card element and set its class
        const card = document.createElement("div");
        card.classList.add("card", "h-100");
    
    //     // Create an image element and set its source and alt text
        const img = document.createElement("img");
        img.classList.add("card-img-top");
        img.src = imgSrc;
        card.appendChild(img);
    
    //     button for delete
        let objBook = {
          title: bookTitle,
          src: imgSrc,
        };
    //     // removes book from list
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "delete";
        deleteButton.value = JSON.stringify(objBook); ////////////////////////////////////////
        deleteButton.style.marginBottom = "5px";
        deleteButton.classList.add("btn", "btn-danger");
        deleteButton.addEventListener("click", function () {
            card.remove();
            myWishList.splice(index, 1); // Remove book from myFavoriteList array
        });
        card.appendChild(deleteButton);
    
        // button for myFavoriteList
        let favoriteButton = document.createElement("button");
        favoriteButton.innerText = "add to favorites list";
        favoriteButton.value = objBook;
        favoriteButton.classList.add("btn", "btn-success");
        favoriteButton.addEventListener("click", function(){
            card.remove();// remove from card from canvas 
            myFavoritesList.push(myWishList.splice(index, 1))// add book to MyFavoritesList
            myWishList.splice(index, 1); // Remove book from myFavoriteList array
        });

        card.appendChild(favoriteButton);
    
        // Add the card element to the column element
        col.appendChild(card);
    
        // Add the column element to the container element
        container.appendChild(col);

    })
  
  // zero out the canvas
  listCanvas.innerHTML = "";
  // add the new books to the canvas
  listCanvas.appendChild(container);
 }

buttonForFavorites.addEventListener("click", function() {
    if (myFavoritesList.length === 0) {
        alert("YOU HAVE NO BOOKS SAVED");
      } else {
        renderFavoritesList(myFavoritesList);
      }
    });
    
function renderFavoritesList(myFavoriteList){

    //container element to hold the cards for each book
    const container = document.createElement("div");
    container.classList.add("row");
    container.style.border = "3px solid red"

    let closeButton = document.createElement("button")
    closeButton.innerText = "Close Favorites List"
    closeButton.value = 2;
    closeButton.classList.add("btn", "btn-danger");
    closeButton.addEventListener("click", closeList)
    container.appendChild(closeButton)

    let header = document.createElement("h1");
    header.innerText = "My Favorites List"
    container.appendChild(header)

    myFavoriteList.forEach((book, index) => {// target book with its own index
        const bookObj = JSON.parse(book)
        let bookTitle = bookObj.title
        let imgSrc = bookObj.src;
    
        // Create a column element to hold the card
        const col = document.createElement("div");
        col.classList.add("col-6", "col-md-4", "col-lg-3", "mb-4");
    
    //     // Create a card element and set its class
        const card = document.createElement("div");
        card.classList.add("card", "h-100");
    
    //     // Create an image element and set its source and alt text
        const img = document.createElement("img");
        img.classList.add("card-img-top");
        img.src = imgSrc;
        card.appendChild(img);
    
    //     // Create a card body element 
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
  
         card.appendChild(cardBody);    
        
    //     button for delete
        let objBook = {
          title: bookTitle,
          src: imgSrc,
        };

        let p = document.createElement("p")
        p.innerText = ""
         card.appendChild(p)

       // removes book
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "delete";
        deleteButton.value = JSON.stringify(objBook);
        deleteButton.style.marginBottom = "5px";
        deleteButton.classList.add("btn", "btn-danger");
        deleteButton.addEventListener("click", function() {
            card.remove();
            myFavoriteList.splice(index, 1); // Remove book from myFavoriteList array
        });

        card.appendChild(deleteButton);

        // Add a button to create a text area for notes
        let notesButton = document.createElement("button");
        notesButton.innerText = "Add Notes";
        notesButton.classList.add("btn", "btn-primary", "mx-2");


        notesButton.addEventListener("click", function() {
          notesButton.remove()
            // Create the text area
            let notesTextarea = document.createElement("textarea");
            notesTextarea.classList.add("form-control", "my-2");
            notesTextarea.placeholder = "Type your notes here...";
            // Add the text area to the card
            card.appendChild(notesTextarea);

          let addNote = document.createElement("button")
          card.appendChild(addNote);
          addNote.innerText = "add";
          addNote.classList.add("btn", "btn-success", "mx-2")
          addNote.addEventListener("click", function(){
           
            p.innerText = notesTextarea.value
    
            notesTextarea.remove();
            addNote.remove();
          })
             
        });

        card.appendChild(notesButton);

        // Add the card element to the column element
        col.appendChild(card);
    
        // Add the column element to the container element
        container.appendChild(col);
    })
    // zero out the canvas
  listCanvas.innerHTML = "";
  // add the new books to the canvas
  listCanvas.appendChild(container);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let value = input.value;
  getBooks(value);
  input.value = "";
});

async function getBooks(value) {
  const url = `https://openlibrary.org/search.json?q=${value}`;
  let res = await fetch(url);
  let data = await res.json();
  error(data.numFound);
  showBooks(data.docs);
}

function error(num) {
  if (num <= 0) {
    alert("no books found");
  }
}

function showBooks(books) {
  // show the top 100 books
  let top100 = books.slice(0, 100);

  // container element to hold the cards for each book
  const container = document.createElement("div");
  container.classList.add("row");

  let closeButton = document.createElement("button")
    closeButton.innerText = "Close Search List"
    closeButton.value = 3;
    closeButton.classList.add("btn", "btn-danger");
    closeButton.addEventListener("click", closeList)
    container.appendChild(closeButton)

  let header = document.createElement("h1");
    header.innerText = "search results"
    container.appendChild(header)


  // Loop through each book and create a card for it
  top100.forEach((book) => {
    // Create a column element to hold the card
    const col = document.createElement("div");
    col.classList.add("col-6", "col-md-4", "col-lg-3", "mb-4");

    // Create a card element and set its class
    const card = document.createElement("div");
    card.classList.add("card", "h-100");

    // Create an image element and set its source and alt text
    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
    img.alt = book.title;
    card.appendChild(img);

    // Create a card body element to hold the book title and author
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    // Create a title element for the book title and set its text content
    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = book.title;
    cardBody.appendChild(title);

    // paragraph element for the book author
    const author = document.createElement("p");
    author.classList.add("card-text");
    author.textContent = `Author: ${book.author_name}`;
    cardBody.appendChild(author);

    // Add the card body element to the card element
    card.appendChild(cardBody);

    // card footer for first publish year
    const cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");

    // button for myWishList
    let titleBook = book.title;
    let src = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;

    let objBook = {
      title: titleBook,
      src: src,
    };

    let wishButton = document.createElement("button");
    wishButton.innerText = "add to wish list";
    wishButton.value = JSON.stringify(objBook); ////////////////////////////////////////
    wishButton.style.marginBottom = "5px";
    wishButton.classList.add("btn", "btn-primary");
    wishButton.addEventListener("click", function (event) {
      myWishList.push(event.target.value);
    });
    card.appendChild(wishButton);

    // button for myFavoriteList
    let favoriteButton = document.createElement("button");
    favoriteButton.innerText = "add to favorites list";
    favoriteButton.value = JSON.stringify(objBook);;
    favoriteButton.classList.add("btn", "btn-primary");
    favoriteButton.addEventListener("click", function (event) {
        myFavoritesList.push(event.target.value)
    });
    card.appendChild(favoriteButton);

    // Create a small element for the first publish year & add the card footer element to the card element
    const firstPublishYear = document.createElement("small");
    firstPublishYear.classList.add("text-muted");
    firstPublishYear.textContent = `First Publish Year: ${book.first_publish_year}`;
    cardFooter.appendChild(firstPublishYear);
    card.appendChild(cardFooter);

    // Add the card element to the column element
    col.appendChild(card);

    // Add the column element to the container element
    container.appendChild(col);

  });
  // zero out the canvas
  canvas.innerHTML = "";
  // add the new books to the canvas
  canvas.appendChild(container);
}

function showCategories(cat) {

  let div = document.createElement("div");
  div.classList.add("flex-row-wrap");
  div.style.gap = "8px";
  div.style.border = "2px solid red"

  cat.forEach((category) => {
    let title = category.title;
    let src = category.src;

    let card = document.createElement("div");
    card.style.display = "flex";
    card.style.alignItems = "center";
    card.style.width = "18rem";
    card.style.height = "20rem";
    card.classList.add("card");

    let img = document.createElement("img");
    img.style.height = "16rem";
    img.classList.add("card-img-top");
    img.src = `${src}`;

    // let cardBody = document.createElement("div");
    // cardBody.classList.add("card-body");

    let button = document.createElement("button");
    button.innerText = title;
    button.value = title;
    button.style.marginTop = "1rem";
    button.classList.add("btn", "btn-primary", "card-title");
    button.addEventListener("click", showMeBooksFromCat);

    //cardBody.append(button);
    card.append(img, button);
    div.append(card);
  });
  displayDiv.append(div);
}
showCategories(bookCategory);

function showMeBooksFromCat(event) {
  let value = event.target.value;
  getBooks(value);
}

function closeList(event){
    event.stopPropagation()
    let list = event.target.value
    // console.log(list)
  switch (list) {
    case '1':
        listCanvas.innerHTML = ""
        break;
    case '2':
        listCanvas.innerHTML = ""
        break;
    case '3':
        canvas.innerHTML = ""
        break;
    default:
        break;
  }
}

// bugs that need to be fixed 
// p tag resets when list is rerendered => create var object to pass in text area content reference book to object via index 
// some times when list is clicked list dose not render don't know whats going on 
// when book is clicked more than one time is is added agin to the list 
// add loading animation
// add comments to functions that are missing comments 
// improve README


