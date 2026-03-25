document.addEventListener("DOMContentLoaded", function() {
    const selector = document.getElementById("lang");

    if (!selector) return;

    function cambiarIdioma() {
        const idioma = selector.value;

        if (idioma === "es") window.location.href = "index.html";
        if (idioma === "en") window.location.href = "ingles.html";
        if (idioma === "pt") window.location.href = "portugues.html";
    }

    selector.addEventListener("change", cambiarIdioma);
    selector.addEventListener("blur", cambiarIdioma); // extra para móvil
});