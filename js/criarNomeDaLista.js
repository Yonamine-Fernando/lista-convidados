import gerarData from "./gerarData.js";

const inputNome = document.querySelector("#input-nome");
let contador = 0;

export function criarNomeDaLista() {
    if (inputNome.value === "") {
        alert("Inserir um nome");
        return;
    }

    const nomeDaLista = document.createElement("li");
    const containerNomeDaLista = document.createElement("div");
    containerNomeDaLista.classList.add("list-item-container");
    const inputCheckBox = document.createElement("input");
    inputCheckBox.type = "checkbox";
    inputCheckBox.id = `checkbox-${contador++}`;
    const nomeConvidado = document.createElement("p");
    nomeConvidado.innerText = inputNome.value;

    inputCheckBox.addEventListener("click", function () {
        if (inputCheckBox.checked) {
            nomeConvidado.style.textDecoration = "line-through";
        } else {
            nomeConvidado.style.textDecoration = "none";
        }
    });

    containerNomeDaLista.appendChild(inputCheckBox);
    containerNomeDaLista.appendChild(nomeConvidado);

    nomeDaLista.appendChild(containerNomeDaLista);
    const dataCompleta = gerarData();

    const mostrarData = document.createElement("p");
    mostrarData.classList.add("texto-data");
    mostrarData.innerText = dataCompleta;

    nomeDaLista.appendChild(mostrarData);

    return nomeDaLista;

}

