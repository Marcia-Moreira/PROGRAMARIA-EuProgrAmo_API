// Base para Rodar Servidor JS:

const express = require("express")

const app = express()
const porta = 3333

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.listen(porta, mostraPorta)



// 1º Cria caminho da rota


// Ctrl+C => interrompe o servidor anterior
// No Terminal/PowerShell/Na Pasta do arquivo .js => node padrao_base_servidor.js 