let topping = prompt(
  "¿Qué topping deseas para tu helado? (oreo, KitKat, brownie)"
);

let precioHelado = 50;
let precioTotal;

switch (topping.toLowerCase()) {
  case "oreo":
    precioTotal = precioHelado + 10;
    alert(`El precio total es ${precioTotal} MXN`);
    break;
  case "kitkat":
    precioTotal = precioHelado + 15;
    alert(`El precio total es ${precioTotal} MXN`);
    break;
  case "brownie":
    precioTotal = precioHelado + 20;
    alert(`El precio total es ${precioTotal} MXN`);
    break;
  default:
    alert("No tenemos este topping, lo sentimos.");
    alert(`El precio del helado sin ningún topping es ${precioHelado} MXN`);
}
