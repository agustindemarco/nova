const productos = [
    { name: 'Zapato 1', price: 500 },
    { name: 'Zapato 2', price: 100 },
    { name: 'Zapato 3', price: 200 },
    { name: 'Zapato 4', price: 300},
    { name: 'Zapato 5', price: 700},
    { name: 'Zapato 6', price: 700},
];
let count = 0;
let suma = 0;

const carrito = [ ] ;

function agregar(a) {
    carrito.push(productos[a]);
    console.table(carrito);
    count++;
    document.getElementById('count').innerHTML =  `${count} Items`;

    suma = suma + productos[a].price;
    document.getElementById('total').innerHTML =  `Total: $${suma} pesos`;

}