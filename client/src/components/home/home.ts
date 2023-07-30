function toggleDiv() {
    var div = document.getElementById("menu_lateral");
    if (div) {
        div.classList.toggle("ocultarLateral");
        div.classList.toggle("visivelLateral");
    }

    var button = document.getElementById("Alternar");
    if (button) {
        if (button.textContent === "Exibir filtros") {
            button.textContent = "Ocultar filtros";
        } else {
            button.textContent = "Exibir filtros";
        }
    }
}

/* function redirecionar() {
    window.location.href = "file:///C:/Users/bielj/Desktop/Projeto_PES_vite/src/home.html";
} */

/* const mostrarProgresso = () => {
    const scrollTop = document.documentElement.scrollTop  document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight  document.body.scrollHeight;
    const alturaJanela = document.documentElement.clientHeight || window.innerHeight;
    const progresso = (scrollTop / (scrollHeight - alturaJanela)) * 100;
    const progressoElement = document.getElementById("progresso");

    if (progressoElement) {
      progressoElement.style.width = ${progresso}%;
      progressoElement.classList.add("mostrar");
    }
}; */