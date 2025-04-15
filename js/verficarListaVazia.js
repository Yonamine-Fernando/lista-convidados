const mensagemVazia = document.querySelector(".lista-vazia");

function verificarListaVazia(listaDeNomes) {
    const nomeDaLista = listaDeNomes.querySelectorAll("li");
    if (nomeDaLista.length === 0) {
        mensagemVazia.style.display = "block";
    } else {
        mensagemVazia.style.display = "none";
    }
}


export default verificarListaVazia;