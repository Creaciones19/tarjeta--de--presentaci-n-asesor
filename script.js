const selector = document.getElementById("lang");

selector.addEventListener("change", function() {
    const idioma = this.value;
    if(idioma === "es") window.location.href = "index.html";
    if(idioma === "en") window.location.href = "ingles.html";
    if(idioma === "pt") window.location.href = "portugues.html";
});