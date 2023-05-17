const botaoAlterarTema= document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

botaoAlterarTema.addEventListener("click",()=> { const modoEscuroEstaAtivo = body.classList.contains ("modo-escuro");
 

  

  if (modoEscuroEstaAtivo) {
    ImagemBotaoAlterarTema.setAttribute("src" , "./imagens/sun.png");
    body.classList.remove("modo-escuro")
  } else {
    ImagemBotaoAlterarTema.setAttribute ("src" , "./imagens/moon.png");
    body.classList.add("modo-escuro");
  }




})





const ImagemBotaoAlterarTema = document.querySelector(".sol");

