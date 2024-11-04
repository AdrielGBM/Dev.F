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
const containerPlaces = document.getElementById("places-container");
const information = document.getElementById("information");
let closeButton = document.getElementById("close-button");

for (let i = 0; i < data.length; i++) {
  containerPlaces.innerHTML += `
    <div id="card" class="column border-radius shadow primary">
        <img
            class="expand border-radius"
            src="${data[i].image}"
            alt="${data[i].alt}"
        />
        <div class="column medium-container left large-padding">
            <h3>${data[i].title}</h3>
            <p>${data[i].description}</p>
        </div>
        <div class="row large-container center no-top-large-padding">
            <button class="primary-button visit-button" data-index="${i}">Visit place</button>
            <button class="secondary-button">Add to favorites</button>
        </div>
    </div>
  `;
}

let visitButtons = document.querySelectorAll(".visit-button");

for (let i = 0; i < visitButtons.length; i++) {
  visitButtons[i].addEventListener("click", function () {
    let index = this.getAttribute("data-index");
    information.style.display = "flex";
    document.querySelector("#information h2").textContent = data[index].title;
    document.querySelector("#information img").src = data[index].image;
    document.querySelector("#information img").alt = data[index].alt;
    document.querySelector("#information p").textContent =
      data[index].description;
  });
}

function close() {
  information.style.display = "none";
}

closeButton.onclick = close;
