document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const indicadores = document.querySelectorAll(".indicadores span");

    indicadores.forEach((indicador, index) => {
        indicador.addEventListener("click", () => {
            // Quitar clase activa de todos
            slides.forEach(s => s.classList.remove("active"));
            indicadores.forEach(i => i.classList.remove("activo"));

            // Activar el seleccionado
            slides[index].classList.add("active");
            indicador.classList.add("activo");
        });
    });
});
