import axios from "axios"
//import bootstrap from "bootstrap"
import "bootstrap/dist/css/bootstrap.css"

const criarTabela = listaDeVeiculos => {
    const colunas = [
        "key",
        "Marca",
        "Modelo",
        "Placa",
        "Cor"
    ]

    const tabela = document.createElement("table")
    tabela.setAttribute("id", "tabelaCarros")
    tabela.classList.add("table")
    tabela.classList.add("table-dark")
    tabela.classList.add("table-hover")
    const cabecalho = document.createElement("thead")
    const linhaCabecalho = document.createElement("tr")

    for(const coluna of colunas) {
        const titulo = document.createElement("th")
        titulo.innerText = coluna
        linhaCabecalho.append(titulo)
    }

    cabecalho.append(linhaCabecalho)
    tabela.append(cabecalho)
    const veiculoDiv = document.querySelector("#veiculos")
    veiculoDiv.append(tabela)
}

const iniciaPrograma = async() => {
    const veiculoDiv = document.querySelector("#veiculos")
    const listaDeVeiculos = (await axios.get("https://aline-garagem.deta.dev/veiculos")).data.carros
    
    criarTabela()

    const tabelaCarros = document.querySelector("#tabelaCarros")
    const tableBody = document.createElement("tbody")

    for(const veiculo of listaDeVeiculos) {
        const row = document.createElement("tr")

        const key = document.createElement("td")
        key.innerText = veiculo.key
        row.append(key)

        const marca = document.createElement("td")
        marca.innerText = veiculo.marca
        row.append(marca)

        const modelo = document.createElement("td")
        modelo.innerText = veiculo.modelo
        row.append(modelo)

        const placa = document.createElement("td")
        placa.innerText = veiculo.placa
        row.append(placa)

        const cor = document.createElement("td")
        cor.innerText = veiculo.cor
        row.append(cor)

        tableBody.append(row)
    }

    tabelaCarros.append(tableBody)
}

window.onload = iniciaPrograma()