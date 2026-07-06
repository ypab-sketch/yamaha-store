document.addEventListener("DOMContentLoaded", () => {

    console.log("pesquisa.js carregou");

    const campoPesquisa = document.getElementById("pesquisa");
    const lista = document.getElementById("lista-produtos");

    if (!campoPesquisa || !lista) return;

    campoPesquisa.addEventListener("input", function () {
        
        console.log("Digitou:", this.value);

        const texto = this.value.toLowerCase();

        const cards = lista.querySelectorAll(".card");

        cards.forEach(card => {

            const nome = card.querySelector("h3").textContent.toLowerCase();

            if (nome.includes(texto)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });

});