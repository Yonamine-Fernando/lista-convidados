import { criarNomeDaLista } from "./criarNomeDaLista.js";

const listaDeNomes = document.querySelector("#name-list");
const adicionarNome = document.querySelector(".button-item");


adicionarNome.addEventListener("click", (evento) => {
    evento.preventDefault();
    const nomeDaLista = criarNomeDaLista();
    listaDeNomes.appendChild(nomeDaLista);
    verificarListaVazia()

});

const mensagemVazia = document.querySelector(".lista-vazia");

function verificarListaVazia() {
    const nomeDaLista = listaDeNomes.querySelectorAll("li");
    if (nomeDaLista.length === 0) {
        mensagemVazia.style.display = "block";
    } else {
        mensagemVazia.style.display = "none";
    }
}

verificarListaVazia()