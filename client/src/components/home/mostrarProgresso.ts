const mostrarProgresso = () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  const alturaJanela = document.documentElement.clientHeight || window.innerHeight;
  const progresso = (scrollTop / (scrollHeight - alturaJanela)) * 100;
  const progressoElement = document.getElementById("progresso");

  if (progressoElement) {
    progressoElement.style.width = `${progresso}%`;
    progressoElement.classList.add("mostrar");
  }
};

export default mostrarProgresso;