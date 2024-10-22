document.addEventListener("DOMContentLoaded", () => {
  const cart = [];

  const addToCartButtons = document.querySelectorAll(".btn");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const bookElement = event.target.closest(".book");
      const bookTitle = bookElement.querySelector("h3").innerText;
      const bookAuthor = bookElement.querySelector("p").innerText;
      const bookPrice = bookElement.querySelectorAll("p")[1].innerText;
      const bookImage = bookElement.querySelector("img").src;

      const book = {
        title: bookTitle,
        author: bookAuthor,
        price: bookPrice,
        image: bookImage,
      };

      addBookToCart(book);
    });
  });

  function addBookToCart(book) {
    cart.push(book);
  }
});
function updateCartDisplay() {
  const cartItemsList = document.getElementById("cart-items");
  cartItemsList.innerHTML = "";

  cart.forEach((book) => {
    const cartItem = document.createElement("li");
    cartItem.innerHTML = `
            <img src="${book.image}" alt="${book.title}" style="width: 50px; height: 50px;">
            <strong>${book.title}</strong> by ${book.author} - ${book.price}
        `;
    cartItemsList.appendChild(cartItem);
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const cart = [];

  const addToCartButtons = document.querySelectorAll(".btn");
  const searchButton = document.querySelector(".btn-search");
  const searchInput = document.querySelector(".input-search");
  const bookElements = document.querySelectorAll(".book");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const bookElement = event.target.closest(".book");
      const bookTitle = bookElement.querySelector("h3").innerText;
      const bookAuthor = bookElement.querySelector("p").innerText;
      const bookPrice = bookElement.querySelectorAll("p")[1].innerText;
      const bookImage = bookElement.querySelector("img").src;

      const book = {
        title: bookTitle,
        author: bookAuthor,
        price: bookPrice,
        image: bookImage,
      };

      addBookToCart(book);
    });
  });

  searchButton.addEventListener("click", () => {
    const query = searchInput.value.toLowerCase();
    bookElements.forEach((bookElement) => {
      const title = bookElement.querySelector("h3").innerText.toLowerCase();
      const author = bookElement.querySelector("p").innerText.toLowerCase();
      if (title.includes(query) || author.includes(query)) {
        bookElement.style.display = "block";
      } else {
        bookElement.style.display = "none";
      }
    });
  });

  searchInput.addEventListener("keyup", () => {
    const query = searchInput.value.toLowerCase();
    bookElements.forEach((bookElement) => {
      const title = bookElement.querySelector("h3").innerText.toLowerCase();
      const author = bookElement.querySelector("p").innerText.toLowerCase();
      if (title.includes(query) || author.includes(query)) {
        bookElement.style.display = "block";
      } else {
        bookElement.style.display = "none";
      }
    });
  });

  function addBookToCart(book) {
    cart.push(book);
    updateCartDisplay();
  }

  function updateCartDisplay() {
    const cartItemsList = document.getElementById("cart-items");
    cartItemsList.innerHTML = "";

    cart.forEach((book) => {
      const cartItem = document.createElement("li");
      cartItem.innerHTML = `
                <img src="${book.image}" alt="${book.title}" style="width: 50px; height: 50px;">
                <strong>${book.title}</strong> by ${book.author} - ${book.price}
            `;
      cartItemsList.appendChild(cartItem);
    });
    console.log("Cart:", cart);
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.querySelector(".btn-search");
  const searchInput = document.querySelector(".input-search");
  const bookElements = document.querySelectorAll(".book");

  searchButton.addEventListener("click", () => {
    const query = searchInput.value.trim().toLowerCase();
    filterBooks(query);
  });

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    filterBooks(query);
  });

  function filterBooks(query) {
    bookElements.forEach((bookElement) => {
      const title = bookElement
        .querySelector("h3")
        .innerText.trim()
        .toLowerCase();
      const author = bookElement
        .querySelector("p")
        .innerText.trim()
        .toLowerCase();
      if (title.includes(query) || author.includes(query)) {
        bookElement.style.display = "block";
      } else {
        bookElement.style.display = "none";
      }
    });
  }
});
