const products = [
  {
    title: "Acacia Honey",
    price: 19900,
    img: "img/image.webp"
  },
  {
    title: "Moonlight Korean Soju",
    price: 29900,
    img: "img/image (1).webp"
  },
  {
    title: "Hanwoo Beef BBQ Set",
    price: 35900,
    img: "img/image (2).webp"
  },
  {
    title: "Handcrafted Ceramic Cup",
    price: 14900,
    img: "img/image (3).webp"
  },
  {
    title: "LEGOLAND Korea Ticket",
    price: 26900,
    img: "img/image (4).webp"
  },
  {
    title: "Spicy Chicken Stir-Fry Box",
    price: 34900,
    img: "img/image (5).webp"
  }
];

let cartList = [];

const productContainer = document.querySelector("#product-container");
const cartContainer = document.querySelector("#cart-container");
const ttlAmount = document.querySelector(".ttlAmount");

function handleDrawProducts(products, container)
{
  container.innerHTML = "";

  products.forEach(product => {
    const col = document.createElement("div");
    col.classList.add("col-12", "col-md-4");
  
    col.innerHTML = container == productContainer ? `
      <div class="card w-100 h-100">
        <img class="card-img-top img-fluid" style="height: 200px; object-fit: cover;" src="${product.img}" alt="${product.title} image">
        <div class="card-body text-center">
          <h5 class="card-title text-light-emphasis">${product.title}</h5>
          <p class="card-text text-light-emphasis">₩${product.price.toLocaleString()}</p>
          <button href="#" class="btn text-light addToCart" style="background-color: #d0a2ca;">Add to cart</button>
        </div>
      </div>
    ` : `
      <div class="card text-white border-0">
      <img src="${product.img}" class="card-img" alt="${product.title} image" style="opacity: 0.6;">
      <div class="card-img-overlay">
        <h5 class="card-title text-light-emphasis">${product.title}</h5>
        <p class="card-text text-light-emphasis">₩${product.price.toLocaleString()}</p>
      </div>
      </div>
    `;
  
    const addToCartBtn = col.querySelector(".addToCart");
    if(addToCartBtn)
    {
      addToCartBtn.addEventListener("click", () => handleAddToCart(product));
    }
    container.appendChild(col);
  })
}

function handleAddToCart(product)
{
  cartList = [...cartList, product];
  const amount = cartList.reduce((accumulator, product) => accumulator + product.price, 0)
  ttlAmount.innerText = amount.toLocaleString();
  handleDrawProducts(cartList, cartContainer);
}

document.addEventListener("DOMContentLoaded", () => {
  handleDrawProducts(products, productContainer);
});

