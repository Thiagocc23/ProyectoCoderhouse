const productos = [
    { nombre: "harina", precio: 50 },
    { nombre: "galletitas", precio: 100 },
    { nombre: "cerveza", precio: 150 },
    { nombre: "leche", precio: 200 },
    { nombre: "gaseosa", precio: 250 }
];

let carrito = [];

function mostrarProductos() {
    alert("A continuación se le mostrará la lista de productos disponibles:");
    const listaProductos = productos.map(producto => `${producto.nombre} - $${producto.precio}`);
    alert(listaProductos.join("\n"));
}

function agregarAlCarrito(producto, unidades) {
    const productoEncontrado = productos.find(item => item.nombre === producto);
    if (productoEncontrado) {
        carrito.push({ producto: productoEncontrado.nombre, unidades, precio: productoEncontrado.precio });
        console.log(`Producto "${productoEncontrado.nombre}" agregado al carrito.`);
    } else {
        alert("El producto seleccionado no está disponible en el kiosco.");
    }
}

function realizarCompra() {
    alert("Gracias por la compra. A continuación, ingrese a la consola para ver el detalle de su compra:");
    carrito.forEach(item => {
        console.log(`Producto: ${item.producto}, Unidades: ${item.unidades}, Total: $${item.unidades * item.precio}`);
    });
    const total = carrito.reduce((acc, item) => acc + item.unidades * item.precio, 0);
    console.log(`Total a pagar: $${total}`);
}

function iniciarCompra() {
    alert("Bienvenido al sistema de compra de Kiosco Verde");
    let seleccion = prompt("¿Desea comprar algún producto? Responda con 'si' o 'no'");

    while (seleccion !== "si" && seleccion !== "no") {
        alert("Por favor ingrese 'si' o 'no'.");
        seleccion = prompt("¿Desea comprar algún producto? Responda con 'si' o 'no'");
    }

    if (seleccion === "si") {
        mostrarProductos();
    } else if (seleccion === "no") {
        alert("Gracias por venir. ¡Hasta pronto!");
        return;
    }

    while (seleccion !== "no") {
        const producto = prompt("Agregue un producto a su carrito:");
        const unidades = parseInt(prompt("¿Cuántas unidades desea llevar?"));
        agregarAlCarrito(producto, unidades);
        seleccion = prompt("¿Desea seguir comprando? Responda con 'si' o 'no'");
    }

    realizarCompra();
}

iniciarCompra();
