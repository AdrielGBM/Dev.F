import data from "./data.js";
const cardContainer = document.querySelector("#card-container");
let currentHtml = "";

function toHTML(information) {
  currentHtml = "";
  information.forEach((product) => {
    currentHtml += `<div class="card">
        <img
          class="card__img"
          src=${product.image}
          alt=""x
        />
        <div class="card__content">
        <h1>${product.title}</h1>
          <span class="card__price">Precio ${product.price}</span>
          <span class="card__category">Categoria ${product.category}</span>
          <p class="card__desc">
            ${product.desc}
          </p>
        </div>
      </div>`;
  });
  cardContainer.innerHTML = currentHtml;
}

function mapping(information) {
  const newData = information.map((producto) => {
    const info = {
      price: producto.price,
      category: producto.category,
      image: producto.image,
      desc: producto.description,
      id: producto.id,
      title: producto.title,
    };
    return info;
  });
  toHTML(newData);
}
mapping(data);

document.getElementById("search").addEventListener("submit", function (event) {
  event.preventDefault();
  const filter = document.getElementById("filter").value;
  mapping(data.filter((product) => product.title.includes(filter)));
});
