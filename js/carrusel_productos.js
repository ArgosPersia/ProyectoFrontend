(function() {
const pista = document.querySelector(".carrusel-pista");
const slides = document.querySelectorAll(".carrusel-slide");
const indicadoresCont = document.querySelector(".carrusel-indicadores");

const slidesVisibles = 4;
const totalSlides = slides.length;

let indiceActual = 0;

for (let i = 0; i < totalSlides; i++) {
    const boton = document.createElement("button");
    boton.addEventListener("click", () => {
    indiceActual = i;
    moverCarrusel();
    actualizarIndicadores();
    });
    indicadoresCont.appendChild(boton);
}

function moverCarrusel() {
    const slideWidth = slides[0].offsetWidth + 15;
    const pistaWidth = pista.offsetWidth;

    const posicionSlide = indiceActual * slideWidth;
    const centroContenedor = pistaWidth / 2;
    const desplazamiento = centroContenedor - (slideWidth / 2) - posicionSlide;

    const maxDesplazamiento = 0;
    const minDesplazamiento = pistaWidth - (slideWidth * totalSlides);

    const desplazamientoLimitado = Math.min(maxDesplazamiento, Math.max(minDesplazamiento, desplazamiento));

    pista.style.transform = `translateX(${desplazamientoLimitado}px)`;
}

function actualizarIndicadores() {
    const botones = indicadoresCont.querySelectorAll("button");
    botones.forEach((btn, i) => {
    btn.classList.toggle("activo", i === indiceActual);
    });
}

actualizarIndicadores();
moverCarrusel();
console.log("carrusel_productos.js cargado");
})();
