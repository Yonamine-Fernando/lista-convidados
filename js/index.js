import { criarNomeDaLista } from "./criarNomeDaLista.js";
import verificarListaVazia from "./verficarListaVazia.js";
const listaDeNomes = document.querySelector("#name-list");
const adicionarNome = document.querySelector(".button-item");


adicionarNome.addEventListener("click", (evento) => {
    evento.preventDefault();
    const nomeDaLista = criarNomeDaLista();
    listaDeNomes.appendChild(nomeDaLista);
    verificarListaVazia(listaDeNomes);

});



verificarListaVazia(listaDeNomes);