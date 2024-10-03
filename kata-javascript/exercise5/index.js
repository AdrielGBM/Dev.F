const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");

let color = "red";

function turnOnTrafficLight() {
  red.style.backgroundColor = "red";
  let interval = setInterval(changeColor, 4000);
  setTimeout(() => turnOffTrafficLight(interval), 40000);
}

function changeColor() {
  switch (color) {
    case "red":
      red.style.backgroundColor = "darkred";
      green.style.backgroundColor = "lightgreen";
      for (let i = 1600; i < 4000; i++) {
        blink("darkgreen", i);
        blink("lightgreen", i + 400);
        i += 800;
      }
      color = "green";
      break;
    case "yellow":
      yellow.style.backgroundColor = "darkgoldenrod";
      red.style.backgroundColor = "red";
      color = "red";
      break;
    case "green":
      green.style.backgroundColor = "darkgreen";
      yellow.style.backgroundColor = "yellow";
      color = "yellow";
      break;
  }
}

function blink(color, time) {
  setTimeout(() => (green.style.backgroundColor = color), time);
}

function turnOffTrafficLight(interval) {
  clearInterval(interval);
  red.style.backgroundColor = "darkred";
  yellow.style.backgroundColor = "darkgoldenrod";
  green.style.backgroundColor = "darkgreen";
}

window.addEventListener("load", turnOnTrafficLight);
