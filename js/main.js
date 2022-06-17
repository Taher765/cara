let mode = document.querySelector("#mode");
let bagShopping = document.querySelector("#shopping");
let body = document.body;
let menuShopping = document.querySelector(".menu-shopping");
let closeMenu = document.querySelector(".menu-shopping .close");
let item = document.querySelector(".menu-shopping .item");
let itemCount = document.querySelector(".shopping-list .item span");
let cart = document.querySelectorAll(".cart");
let count = document.querySelector(".count");
let liPrice = document.querySelector(".price");
let counter = 0


// Start Dark Mode
mode.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  mode.classList.toggle("fa-sun");
});

// show menu shopping

bagShopping.addEventListener("click", () => {
  menuShopping.classList.add("show");
});

// close menu shopping
closeMenu.addEventListener("click", () => {
  menuShopping.classList.remove("show");
});


// Add To Cart

cart.forEach((cart) => {
  cart.addEventListener("click", (e) => {
    
    counter ++ 
    count.innerHTML = counter;
    itemCount.innerHTML = counter
    
    let name = e.target.dataset.name;
    let price = e.target.dataset.price;
    let brand = e.target.dataset.brand;
    let src = e.target.dataset.src;

    let itemDiv = document.createElement("div");
    itemDiv.className = "bg-light p-2 mt-3 rounded align-items-center justify-content-between d-flex";
    let del = document.createElement("i");
    del.className = "fa-solid fa-trash-can"
    let imgDiv = document.createElement("div");
    imgDiv.className = "imag"
    let img = document.createElement("img");
    img.setAttribute("width","50px")
    img.setAttribute("src", src);
    imgDiv.appendChild(img);
    let h6 = document.createElement("h6");
    h6.className = "m-0";
    let contentBrand = document.createTextNode(brand);
    h6.appendChild(contentBrand)
    let span1 = document.createElement("span");
    let spanName = document.createTextNode(name);
    span1.appendChild(spanName)
    let span2 = document.createElement("span");
    let spanPrice = document.createTextNode(price);
    span2.appendChild(spanPrice)
    
    itemDiv.appendChild(del);
    itemDiv.appendChild(imgDiv);
    itemDiv.appendChild(h6);
    itemDiv.appendChild(span1);
    itemDiv.appendChild(span2);
    item.appendChild(itemDiv);

    // delete Product
    del.addEventListener("click", () => {
      itemDiv.remove();
      counter--;
      count.innerHTML = counter;
      itemCount.innerHTML = counter;

      liPrice.innerHTML = eval(parseFloat(liPrice.innerHTML) - parseFloat(price)).toFixed(2) + " $";
    });
    
      liPrice.innerHTML =  eval(parseFloat(liPrice.innerHTML) + parseFloat(span2.innerHTML)).toFixed(2) + " $";
      console.log(liPrice.innerHTML);



    // item.innerHTML += `
    //   <div class="bg-light p-2 mt-3 rounded align-items-center gap-3 d-flex">
    //     <div class="imag"><img class="w-100" src="${src}"></div>
    //     <h6 class="m-0">${brand}</h6>
    //     <span>${name}</span>
    //     <span>${price}</span>
    //     <div class="min-max d-flex gap-2 align-items-center">
    //       <span>-</span>
    //       <span>+</span>
    //     </div>
    //   </div>
    // `;
  });
});

// wow js library setup
wow = new WOW({
  boxClass: "wow", // default
  animateClass: "animated", // default
  offset: 0, // default
  mobile: false, // default (true)
  live: true, // default
});
wow.init();

// typtit js library setup
document.addEventListener("DOMContentLoaded", function () {
  new TypeIt("#element", {
    strings: ["On all products "],
  }).go();
});
