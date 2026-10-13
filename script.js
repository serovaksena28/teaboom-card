const size100 = document.getElementById("size100");
const size500 = document.getElementById("size500");
const size1000 = document.getElementById("size1000");
const size5000 = document.getElementById("size5000");

const article = document.getElementById("article");
const oldPrice = document.getElementById("old-price");
const price = document.getElementById("price");


size100.onclick = function () {
  article.textContent = "01306";
  oldPrice.textContent = "349,20 ₽";
  price.textContent = "326,40 ₽";

  size100.className = "product-card__size product-card__size--active";
  size500.className = "product-card__size";
  size1000.className = "product-card__size";
  size5000.className = "product-card__size";
};


size500.onclick = function () {
  article.textContent = "01307";
  oldPrice.textContent = "1 646 ₽";
  price.textContent = "1 432 ₽";

  size100.className = "product-card__size";
  size500.className = "product-card__size product-card__size--active";
  size1000.className = "product-card__size";
  size5000.className = "product-card__size";
};


size1000.onclick = function () {
  article.textContent = "01308";
  oldPrice.textContent = "2 592 ₽";
  price.textContent = "2 064 ₽";

  size100.className = "product-card__size";
  size500.className = "product-card__size";
  size1000.className = "product-card__size product-card__size--active";
  size5000.className = "product-card__size";
};


size5000.onclick = function () {
  article.textContent = "01309";
  oldPrice.textContent = "8 710 ₽";
  price.textContent = "6 320 ₽";

  size100.className = "product-card__size";
  size500.className = "product-card__size";
  size1000.className = "product-card__size";
  size5000.className = "product-card__size product-card__size--active";
};