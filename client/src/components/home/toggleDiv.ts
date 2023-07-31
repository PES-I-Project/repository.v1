const toggleDiv = () => {
    const div = document.getElementById("menu_lateral");
    if (div) {
      div.classList.toggle("ocultarLateral");
      div.classList.toggle("visivelLateral");
    }
  
    const button = document.getElementById("Alternar");
    if (button) {
      if (button.textContent === "Exibir filtros") {
        button.textContent = "Ocultar filtros";
      } else {
        button.textContent = "Exibir filtros";
      }
    }
  };
  
  export default toggleDiv;