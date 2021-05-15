const productos = [
  { name: "Zapato 1", price: 500 },
  { name: "Zapato 2", price: 100 },
  { name: "Zapato 3", price: 200 },
  { name: "Zapato 4", price: 300 },
  { name: "Zapato 5", price: 700 },
  { name: "Zapato 6", price: 700 },
];
let count = 0;
let suma = 0;
let carrito = [];

function agregar(a) {
  console.clear();
  let b = Number(document.getElementById("cant" + a).value);
  for (let i = 0; i < b; i++) {
    carrito.push(productos[a]);
    count++;
    suma = suma + productos[a].price;
  }
  console.table(carrito);
  console.log("Zapatos en el carrito:", carrito.length);
  document.getElementById("count").innerHTML = `${count} Items`;
  document.getElementById("total").innerHTML = `Total: $${suma} pesos`;
  document.getElementById("vaciar").classList.remove("hidden");
}

function vaciar() {
  carrito = [];
  count = 0;
  suma = 0;
  console.log("Zapatos en el carrito:", carrito.length);
  document.getElementById("count").innerHTML = `Vacío`;
  document.getElementById("total").innerHTML = ``;
  document.getElementById("vaciar").classList.add("hidden");
}
