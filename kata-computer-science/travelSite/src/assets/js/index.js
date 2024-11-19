const data = [
  {
    title: "Brazil",
    image: "assets/images/card1-640w.webp",
    alt: "imagen de una ciudad de brazil",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto facilis voluptatum cumque mollitia consequatur magnam, dolorem provident modi eos iste ut repellat pariatur laudantium tempore. Porro sunt vero quo aliquid.",
  },
  {
    title: "Portugal",
    image: "assets/images/card2-640w.webp",
    alt: "imagen de una ciudad de portugal",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto facilis voluptatum cumque mollitia consequatur magnam, dolorem provident modi eos iste ut repellat pariatur laudantium tempore. Porro sunt vero quo aliquid.",
  },
  {
    title: "México",
    image: "assets/images/card3-640w.webp",
    alt: "imagen de una pirámide de méxico",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto facilis voluptatum cumque mollitia consequatur magnam, dolorem provident modi eos iste ut repellat pariatur laudantium tempore. Porro sunt vero quo aliquid.",
  },
];
let favorites = JSON.parse(localStorage.getItem("favorites"));
const information = document.getElementById("information");
const search = document.getElementById("search");
const input = document.getElementById("filter");
let filter;

function initialize() {
  const placesArea = document.getElementById("places");
  const favoritesArea = document.getElementById("favorites");
  let area = "places";
  document.getElementById("close-button").onclick = close;

  if (!favorites) {
    favorites = [];
  }

  placesArea.addEventListener("click", () => {
    if (placesArea.classList.contains("clickable")) {
      area = "places";
      seeArea("places");
      toggleClass(placesArea, favoritesArea);
    }
  });
  favoritesArea.addEventListener("click", () => {
    if (favoritesArea.classList.contains("clickable")) {
      area = "favorites";
      seeArea("favorites");
      toggleClass(placesArea, favoritesArea);
    }
  });
  search.addEventListener("click", () => {
    filter = document.getElementById("filter").value;
    seeArea(area);
    filter = "";
  });

  seeArea("places");
}

function seeArea(areaData) {
  const containerPlaces = document.getElementById("places-container");
  let filteredData;
  containerPlaces.innerHTML = "";

  areaData =
    areaData === "places"
      ? data
      : data.filter((place) => favorites.includes(place.title));

  if (filter) {
    filteredData = areaData.filter((place) =>
      place.title.toLowerCase().includes(filter.toLowerCase())
    );
  } else {
    filteredData = areaData;
  }

  filteredData.forEach((place, i) => {
    const isFavorite = favorites.includes(place.title);
    const buttonClass = isFavorite ? "remove-button" : "favorite-button";
    const buttonText = isFavorite ? "Remove" : "Add to favorites";

    containerPlaces.innerHTML += `
      <div id="card" class="column border-radius shadow primary">
          <img
              class="expand border-radius"
              src="${place.image}"
              alt="${place.alt}"
          />
          <div class="column medium-container left large-padding">
              <h3>${place.title}</h3>
              <p>${place.description}</p>
          </div>
          <div class="row large-container center no-top-large-padding">
              <button class="primary-button visit-button" data-index="${i}">Visit place</button>
              <button class="secondary-button ${buttonClass}" data-index="${i}">${buttonText}</button>
          </div>
      </div>
    `;
  });
  activateButtons();
}

function activateButtons() {
  let visitButtons = document.querySelectorAll(".visit-button");
  let favoriteButtons = document.querySelectorAll(".favorite-button");
  let removeButtons = document.querySelectorAll(".remove-button");

  if (visitButtons) {
    visitButtons.forEach((button) => {
      button.replaceWith(button.cloneNode(true));
    });
  }
  if (favoriteButtons) {
    favoriteButtons.forEach((button) => {
      button.replaceWith(button.cloneNode(true));
    });
  }
  if (removeButtons) {
    removeButtons.forEach((button) => {
      button.replaceWith(button.cloneNode(true));
    });
  }

  visitButtons = document.querySelectorAll(".visit-button");
  favoriteButtons = document.querySelectorAll(".favorite-button");
  removeButtons = document.querySelectorAll(".remove-button");

  if (visitButtons) {
    visitButtons.forEach((button) => {
      button.addEventListener("click", () => {
        let index = button.getAttribute("data-index");
        information.style.display = "flex";
        document.querySelector("#information h2").textContent =
          data[index].title;
        document.querySelector("#information img").src = data[index].image;
        document.querySelector("#information img").alt = data[index].alt;
        document.querySelector("#information p").textContent =
          data[index].description;
      });
    });
  }

  if (favoriteButtons) {
    favoriteButtons.forEach((button) => {
      button.addEventListener("click", () => {
        let index = button.getAttribute("data-index");
        if (!favorites.includes(data[index].title)) {
          favorites.push(data[index].title);
          button.classList.remove("favorite-button");
          button.classList.add("remove-button");
          button.textContent = "Remove";
          activateButtons();
        }
        saveData();
      });
    });
  }

  if (removeButtons) {
    removeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        let index = button.getAttribute("data-index");
        if (favorites.includes(data[index].title)) {
          favorites = favorites.filter((title) => title !== data[index].title);
          button.classList.remove("remove-button");
          button.classList.add("favorite-button");
          button.textContent = "Add to favorites";
          activateButtons();
        }
        saveData();
      });
    });
  }
}

function close() {
  information.style.display = "none";
}

function toggleClass(places, favorites) {
  places.classList.toggle("clickable");
  places.classList.toggle("gray-font-color");
  favorites.classList.toggle("clickable");
  favorites.classList.toggle("gray-font-color");
}

function saveData() {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

window.addEventListener("DOMContentLoaded", initialize);
