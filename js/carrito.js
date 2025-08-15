const carritoIcon = document.getElementById("carrito-icon");
const carritoModal = document.getElementById("carrito-modal");
const cerrarCarrito = document.getElementById("cerrar-carrito");
const carritoItems = document.getElementById("carrito-items");
const carritoTotal = document.getElementById("carrito-total");
const botonesComprar = document.querySelectorAll(".boton-comprar");

let carrito = [];

botonesComprar.forEach(boton => {
    boton.addEventListener("click", (e) => {
        e.preventDefault();
        const nombre = boton.getAttribute("data-nombre");
        const precio = parseFloat(boton.getAttribute("data-precio"));
        agregarProductoCarrito(nombre, precio);
    });
});

function agregarProductoCarrito(nombre, precio) {
    // Si ya existe el producto, aumenta cantidad
    let productoExistente = carrito.find(p => p.nombre === nombre);
    if(productoExistente){
        productoExistente.cantidad += 1;
    } else {
        carrito.push({ nombre, precio, cantidad: 1 });
    }
    actualizarCarrito();
}

function actualizarCarrito() {
    carritoItems.innerHTML = "";
    let total = 0;
    carrito.forEach((producto, index) => {
        total += producto.precio * producto.cantidad;
        const li = document.createElement("li");
        li.innerHTML = `
            ${producto.nombre} x${producto.cantidad} - $${(producto.precio * producto.cantidad).toFixed(2)}
            <button onclick="eliminarProducto(${index})">X</button>
        `;
        carritoItems.appendChild(li);
    });
    if(carrito.length === 0){
        carritoItems.innerHTML = "<li>No hay productos aún</li>";
    }
    carritoTotal.textContent = total.toFixed(2);
    document.querySelector(".carrito-count").textContent = carrito.length;
}

function eliminarProducto(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

carritoIcon.addEventListener("click", () => {
    carritoModal.style.display = "block";
});

cerrarCarrito.addEventListener("click", () => {
    carritoModal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target == carritoModal) {
        carritoModal.style.display = "none";
    }
});
