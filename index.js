const inputNome = document.querySelector("#input-nome");
const listaDeNomes = document.querySelector("#name-list")
const adicionarNome = document.querySelector(".button-item");
contador = 0




adicionarNome.addEventListener("click", (evento) => {
    evento.preventDefault();
    if (inputNome.value === "") {
        alert("Inserir um nome");
        return;
    }

    const nomeDaLista = document.createElement("li");
    const containerNomeDaLista = document.createElement("div");
    containerNomeDaLista.classList.add("list-item-container")
    const inputCheckBox = document.createElement("input")
    inputCheckBox.type = "checkbox"
    inputCheckBox.id = `checkbox-${contador++}`
    const nomeConvidado = document.createElement("p")
    nomeConvidado.innerText = inputNome.value

    containerNomeDaLista.appendChild(inputCheckBox);
    containerNomeDaLista.appendChild(nomeConvidado)

    nomeDaLista.appendChild(containerNomeDaLista)
    listaDeNomes.appendChild(nomeDaLista)
});